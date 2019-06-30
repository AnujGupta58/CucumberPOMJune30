package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(

		features="features" ,
		glue="stepDefinition",
		//tags= {"@SmokeTest,@RegressionTest"},
		monochrome=false,
		dryRun=false,
		plugin = {"pretty",
				"html: HTMLReport",
				"json:JSONReport/cucumber.json",
				"junit:JUNITReport/cucumber.xml"
		}

		)


public class LoginTestRunner {

}
