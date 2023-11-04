package lk.ijse.carRentalSystem.service.impl;

import lk.ijse.carRentalSystem.dto.BookDTO;

import lk.ijse.carRentalSystem.dto.CarDTO;
import lk.ijse.carRentalSystem.entity.Book;
import lk.ijse.carRentalSystem.entity.Car;
import lk.ijse.carRentalSystem.repo.BookRepo;
import lk.ijse.carRentalSystem.repo.CarRepo;
import lk.ijse.carRentalSystem.repo.CustomerRepo;
import lk.ijse.carRentalSystem.repo.PaymentRepo;
import lk.ijse.carRentalSystem.repo.DriverRepo;
import lk.ijse.carRentalSystem.service.BookService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class BookServiceImpl implements BookService {

    @Autowired
    BookRepo bookRepo;

    @Autowired
    ModelMapper mapper;

//    @Autowired
//    CarRepo carRepo;
//
//    @Autowired
//    CustomerRepo customerRepo;
//
//    @Autowired
//    PaymentRepo paymentRepo;
//
//    @Autowired
//    DriverRepo driverRepo;



    @Override
    public void addBook(BookDTO dto) {
        if (bookRepo.existsByBookId(dto.getBookId())) {
            throw new RuntimeException(dto.getBookId()+" is already available, please check again Book_Id");
        }
        Book book = mapper.map(dto, Book.class);
        bookRepo.save(book);
    }

    @Override
    public void deleteBook(String bookId) {
        if (!bookRepo.existsByBookId(bookId)) {
            throw new RuntimeException(bookId+ " Book is not available, please check the Book_Id before delete.!");
        }
        bookRepo.deleteByBookId(bookId);
    }

    @Override
    public List<BookDTO> getAllBook() {
        List<Book> all = bookRepo.findAll();
        return mapper.map(all, new TypeToken<List<BookDTO>>() {
        }.getType());
    }

    @Override
    public BookDTO findBook(String bookId) {
            if (!bookRepo.existsByBookId(bookId)) {
                throw new RuntimeException(bookId+ " Book is not available, please check the book_Id.!");
            }
            Book book = bookRepo.findByBookId(bookId);
            return mapper.map(book,BookDTO.class);
    }

    @Override
    public void updateBook(BookDTO b) {
            if (!bookRepo.existsByBookId(b.getBookId())) {
                throw new RuntimeException(b.getBookId()+ " Book is not available, please check the book_Id before update.!");
            }
            Book book = mapper.map(b, Book.class);
            bookRepo.save(book);
    }

    @Override
    public List<BookDTO> findTotalKm(String registrationNo) {
        List<Book> all = bookRepo.findTotalKm(registrationNo);
        return mapper.map(all, new TypeToken<List<BookDTO>>() {
        }.getType());
    }
}
