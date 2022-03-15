package com.simplilearn.demo.model;

import javax.persistence.*;

import org.springframework.web.bind.annotation.CrossOrigin;

@Entity
@Table(name="address")
//@CrossOrigin(origins = "http://localhost:63450")
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;


}
