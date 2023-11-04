package lk.ijse.carRentalSystem.repo;

import lk.ijse.carRentalSystem.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface BookRepo extends JpaRepository<Book,String> {

    boolean existsByBookId(String bookId);

    void deleteByBookId(String bookId);

    Book findByBookId(String bookId);

    @Query(value = "SELECT * FROM book WHERE registrationNo=?1 ORDER BY bookId DESC LIMIT 1",nativeQuery = true)
    List<Book>findTotalKm(String registrationNo);


}
