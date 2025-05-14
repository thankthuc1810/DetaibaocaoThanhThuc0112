package com.nguyenthanhthuc.backend.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.nguyenthanhthuc.backend.entity.User;
import com.nguyenthanhthuc.backend.service.UserService;
import java.util.List;
import org.springframework.http.HttpHeaders;
@RestController
@AllArgsConstructor
@RequestMapping("api/users")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"},exposedHeaders = "Content-Range")

public class UserController {
     private UserService userService;
    //Create User REST API
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user){
        User saveUser = userService.createUser(user);
        return new ResponseEntity<>(saveUser,HttpStatus.CREATED);
    }

    //Get User by id REST API
    // http://localhost:8000/api/Users/1
    @GetMapping("{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") Long userId){
        User User=userService.getUserById(userId);
        return new ResponseEntity<>(User,HttpStatus.OK);
    }
    //Get User REST API
    // http://localhost:8000/api/Users
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers(){
        List<User> Users = userService.getAllUsers();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range","item 0-" + Users.size() + "/" + Users.size());
        return  ResponseEntity.ok().headers(headers).body(Users);
    }
    //Update User REST API
    @PutMapping("{id}")
    //http://localhost:8000/api/Users/1
    public ResponseEntity<User> updateUser(@PathVariable("id") Long userId,
    @RequestBody User User){
        User.setId(userId);
        User updateUser = userService.updateUser(User);
        return new ResponseEntity<>(updateUser,HttpStatus.OK);
    }
    //Delete User REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") Long userId){
        userService.deleteUser(userId);
        return new ResponseEntity<>("User successfully deleted!", HttpStatus.OK);
    }
}
