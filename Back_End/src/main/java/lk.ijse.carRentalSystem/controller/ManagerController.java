package lk.ijse.carRentalSystem.controller;

import lk.ijse.carRentalSystem.dto.ManagerDTO;
import lk.ijse.carRentalSystem.service.ManagerService;
import lk.ijse.carRentalSystem.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/manager")
@CrossOrigin
public class ManagerController {

    @Autowired
    ManagerService service;

    @PostMapping
    public ResponseUtil addManager(@RequestBody ManagerDTO m){
        service.addManager(m);
        return new ResponseUtil("Ok","Successfully Added",m);
    }

    @PutMapping
    public ResponseUtil updateManager(@RequestBody ManagerDTO m){
        service.updateManager(m);
        return new ResponseUtil("Ok","Successfully Updated",m);
    }

}
