package com.simplilearn.demo.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.web.bind.annotation.CrossOrigin;

import com.simplilearn.demo.model.Cuisine;

@CrossOrigin("http://localhost:4200")
//@CrossOrigin(origins = "http://localhost:63450")
public interface CuisineRepository extends JpaRepository<Cuisine, Long> {

}
