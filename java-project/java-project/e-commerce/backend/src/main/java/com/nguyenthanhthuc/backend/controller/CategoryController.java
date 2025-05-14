package com.nguyenthanhthuc.backend.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.nguyenthanhthuc.backend.entity.Category;
import com.nguyenthanhthuc.backend.service.CategoryService;
import java.util.List;
import org.springframework.http.HttpHeaders;
@RestController
@AllArgsConstructor
@RequestMapping("api/categories")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"},exposedHeaders = "Content-Range")

public class CategoryController {
    private CategoryService categoryService;
    //Create Category REST API
    @PostMapping
    public ResponseEntity<Category> createCategory(@RequestBody Category category){
        Category saveCategory = categoryService.createCategory(category);
        return new ResponseEntity<>(saveCategory,HttpStatus.CREATED);
    }

    //Get Category by id REST API
    // http://localhost:8000/api/Categories/1
    @GetMapping("{id}")
    public ResponseEntity<Category> getCategoryById(@PathVariable("id") Long categoryId){
        Category Category=categoryService.getCategoryById(categoryId);
        return new ResponseEntity<>(Category,HttpStatus.OK);
    }
    //Get Category REST API
    // http://localhost:8000/api/Categories
    @GetMapping
    public ResponseEntity<List<Category>> getAllCategorys(){
        List<Category> Categories = categoryService.getAllCategories();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range","item 0-" + Categories.size() + "/" + Categories.size());
        return ResponseEntity.ok().headers(headers).body(Categories);
    }
    //Update Category REST API
    @PutMapping("{id}")
    //http://localhost:8000/api/Categories/1
    public ResponseEntity<Category> updateCategory(@PathVariable("id") Long categoryId,
    @RequestBody Category Category){
        Category.setId(categoryId);
        Category updateCategory = categoryService.updateCategory(Category);
        return new ResponseEntity<>(updateCategory,HttpStatus.OK);
    }
    //Delete Category REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable("id") Long categoryId){
        categoryService.deleteCategory(categoryId);
        return new ResponseEntity<>("Category successfully deleted!", HttpStatus.OK);
    }
}
