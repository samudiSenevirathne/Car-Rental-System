package lk.ijse.carRentalSystem.controller;

import lk.ijse.carRentalSystem.dto.CustomerDTO;
import lk.ijse.carRentalSystem.service.CustomerService;
import lk.ijse.carRentalSystem.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/customer")
@CrossOrigin
public class CustomerController {

    @Autowired
    CustomerService service;

    @PostMapping
    public ResponseUtil addCustomer(@RequestBody CustomerDTO c){
        service.addCustomer(c);
        return new ResponseUtil("Ok","Successfully Added",c);
    }

    @GetMapping
    public ResponseUtil getAllCustomer(){
        return new ResponseUtil("Ok","Successfully Loaded",service.getAllCustomer());
    }

    @GetMapping(params = {"nic"})
    public ResponseUtil findCustomer(String nic){
        return new ResponseUtil("Ok","Successfull", service.findCustomer(nic));
    }

    @PutMapping
    public ResponseUtil updateCustomer(@RequestBody CustomerDTO c){
        service.updateCustomer(c);
        return new ResponseUtil("Ok","Successfully Updated",c);
    }

}