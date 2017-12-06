package com.app.repo;

import com.app.model.customer.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CustomerRepo extends JpaRepository<Customer, Integer> {
    public List<Customer> findAll();
    public Page<Customer> findAll(Pageable p);
    Customer save(Customer c);
    void delete(Customer c);
    void delete(Integer id);
    boolean exists( Integer id);


}

