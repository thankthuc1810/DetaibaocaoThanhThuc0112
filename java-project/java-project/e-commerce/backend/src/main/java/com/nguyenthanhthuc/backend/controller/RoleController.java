package com.nguyenthanhthuc.backend.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.nguyenthanhthuc.backend.entity.Role;
import com.nguyenthanhthuc.backend.service.RoleService;
import java.util.List;
import org.springframework.http.HttpHeaders;
@RestController
@AllArgsConstructor
@RequestMapping("api/roles")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"},exposedHeaders = "Content-Range")

public class RoleController {
     private RoleService roleService;
    //Create Role REST API
    @PostMapping
    public ResponseEntity<Role> createRole(@RequestBody Role role){
        Role saveRole = roleService.createRole(role);
        return new ResponseEntity<>(saveRole,HttpStatus.CREATED);
    }

    //Get Role by id REST API
    // http://localhost:8000/api/Roles/1
    @GetMapping("{id}")
    public ResponseEntity<Role> getRoleById(@PathVariable("id") Long roleId){
        Role Role=roleService.getRoleById(roleId);
        return new ResponseEntity<>(Role,HttpStatus.OK);
    }
    //Get Role REST API
    // http://localhost:8000/api/Roles
    @GetMapping
    public ResponseEntity<List<Role>> getAllRoles(){
        List<Role> Roles = roleService.getAllRoles();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range","item 0-" + Roles.size() + "/" + Roles.size());
        return  ResponseEntity.ok().headers(headers).body(Roles);
    }
    //Update Role REST API
    @PutMapping("{id}")
    //http://localhost:8000/api/Roles/1
    public ResponseEntity<Role> updateRole(@PathVariable("id") Long roleId,
    @RequestBody Role Role){
        Role.setId(roleId);
        Role updateRole = roleService.updateRole(Role);
        return new ResponseEntity<>(updateRole,HttpStatus.OK);
    }
    //Delete Role REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteRole(@PathVariable("id") Long roleId){
        roleService.deleteRole(roleId);
        return new ResponseEntity<>("Role successfully deleted!", HttpStatus.OK);
    }
}
