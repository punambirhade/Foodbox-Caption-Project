package test;

import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;

public class SearchDemo {
	public static void main(String[] args) throws InterruptedException {
		//System.setProperty("webdriver.chrome.driver","C:\\\\Users\\\\lenovo\\\\Desktop\\\\selenium jar\\\\chromedriver.exe");
	System.setProperty("webdriver.chrome.driver", "C:\\Users\\lenovo\\Desktop\\selenium jar\\chromedriver.exe");
	ChromeDriver driver=new ChromeDriver();
	
	driver.manage().window().maximize();
	driver.get("http://localhost:4200/products");
	
	//driver.findElement(By.xpath("/html/body/app-root/app-header/header/div/div/div")).sendKeys("Chicken");
	   Thread.sleep(1000);
	
	   driver.findElement(By.xpath("/html/body/app-root/app-header/header/div/div/div/input")).click(); // click on the Search textbox to highlight it
	    driver.findElement(By.xpath("/html/body/app-root/app-header/header/div/div/div/input")).sendKeys("Chicken");//Send the text "ABC" to the Search textbox
	
	
}

}
