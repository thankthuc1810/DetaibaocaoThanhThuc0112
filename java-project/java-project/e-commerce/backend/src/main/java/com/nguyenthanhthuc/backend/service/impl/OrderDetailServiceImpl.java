package com.nguyenthanhthuc.backend.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.nguyenthanhthuc.backend.entity.OrderDetail;
import com.nguyenthanhthuc.backend.service.OrderDetailService;
import com.nguyenthanhthuc.backend.repository.OrderDetailRepository;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class OrderDetailServiceImpl implements OrderDetailService {

    private OrderDetailRepository orderDetailRepository;

    @Override
    public OrderDetail createOrderDetail(OrderDetail orderDetail) {
       return orderDetailRepository.save(orderDetail);
    }

    @Override
    public OrderDetail getOrderDetailById(Long orderDetailId) {
        Optional<OrderDetail> optionalOrderDetail = orderDetailRepository.findById(orderDetailId);
        return optionalOrderDetail.get();
    }

    @Override
    public List<OrderDetail> getAllOrderDetails() {
        return orderDetailRepository.findAll();
    }

    @Override
    public OrderDetail updateOrderDetail(OrderDetail orderDetail) {
        OrderDetail existingOrderDetail = orderDetailRepository.findById(orderDetail.getId()).get();
        existingOrderDetail.setPrice(orderDetail.getPrice());
        existingOrderDetail.setNum(orderDetail.getNum());
        existingOrderDetail.setTotal_money(orderDetail.getTotal_money());
        existingOrderDetail.setProduct(orderDetail.getProduct());
         existingOrderDetail.setOrder(orderDetail.getOrder());
        OrderDetail updateOrderDetail = orderDetailRepository.save(existingOrderDetail);
        return updateOrderDetail;
    }

    @Override
    public void deleteOrderDetail(Long orderDetailId) {
        orderDetailRepository.deleteById(orderDetailId);
    }
    
}
