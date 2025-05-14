package com.nguyenthanhthuc.backend.controller;

import com.nguyenthanhthuc.backend.dto.ProductDTO;
import com.nguyenthanhthuc.backend.entity.Category;
import com.nguyenthanhthuc.backend.entity.Product;
import com.nguyenthanhthuc.backend.repository.CategoryRepository;
import com.nguyenthanhthuc.backend.service.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@AllArgsConstructor
@RequestMapping("api/products")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" }, exposedHeaders = "Content-Range")
public class ProductController {

    private final ProductService productService;
    private final CategoryRepository categoryRepository;

    // ✅ Create Product (POST)
    @PostMapping
    public ResponseEntity<ProductDTO> createProduct(@RequestBody ProductDTO dto) {
        Product product = new Product();
        product.setTitle(dto.getTitle());
        product.setPrice(dto.getPrice());
        product.setDiscount(dto.getDiscount());
        product.setThumbnail(dto.getThumbnail());
        product.setDescription(dto.getDescription());
        product.setCreated_at(dto.getCreated_at());
        product.setUpdated_at(dto.getUpdated_at());
        product.setDeleted(dto.getDeleted());

        // Gán category từ categoryId
        if (dto.getCategoryId() != null) {
            Category category = categoryRepository.findById(dto.getCategoryId()).orElse(null);
            product.setCategory(category);
        }

        Product saved = productService.createProduct(product);

        // Trả về DTO sau khi lưu
        ProductDTO result = convertToDTO(saved);
        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

    // ✅ Get Product by ID (GET)
    @GetMapping("{id}")
    public ResponseEntity<ProductDTO> getProductById(@PathVariable("id") Long productId) {
        Product product = productService.getProductById(productId);
        return new ResponseEntity<>(convertToDTO(product), HttpStatus.OK);
    }

    // ✅ Get All Products (GET)
    @GetMapping
    public ResponseEntity<List<ProductDTO>> getAllProducts() {
        List<Product> products = productService.getAllProducts();
        List<ProductDTO> dtos = products.stream().map(this::convertToDTO).collect(Collectors.toList());

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range", "item 0-" + dtos.size() + "/" + dtos.size());

        return ResponseEntity.ok().headers(headers).body(dtos);
    }

    // ✅ Update Product (PUT)
    @PutMapping("{id}")
    public ResponseEntity<ProductDTO> updateProduct(@PathVariable("id") Long productId,
            @RequestBody ProductDTO dto) {
        Product product = productService.getProductById(productId);

        product.setTitle(dto.getTitle());
        product.setPrice(dto.getPrice());
        product.setDiscount(dto.getDiscount());
        product.setThumbnail(dto.getThumbnail());
        product.setDescription(dto.getDescription());
        product.setCreated_at(dto.getCreated_at());
        product.setUpdated_at(dto.getUpdated_at());
        product.setDeleted(dto.getDeleted());

        if (dto.getCategoryId() != null) {
            Category category = categoryRepository.findById(dto.getCategoryId()).orElse(null);
            product.setCategory(category);
        }

        Product updated = productService.updateProduct(product);
        return new ResponseEntity<>(convertToDTO(updated), HttpStatus.OK);
    }

    // ✅ Delete Product
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable("id") Long productId) {
        productService.deleteProduct(productId);
        return new ResponseEntity<>("Product successfully deleted!", HttpStatus.OK);
    }

    // 🔧 Hàm convert từ Entity sang DTO
    private ProductDTO convertToDTO(Product product) {
        ProductDTO dto = new ProductDTO();
        dto.setId(product.getId());
        dto.setTitle(product.getTitle());
        dto.setPrice(product.getPrice());
        dto.setDiscount(product.getDiscount());
        dto.setThumbnail(product.getThumbnail());
        dto.setDescription(product.getDescription());
        dto.setCreated_at(product.getCreated_at());
        dto.setUpdated_at(product.getUpdated_at());
        dto.setDeleted(product.getDeleted());

        if (product.getCategory() != null) {
            dto.setCategoryId(product.getCategory().getId());
        }

        return dto;
    }
}
