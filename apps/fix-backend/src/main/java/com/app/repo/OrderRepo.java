package com.app.repo;

import com.app.model.order.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface OrderRepo extends JpaRepository<Order, Integer> {
    public List<Order> findAll();
    public Page<Order> findAll(Pageable p);

}

