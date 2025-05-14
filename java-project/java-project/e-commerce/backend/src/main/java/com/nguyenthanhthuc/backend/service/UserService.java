package com.nguyenthanhthuc.backend.service;

import com.nguyenthanhthuc.backend.entity.User;
import java.util.List;


public interface UserService {
    public User createUser(User user);
    public User getUserById(Long userId);
    public List<User> getAllUsers();
    public User updateUser(User user);
    public void deleteUser(Long userId);
}
