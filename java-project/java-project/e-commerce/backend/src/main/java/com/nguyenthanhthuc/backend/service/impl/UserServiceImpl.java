package com.nguyenthanhthuc.backend.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.nguyenthanhthuc.backend.entity.User;
import com.nguyenthanhthuc.backend.service.UserService;
import com.nguyenthanhthuc.backend.repository.UserRepository;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Override
    public User createUser(User user) {
       return userRepository.save(user);
    }

    @Override
    public User getUserById(Long userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        return optionalUser.get();
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User updateUser(User user) {
        User existingUser = userRepository.findById(user.getId()).get();
        existingUser.setFullname(user.getFullname());
        existingUser.setEmail(user.getEmail());
        existingUser.setPhone_number(user.getPhone_number());
        existingUser.setAddress(user.getAddress());
         existingUser.setPassword(user.getPassword());
         existingUser.setCreated_at(user.getCreated_at());
          existingUser.setUpdated_at(user.getUpdated_at());
           existingUser.setDeleted(user.getDeleted());
            existingUser.setRole(user.getRole());
             existingUser.setTokens(user.getTokens());
        User updateUser = userRepository.save(existingUser);
        return updateUser;
    }

    @Override
    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }
    
}
