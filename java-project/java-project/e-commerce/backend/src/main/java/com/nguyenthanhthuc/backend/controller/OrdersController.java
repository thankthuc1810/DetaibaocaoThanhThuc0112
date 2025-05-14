package com.nguyenthanhthuc.backend.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.nguyenthanhthuc.backend.entity.Orders;
import com.nguyenthanhthuc.backend.service.OrdersService;
import java.util.List;
import org.springframework.http.HttpHeaders;
@RestController
@AllArgsConstructor
@RequestMapping("api/orders")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"},exposedHeaders = "Content-Range")

public class OrdersController {
     private OrdersService ordersService;
    //Create Orders REST API
    @PostMapping
    public ResponseEntity<Orders> createOrders(@RequestBody Orders orders){
        Orders saveOrders = ordersService.createOrders(orders);
        return new ResponseEntity<>(saveOrders,HttpStatus.CREATED);
    }

    //Get Orders by id REST API
    // http://localhost:8000/api/Orders/1
    @GetMapping("{id}")
    public ResponseEntity<Orders> getOrdersById(@PathVariable("id") Long ordersId){
        Orders Orders=ordersService.getOrdersById(ordersId);
        return new ResponseEntity<>(Orders,HttpStatus.OK);
    }
    //Get Orders REST API
    // http://localhost:8000/api/Orders
    @GetMapping
    public ResponseEntity<List<Orders>> getAllOrderss(){
        List<Orders> Orders = ordersService.getAllOrders();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range","item 0-" + Orders.size() + "/" + Orders.size());
        return  ResponseEntity.ok().headers(headers).body(Orders);
    }
    //Update Orders REST API
    @PutMapping("{id}")
    //http://localhost:8000/api/Orders/1
    public ResponseEntity<Orders> updateOrders(@PathVariable("id") Long ordersId,
    @RequestBody Orders Orders){
        Orders.setId(ordersId);
        Orders updateOrders = ordersService.updateOrders(Orders);
        return new ResponseEntity<>(updateOrders,HttpStatus.OK);
    }
    //Delete Orders REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteOrders(@PathVariable("id") Long ordersId){
        ordersService.deleteOrders(ordersId);
        return new ResponseEntity<>("Orders successfully deleted!", HttpStatus.OK);
    }
}
