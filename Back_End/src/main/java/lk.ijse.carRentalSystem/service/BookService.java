package lk.ijse.carRentalSystem.service;

import lk.ijse.carRentalSystem.dto.BookDTO;

import java.util.List;

public interface BookService {
    void addBook(BookDTO dto);

    void deleteBook(String bookId);

    List<BookDTO> getAllBook();

    BookDTO findBook(String bookId);

    void updateBook(BookDTO b);

    List<BookDTO>findTotalKm(String registrationNo);
}
