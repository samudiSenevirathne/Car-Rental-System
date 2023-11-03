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
    public ResponseUtil addCar(@RequestBody CarDTO dto) {
        service.addCar(dto);
        return new ResponseUtil("Ok", "Successfully Added", dto);
    }

    @DeleteMapping(params = {"registration_Number"})
    public ResponseUtil deleteCar(String registration_Number) {
        service.deleteCar(registration_Number);
        return new ResponseUtil("Ok", "Successfully Deleted", registration_Number);
    }

    @GetMapping
    public ResponseUtil getAllCar() {
        return new ResponseUtil("Ok", "Successfully Loaded", service.getAllCar());
    }

    @GetMapping(params = {"registration_Number"})
    public ResponseUtil findCar(String registration_Number) {
        return new ResponseUtil("Ok", "Successful found Car", service.findCar(registration_Number));
    }

    @PutMapping
    public ResponseUtil updateCar(@RequestBody CarDTO c) {
        service.updateCar(c);
        return new ResponseUtil("Ok", "Successfully Updated", c);
    }

    @GetMapping(params = {"type"})
    public ResponseUtil findType(String type) {
        return new ResponseUtil("Ok", "Successful found Type Details", service.findType(type));
    }

    @GetMapping(params = {"brand"})
    public ResponseUtil findBrand(String brand) {
        return new ResponseUtil("Ok", "Successful found Brand Details", service.findBrand(brand));
    }
}