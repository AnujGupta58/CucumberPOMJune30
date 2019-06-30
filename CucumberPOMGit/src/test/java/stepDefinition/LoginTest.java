package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import stepDefinition.LoginOR;

public class LoginTest {
	WebDriver driver;
	LoginOR object;
		
	@Given("User is on DemoWebShop HomePage")
	public void user_is_on_DemoWebShop_HomePage() {
	    System.out.println("User is on DemoWebShop HomePage");
	    System.setProperty("webdriver.gecko.driver","resources\\geckodriver.exe");
	    driver = new FirefoxDriver();
	    driver.manage().window().maximize();
	    driver.get("http://demowebshop.tricentis.com/login");
	    
	}

	@When("User enter {string} and {string} on login page")
	public void user_enter_and_on_login_page(String string, String string2) {
		 System.out.println("User enter credentials on login page");
		/* driver.findElement(By.id("Email")).sendKeys(string);
		 driver.findElement(By.id("Password")).sendKeys(string2);
		 driver.findElement(By.xpath("//input[@value='Log in']")).click();*/
		 object = new LoginOR(driver);
		 object.username.sendKeys(string);
		 object.password.sendKeys(string2);
		 object.login.click();
	}

	@Then("User should be logged in successfully")
	public void user_should_be_logged_in_successfully() {
		 System.out.println("User should be logged in successfully");
	}
}
