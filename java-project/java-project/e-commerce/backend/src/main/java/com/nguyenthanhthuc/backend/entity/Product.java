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

public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String price;
    private String discount;
    private String  thumbnail;
    private String description;
    private Date created_at;
    private Date updated_at;
    private int deleted;

    @ManyToOne
    private Category category;

    @OneToMany(mappedBy = "product")
    private List<Gallery> galleries;

    @OneToMany(mappedBy = "product")
    private List<OrderDetail> orderDetails;
}
