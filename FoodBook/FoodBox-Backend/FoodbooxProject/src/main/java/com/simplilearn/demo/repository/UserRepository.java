package com.simplilearn.demo.repository;


import java.util.Optional;

import org.springframework.data.domain.Page;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import com.simplilearn.demo.model.User;

@CrossOrigin(origins="http://localhost:4200")
public interface UserRepository extends JpaRepository<User, Long> {

	Page<User> findByUsername(@RequestParam("username") String username, Pageable pageable);
	

}
