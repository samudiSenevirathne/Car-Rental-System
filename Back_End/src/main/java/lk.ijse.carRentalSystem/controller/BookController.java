package lk.ijse.carRentalSystem.controller;

import lk.ijse.carRentalSystem.dto.BookDTO;
import lk.ijse.carRentalSystem.service.BookService;
import lk.ijse.carRentalSystem.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/book")
@CrossOrigin
public class BookController {

    @Autowired
    BookService service;

    @PostMapping
    public ResponseUtil addBook(@RequestBody BookDTO dto) {
        service.addBook(dto);
        return new ResponseUtil("Ok", "Successfully Added", dto);
    }

    @DeleteMapping(params = {"bookId"})
    public ResponseUtil deleteBook(String bookId) {
        service.deleteBook(bookId);
        return new ResponseUtil("Ok", "Successfully Deleted", bookId);
    }

    @GetMapping
    public ResponseUtil getAllBook() {
        return new ResponseUtil("Ok", "Successfully Loaded", service.getAllBook());
    }

    @GetMapping(params = {"bookId"})
    public ResponseUtil findBook(String bookId) {
        return new ResponseUtil("Ok", "Successful found Book", service.findBook(bookId));
    }

    @PutMapping
    public ResponseUtil updateBook(@RequestBody BookDTO b) {
        service.updateBook(b);
        return new ResponseUtil("Ok", "Successfully Updated", b);
    }

    @GetMapping(params = {"registrationNo"})
    public ResponseUtil findTotalKm(String registrationNo) {
        return new ResponseUtil("Ok", "Successful TotalKm", service.findTotalKm(registrationNo));
    }
}
