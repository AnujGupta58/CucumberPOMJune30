package stepDefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class LoginOR {
	
	WebDriver driver;
	
	public LoginOR(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(id="Email") WebElement username;
	@FindBy(name="Password") WebElement password;
	@FindBy(how = How.XPATH, using = "//input[@value='Log in']" ) WebElement login;
}
