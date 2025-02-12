package package1.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import package1.model.Users;
import package1.model.UsersManager;



@RestController
@RequestMapping("/users")
public class UsersController {

  
  @Autowired
  UsersManager UM;
  
  @PostMapping("/signup")
  public String signUp(@RequestBody Users U) {
    return UM.addUser(U);
  
  }
}