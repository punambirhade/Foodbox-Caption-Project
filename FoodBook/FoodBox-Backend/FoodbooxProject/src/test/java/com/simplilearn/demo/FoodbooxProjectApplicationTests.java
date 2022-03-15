package com.simplilearn.demo;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.simplilearn.demo.model.Product;
import com.simplilearn.demo.model.User;
import com.simplilearn.demo.repository.ProductRepository;
import com.simplilearn.demo.repository.UserRepository;

@SpringBootTest
@TestMethodOrder(OrderAnnotation.class)
class FoodbooxProjectApplicationTests {
	
	@Autowired
	ProductRepository prepo;
	
	@Autowired
	UserRepository urepo;
	
	

	@Test
	void contextLoads() {
		
	}
	
	@Test
	@Order(1)
	public void testCreate () {
		Product p = new Product();
		p.setId(38L);
		p.setName("vada");
		p.setDescription("very testy southindian dish");
		p.setPrice(90);
		p.setCuisine("Indian");
		//p.setDateCreated(2022-03-07T09:15:38.000+00:00);
		p.setImageUrl("https://c.ndtvimg.com/2019-03/g49icpdk_world-idli-day-idli-generic_625x300_29_March_19.jpg");
		prepo.save(p);
		assertNotNull(prepo.findById(38L).get());
	}
	
	@Test
	@Order(2)
	public void testReadAll () {
		List<Product> list = prepo.findAll();
		assertThat(list).size().isGreaterThan(0);
	}

	@Test
	@Order(3)
	public void testRead () {
		Product product = prepo.findById(38L).get();
		assertEquals("vada", product.getName());
	}
	
	@Test
	@Order(4)
	public void testUpdate () {
		Product p = prepo.findById(38L).get();
		p.setPrice(56);
		prepo.save(p);
		assertNotEquals(45, prepo.findById(38L).get().getPrice());
	}
	
	@Test
	@Order(5)
	public void testDelete () {
		prepo.deleteById(38L);
		assertThat(prepo.existsById(38L)).isFalse();
	}
	
	
	@Test
	@Order(6)
	public void testCreate1 () {
		User u = new User();
		u.setId(4l);
		u.setUsername("sush");
		u.setEmail("sush@gmail.com");
		u.setPassword("sush123");
		u.setCity("kalyan");
		
		u.setStreet("Maharastra");
		u.setZipcode("23456");
		
		urepo.save(u);
		assertNotNull(urepo.findById(4L).get());
	}
	
	@Test
	@Order(7)
	public void testReadAll2 () {
		List<User> list = urepo.findAll();
		assertThat(list).size().isGreaterThan(0);
	}
	
	@Test
	@Order(8)
	public void testRead2 () {
		User user = urepo.findById(4L).get();
		assertEquals("sush", user.getUsername());
	}
	
	@Test
	@Order(9)
	public void testUpdate2 () {
		User p = urepo.findById(4L).get();
		p.setPhone("7709205673");
		urepo.save(p);
		assertNotEquals("457878888", urepo.findById(4L).get().getPhone());
	}
	
	private void assertNotEquals(String string, String phone) {
		// TODO Auto-generated method stub
		
	}

	@Test
	@Order(10)
	public void testDelete2 () {
		urepo.deleteById(4L);
		assertThat(urepo.existsById(4L)).isFalse();
	}
	
	
	
	private void assertNotNull(User user) {
		// TODO Auto-generated method stub
		
	}

	private void assertNotEquals(int i, int price) {
		// TODO Auto-generated method stub
		
	}

	private void assertEquals(String string, String name) {
		// TODO Auto-generated method stub
		
	}

	private void assertNotNull(Product product) {
		// TODO Auto-generated method stub
		
	}
	
	

	
	
	}

