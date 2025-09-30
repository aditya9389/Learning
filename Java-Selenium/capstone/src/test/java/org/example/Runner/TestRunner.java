package org.example.Runner;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(
    features = "src/test/resources/features/shopping.feature",
    glue = {"org.example.Step"},
    plugin = {"pretty", "html:target/cucumber-reports.html", "json:target/cucumber.json"},
    monochrome = true,tags = "@rem"
)
public class TestRunner extends AbstractTestNGCucumberTests {
}

