package com.nguyenthanhthuc.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.Date;
import java.util.List;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity

public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fullname;
    private String email;
    private String phone_number;
    private String address;
    private String note;
    private Date order_Date;
    private int status;
    private int total_money;

    @ManyToOne
    private User user;
    
    @OneToMany(mappedBy = "order")
    private List<OrderDetail> orderDetails;
}
