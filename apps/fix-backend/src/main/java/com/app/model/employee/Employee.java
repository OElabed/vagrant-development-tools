package com.app.model.employee;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "employees")
public class Employee  {

    @Id
    //@GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String  lastName;
    private String  firstName;
    private String  email;
    private String  avatar;
    private String  jobTitle;
    private String  department;
    private Integer managerId;
    private String  phone;
    private String  address1;
    private String  address2;
    private String  city;
    private String  state;
    private String  postalCode;
    private String  country;
}
