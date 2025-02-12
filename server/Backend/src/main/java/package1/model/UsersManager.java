package package1.model;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import package1.repository.UserRepository;

@Service
public class UsersManager {
	@Autowired
   UserRepository UR;
	public String addUser(Users U) {    
	    if(UR.validateEmail(U.getEmail()) > 0)
	      return "Email already exist";    
	    UR.save(U);
	    return "User Registered Successfully";
   
}
}