package test;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;

public class loginDemo {
	

	public static void main(String[] args) throws InterruptedException {
		//System.setProperty("webdriver.chrome.driver","C:\\\\Users\\\\lenovo\\\\Desktop\\\\selenium jar\\\\chromedriver.exe");
	System.setProperty("webdriver.chrome.driver", "C:\\Users\\lenovo\\Desktop\\selenium jar\\chromedriver.exe");
	ChromeDriver driver=new ChromeDriver();
	
	driver.manage().window().maximize();
	driver.get("http://localhost:4200/products");
	
	driver.findElement(By.xpath("/html/body/app-root/app-header/header/div/button[1]")).click();
	Thread.sleep(1000);
	
	driver.findElement(By.name("username")).sendKeys("punam");
	driver.findElement(By.name("password")).sendKeys("punam123");
	//driver.findElement(By.name("button")).click();
	driver.findElement(By.xpath("/html/body/app-root/app-login/div/div/form/div/div[3]/button")).click();
	driver.findElement(By.xpath("/html/body/app-root/app-login/div/div/form/div/div[3]/button")).click();
	
	driver.findElement(By.xpath("/html/body/app-root/app-products/div[2]/div/div[1]/button")).click();
	driver.findElement(By.xpath("/html/body/app-root/app-products/div[2]/div/div[2]/button")).click();
	Thread.sleep(1000);
	
	driver.findElement(By.xpath("/html/body/app-root/app-header/header/div/button[3]")).click();
   Thread.sleep(1000);
	
	driver.findElement(By.xpath("/html/body/app-root/app-cart/div/div/div/table/tbody/tr[3]/td[4]/button")).click();
	
	Thread.sleep(1000);
	
	driver.findElement(By.xpath("/html/body/app-root/app-check-out/div/div/div/a/button")).click();
	
	
}
}


