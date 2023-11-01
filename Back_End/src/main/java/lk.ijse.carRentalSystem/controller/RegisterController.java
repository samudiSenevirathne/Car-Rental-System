package lk.ijse.carRentalSystem.controller;

import lk.ijse.carRentalSystem.service.RegisterService;
import lk.ijse.carRentalSystem.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/register")
@CrossOrigin
public class RegisterController {

    @Autowired
    RegisterService service;

    @GetMapping
    public ResponseUtil getAllRegisterDetail(){
        return new ResponseUtil("Ok","Successfully Loaded",service.getAllRegister());
    }
}
