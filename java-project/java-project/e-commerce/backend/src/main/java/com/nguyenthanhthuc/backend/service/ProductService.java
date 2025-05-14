package com.nguyenthanhthuc.backend.service;

import com.nguyenthanhthuc.backend.entity.Product;
import java.util.List;


public interface ProductService {
    public Product createProduct(Product Product);
    public Product getProductById(Long ProductId);
    public List<Product> getAllProducts();
    public Product updateProduct(Product Product);
    public void deleteProduct(Long ProductId);
}
