package lk.ijse.carRentalSystem.controller;

import lk.ijse.carRentalSystem.dto.CarDTO;
import lk.ijse.carRentalSystem.service.CarService;
import lk.ijse.carRentalSystem.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/car")
@CrossOrigin
public class CarController {

    @Autowired
    CarService service;

    @PostMapping
    public ResponseUtil addCar(@RequestBody CarDTO dto){
        service.addCar(dto);
        return new ResponseUtil("Ok","Successfully Added",dto);
    }

    @DeleteMapping(params = {"regisNum"})
    public ResponseUtil deleteCar(String regisNum){
        service.deleteCar(regisNum);
        return new ResponseUtil("Ok","Successfully Deleted",regisNum);
    }

    @GetMapping
    public ResponseUtil getAllCar(){
        return new ResponseUtil("Ok","Successfully Loaded",service.getAllCar());
    }

    @GetMapping(params = {"regisNum"})
    public ResponseUtil findCar(String regisNum){
        return new ResponseUtil("Ok","Successfull", service.findCar(regisNum));
    }

    @PutMapping
    public ResponseUtil updateCar(@RequestBody CarDTO c){
        service.updateCar(c);
        return new ResponseUtil("Ok","Successfully Updated",c);
    }
}
