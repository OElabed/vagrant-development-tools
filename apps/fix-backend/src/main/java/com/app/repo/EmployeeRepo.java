package com.app.repo;

import com.app.model.employee.Employee;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface EmployeeRepo extends JpaRepository<Employee, Integer> {
    public List<Employee> findAll();
    public Page<Employee> findAll(Pageable p);
    Employee save(Employee e);
    void delete(Employee e);
    void delete(Integer id);
    boolean exists( Integer id);
}

