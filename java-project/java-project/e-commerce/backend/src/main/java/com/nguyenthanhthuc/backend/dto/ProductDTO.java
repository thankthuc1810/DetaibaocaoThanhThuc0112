package com.nguyenthanhthuc.backend.dto;

import lombok.Data;
import java.util.Date;

@Data
public class ProductDTO {
    private Long id;
    private String title;
    private String price;
    private String discount;
    private String thumbnail;
    private String description;
    private Date created_at;
    private Date updated_at;
    private int deleted;

    private Long categoryId; // 💥 Quan trọng để liên kết với danh mục
}
