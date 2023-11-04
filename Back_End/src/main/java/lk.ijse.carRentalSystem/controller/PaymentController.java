package lk.ijse.carRentalSystem.controller;

import lk.ijse.carRentalSystem.dto.PaymentDTO;
import lk.ijse.carRentalSystem.service.PaymentService;
import lk.ijse.carRentalSystem.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/payment")
@CrossOrigin
public class PaymentController {

    @Autowired
    PaymentService service;

    @PostMapping
    public ResponseUtil addPayment(@RequestBody PaymentDTO dto) {
        service.addPayment(dto);
        return new ResponseUtil("Ok", "Successfully Added", dto);
    }

    @DeleteMapping(params = {"pay_Id"})
    public ResponseUtil deletePayment(String pay_Id) {
        service.deletePayment(pay_Id);
        return new ResponseUtil("Ok", "Successfully Deleted", pay_Id);
    }

    @GetMapping
    public ResponseUtil getAllPayment() {
        return new ResponseUtil("Ok", "Successfully Loaded", service.getAllPayment());
    }

    @GetMapping(params = {"pay_Id"})
    public ResponseUtil findPayment(String pay_Id) {
        return new ResponseUtil("Ok", "Successful found Payment", service.findPayment(pay_Id));
    }

    @PutMapping
    public ResponseUtil updateCar(@RequestBody PaymentDTO p) {
        service.updatePayment(p);
        return new ResponseUtil("Ok", "Successfully Updated", p);
    }

}
