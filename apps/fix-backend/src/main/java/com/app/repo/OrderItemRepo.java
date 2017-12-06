package com.app.repo;

import com.app.model.order.OrderItem;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface OrderItemRepo extends JpaRepository<OrderItem, Long> {
    public List<OrderItem> findAll();
    public Page<OrderItem> findAll(Pageable p);
}

