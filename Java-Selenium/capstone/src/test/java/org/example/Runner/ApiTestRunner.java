package org.example.Runner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "C:\\Aditya\\projects\\capstone\\src\\test\\resources\\features\\Api.feature",
        glue = "org.example.Step")
public class ApiTestRunner {
}