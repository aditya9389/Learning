package org.example.Step;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.testng.Assert;

import java.util.List;
import java.util.Map;

public class ApiSteps{

    public static Response response;

    static int userId;
    int productId = 2;

    @Given("set the base uri")
    public void set_the_base_uri() {
        RestAssured.baseURI = "http://localhost:5000";
    }

    @When("get request to import products")
    public void get_request_to_import_products() {
        response = RestAssured.get("/api/products");
    }

    @Then("status code is {int}")
    public void status_code_is(int code) {
        Assert.assertEquals(response.statusCode(), code);
//        response.then().statusCode(200);
    }

    @Then("response contains non empty product array")
    public void response_contains_non_empty_product_array() {
        List<Object> products = response.jsonPath().getList("$");
        Assert.assertFalse(products.isEmpty());
    }

    @When("post request to signup user")
    public void post_request_to_signup_user() {
        response = RestAssured.given()
                .body("{\"name\":\"John Doe\", \"email\":\"john@example.com\", \"password\":\"securepassword\"}")
                .contentType("application/json")
                .when().post("/api/users/signup");
    }

    @Then("response contains {string}")
    public void response_contains(String msg) {
        Assert.assertEquals(response.jsonPath().getString("message"), msg);
    }

    @Then("response fields are not null")
    public void response_fields_are_not_null() {
        Assert.assertTrue(response.jsonPath().getInt("user.id") > 0);
        Assert.assertFalse(response.jsonPath().getString("user.name").isEmpty());
        Assert.assertFalse(response.jsonPath().getString("user.email").isEmpty());
    }

    @When("post request to login user")
    public void post_request_to_login_user() {
        response = RestAssured.given()
                .body("{ \"email\": \"john@example.com\", \"password\": \"securepassword\"}")
                .contentType("application/json")
                .when().post("/api/users/login");
    }

    @And("token is not null and not empty")
    public void token_is_not_null_and_not_empty() {
        String token = response.jsonPath().getString("token");

        Assert.assertFalse(token.isEmpty());
        userId = response.jsonPath().getInt("user.id");
    }

    @When("post request to add to cart")
    public void post_request_to_add_cart() {
        response = RestAssured.given()
                .body("{ \"userId\":" + userId + ", \"productId\":" + productId + ", \"quantity\": 2 }")
                .contentType("application/json")
                .when().post("/api/cart/addToCart");
    }

    @Then("response fields are same as request")
    public void response_fields_are_same_as_request() {
        Assert.assertEquals(response.jsonPath().getInt("cartItem.user_id"), userId);
        Assert.assertEquals(response.jsonPath().getInt("cartItem.product_id"), 2);
        Assert.assertEquals(response.jsonPath().getInt("cartItem.quantity"), 2);
    }

    @When("get request to user cart")
    public void get_request_to_user_cart() {
        response = RestAssured.given()
                .when().get("/api/cart/" + userId);
    }

    @Then("response is an array")
    public void response_is_an_array() {
        List<Object> products = response.jsonPath().getList("$");

        Assert.assertFalse(products.isEmpty());
    }

    @Then("each response contains required fields")
    public void each_response_contains_required_fields() {
        Assert.assertFalse(response.jsonPath().getString("product_name").isEmpty());
        Assert.assertFalse(response.jsonPath().getString("price").isEmpty());
        Assert.assertEquals(response.jsonPath().getString("qty") , "[1]");
    }

    @When("delete request to remove cart item")
    public void delete_request_to_remove_cart_item() {
        response = RestAssured.given()
                .when().delete("/api/cart/" + userId + "/" + productId);
    }

    @When("delete request to clear cart")
    public void delete_request_to_clear_cart() {
        response = RestAssured.given()
                .when().delete("/api/cart/" + userId);
    }

    @When("post request to add to wishlist")
    public void post_request_to_add_to_wishlist() {
        response = RestAssured.given()
                .body("{ \"userId\":" + userId + ", \"productId\": " + productId + " }")
                .contentType("application/json")
                .when().post("/api/wishlist/");
    }

    @Then("response fields are same as request two")
    public void response_fields_are_same_as_request_two() {
        Assert.assertEquals(userId, response.jsonPath().getInt("item.user_id"));
        Assert.assertEquals(productId, response.jsonPath().getInt("item.product_id"));
    }

    @When("get request to wishlist")
    public void get_request_to_wishlist() {
        response = RestAssured.given()
                .when()
                .get("/api/wishlist/" + userId);
    }

    @Then("each item contains required fields")
    public void each_item_contains_required_fields() {
        List<Map<String, Object>> items = response.jsonPath().getList("$");

        for (Map<String, Object> item : items) {
            Assert.assertTrue(item.containsKey("wishlist_id"));
            Assert.assertTrue(item.containsKey("product_name"));
            Assert.assertTrue(item.containsKey("price"));
            Assert.assertTrue(item.containsKey("brand_name"));
        }
    }

    @When("delete request to wishlist")
    public void delete_request_to_wishlist() {
        response = RestAssured.given()
                .body("{ \"userId\":" + userId + ", \"productId\":" + productId + " }")
                .contentType("application/json")
                .when().delete("/api/wishlist/");
    }
}