package com.nguyenthanhthuc.backend.service;

import com.nguyenthanhthuc.backend.entity.Category;
import java.util.List;


public interface CategoryService {
    public Category createCategory(Category category);
    public Category getCategoryById(Long categoryId);
    public List<Category> getAllCategories();
    public Category updateCategory(Category category);
    public void deleteCategory(Long categoryId);
}
