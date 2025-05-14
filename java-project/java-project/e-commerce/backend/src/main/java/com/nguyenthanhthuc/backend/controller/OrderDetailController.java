package com.nguyenthanhthuc.backend.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.nguyenthanhthuc.backend.entity.OrderDetail;
import com.nguyenthanhthuc.backend.service.OrderDetailService;
import java.util.List;
import org.springframework.http.HttpHeaders;
@RestController
@AllArgsConstructor
@RequestMapping("api/orderDetails")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"},exposedHeaders = "Content-Range")

public class OrderDetailController {
     private OrderDetailService orderDetailService;
    //Create OrderDetail REST API
    @PostMapping
    public ResponseEntity<OrderDetail> createOrderDetail(@RequestBody OrderDetail orderDetail){
        OrderDetail saveOrderDetail = orderDetailService.createOrderDetail(orderDetail);
        return new ResponseEntity<>(saveOrderDetail,HttpStatus.CREATED);
    }

    //Get OrderDetail by id REST API
    // http://localhost:8000/api/OrderDetails/1
    @GetMapping("{id}")
    public ResponseEntity<OrderDetail> getOrderDetailById(@PathVariable("id") Long orderDetailId){
        OrderDetail OrderDetail=orderDetailService.getOrderDetailById(orderDetailId);
        return new ResponseEntity<>(OrderDetail,HttpStatus.OK);
    }
    //Get OrderDetail REST API
    // http://localhost:8000/api/OrderDetails
    @GetMapping
    public ResponseEntity<List<OrderDetail>> getAllOrderDetails(){
        List<OrderDetail> OrderDetails = orderDetailService.getAllOrderDetails();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range","item 0-" + OrderDetails.size() + "/" + OrderDetails.size());
        return  ResponseEntity.ok().headers(headers).body(OrderDetails);
    }
    //Update OrderDetail REST API
    @PutMapping("{id}")
    //http://localhost:8000/api/OrderDetails/1
    public ResponseEntity<OrderDetail> updateOrderDetail(@PathVariable("id") Long orderDetailId,
    @RequestBody OrderDetail OrderDetail){
        OrderDetail.setId(orderDetailId);
        OrderDetail updateOrderDetail = orderDetailService.updateOrderDetail(OrderDetail);
        return new ResponseEntity<>(updateOrderDetail,HttpStatus.OK);
    }
    //Delete OrderDetail REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteOrderDetail(@PathVariable("id") Long orderDetailId){
        orderDetailService.deleteOrderDetail(orderDetailId);
        return new ResponseEntity<>("OrderDetail successfully deleted!", HttpStatus.OK);
    }
}
