$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:features/DemoWebShopLogin.feature");
formatter.feature({
  "name": "DemoWebShop Login Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on DemoWebShop HomePage",
  "keyword": "Given "
});
formatter.step({
  "name": "User enter \"\u003cemail\u003e\" and \"\u003cpassword\u003e\" on login page",
  "keyword": "When "
});
formatter.step({
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "pratiksha@test.com",
        "pratiksha"
      ]
    },
    {
      "cells": [
        "rick@test.com",
        "tester"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on DemoWebShop HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTest.user_is_on_DemoWebShop_HomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"pratiksha@test.com\" and \"pratiksha\" on login page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTest.user_enter_and_on_login_page(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.user_should_be_logged_in_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on DemoWebShop HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTest.user_is_on_DemoWebShop_HomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"rick@test.com\" and \"tester\" on login page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTest.user_enter_and_on_login_page(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.user_should_be_logged_in_successfully()"
});
formatter.result({
  "status": "passed"
});
});