package com.nguyenthanhthuc.backend.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.nguyenthanhthuc.backend.entity.Orders;
import com.nguyenthanhthuc.backend.service.OrdersService;
import com.nguyenthanhthuc.backend.repository.OrdersRepository;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class OrdersServiceImpl implements OrdersService {

    private OrdersRepository ordersRepository;

    @Override
    public Orders createOrders(Orders orders) {
       return ordersRepository.save(orders);
    }

    @Override
    public Orders getOrdersById(Long ordersId) {
        Optional<Orders> optionalOrders = ordersRepository.findById(ordersId);
        return optionalOrders.get();
    }

    @Override
    public List<Orders> getAllOrders() {
        return ordersRepository.findAll();
    }

    @Override
    public Orders updateOrders(Orders orders) {
        Orders existingOrders = ordersRepository.findById(orders.getId()).get();
        existingOrders.setFullname(orders.getFullname());
        existingOrders.setEmail(orders.getEmail());
        existingOrders.setPhone_number(orders.getPhone_number());
        existingOrders.setAddress(orders.getAddress());
         existingOrders.setNote(orders.getNote());
          existingOrders.setOrder_Date(orders.getOrder_Date());
           existingOrders.setStatus(orders.getStatus());
            existingOrders.setTotal_money(orders.getTotal_money());
             existingOrders.setUser(orders.getUser());
               existingOrders.setOrderDetails(orders.getOrderDetails());
        Orders updateOrders = ordersRepository.save(existingOrders);
        return updateOrders;
    }

    @Override
    public void deleteOrders(Long ordersId) {
        ordersRepository.deleteById(ordersId);
    }
    
}
