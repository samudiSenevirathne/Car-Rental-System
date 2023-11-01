package lk.ijse.carRentalSystem.controller;

import lk.ijse.carRentalSystem.dto.DriverDTO;
import lk.ijse.carRentalSystem.service.DriverService;
import lk.ijse.carRentalSystem.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/driver")
@CrossOrigin
public class DriverController {

    @Autowired
    DriverService service;

    @PostMapping
    public ResponseUtil addDriver(@RequestBody DriverDTO d){
        service.addDriver(d);
        return new ResponseUtil("Ok","Successfully Added",d);
    }

    @GetMapping
    public ResponseUtil getAllDriver(){
        return new ResponseUtil("Ok","Successfully Loaded",service.getAllDriver());
    }

    @GetMapping(params = {"nic"})
    public ResponseUtil findDriver(String nic){
        return new ResponseUtil("Ok","Successful", service.findDriver(nic));
    }

    @PutMapping
    public ResponseUtil updateDriver(@RequestBody DriverDTO d){
        service.updateDriver(d);
        return new ResponseUtil("Ok","Successfully Updated",d);
    }

}
