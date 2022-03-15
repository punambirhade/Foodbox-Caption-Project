package test;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;

public class demo {
	

	public static void main(String[] args) throws InterruptedException {
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\lenovo\\Desktop\\selenium jar\\chromedriver.exe");
		ChromeDriver driver=new ChromeDriver();
		
		driver.manage().window().maximize();
		driver.get("http://localhost:4200/products");
		
		driver.findElement(By.xpath("/html/body/app-root/app-header/header/div/button[2]")).click();
		Thread.sleep(1000);
		
		driver.findElement(By.name("username")).sendKeys("admin");
		driver.findElement(By.name("password")).sendKeys("admin@123");
		//driver.findElement(By.name("button")).click();
		driver.findElement(By.xpath("/html/body/app-root/app-adminlogin/div/form/div/div[3]/button")).click();
		
		 Alert al = driver.switchTo().alert();
	      // click on OK to accept with accept()
	      al.accept();
	      
	      driver.findElement(By.xpath("/html/body/app-root/app-header/header/div/button[1]")).click();
			Thread.sleep(1000);
		
			driver.findElement(By.name("firstName")).sendKeys("idli");
			driver.findElement(By.name("lastName")).sendKeys("very testy food");
			driver.findElement(By.name("price")).sendKeys("100");
			driver.findElement(By.name("imageUrl")).sendKeys("https://media.gettyimages.com/photos/sambar-idli-picture-id174233986");
			driver.findElement(By.name("cuisine")).sendKeys("Indian");
			 driver.findElement(By.xpath("/html/body/app-root/app-add-product/div/form/button")).click();
			Thread.sleep(1000);
			 driver.findElement(By.xpath("/html/body/app-root/app-header/header/div/button[3]")).click();
				Thread.sleep(1000);
	}
}
