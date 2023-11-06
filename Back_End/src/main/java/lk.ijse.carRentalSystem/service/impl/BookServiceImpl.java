package lk.ijse.carRentalSystem.service.impl;

import lk.ijse.carRentalSystem.dto.BookDTO;

import lk.ijse.carRentalSystem.dto.CarDTO;
import lk.ijse.carRentalSystem.dto.RegisterDTO;
import lk.ijse.carRentalSystem.entity.Book;
import lk.ijse.carRentalSystem.entity.Car;
import lk.ijse.carRentalSystem.entity.CarCustomerPK;
import lk.ijse.carRentalSystem.entity.Payment;
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
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Service
@Transactional
public class BookServiceImpl implements BookService {

    @Autowired
    BookRepo bookRepo;

    @Autowired
    ModelMapper mapper;

    @Autowired
    CarRepo carRepo;

    @Autowired
    CustomerRepo customerRepo;

    @Autowired
    PaymentRepo paymentRepo;

    @Autowired
    DriverRepo driverRepo;



    @Override
    public void addBook(BookDTO dto) {
        for(BookDTO dtob :dto.getBookDetails()) {
        if (bookRepo.existsById(dtob.getBookId())) {
             throw new RuntimeException(dtob.getBookId() + " is already available, please check again Book_Id");
        }
            Book book = new Book(dtob.getBookId(),new CarCustomerPK(dtob.getRegistration_No(), dtob.getNic_No_Cus()),LocalDate.now(),LocalTime.now(),dtob.getStart_Date(),dtob.getEnd_Date(),dtob.getStartVenue(),dtob.getEndVenue(),dtob.getTotal_KM(),dtob.getMaintain_Status(),driverRepo.getReferenceById(dtob.getNic_No_Driver()),carRepo.getReferenceById(dtob.getRegistration_No()),customerRepo.getReferenceById(dtob.getNic_No_Cus()));
            bookRepo.save(book);
            paymentRepo.save(new Payment(dtob.getPay_Id(), dtob.getLoss_Damage_Waiver(), dtob.getRental_Fee(),book));

        }
    }

    @Override
    public void deleteBook(String bookId) {
        if (!bookRepo.existsById(bookId)) {
            throw new RuntimeException(bookId+ " Book is not available, please check the Book_Id before delete.!");
        }
        bookRepo.deleteById(bookId);
    }

    @Override
    public List<BookDTO> getAllBook() {
        List<Book> all = bookRepo.findAll();
        return mapper.map(all, new TypeToken<List<BookDTO>>() {
        }.getType());
    }

    @Override
    public BookDTO findBook(String bookId) {
            if (!bookRepo.existsById(bookId)) {
                throw new RuntimeException(bookId+ " Book is not available, please check the book_Id.!");
            }
            Book book = bookRepo.findById(bookId).get();
            return mapper.map(book,BookDTO.class);
    }

    @Override
    public void updateBook(BookDTO b) {
            if (!bookRepo.existsById(b.getBookId())) {
                throw new RuntimeException(b.getBookId()+ " Book is not available, please check the book_Id before update.!");
            }
            Book book = mapper.map(b, Book.class);
            bookRepo.save(book);
    }

    @Override
    public BigDecimal findTotalKm(String registrationNo) {
        return bookRepo.findTotalKm(registrationNo);
    }
}
