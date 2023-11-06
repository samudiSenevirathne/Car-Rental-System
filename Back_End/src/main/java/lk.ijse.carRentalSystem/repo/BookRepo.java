package lk.ijse.carRentalSystem.repo;

import lk.ijse.carRentalSystem.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.math.BigDecimal;


public interface BookRepo extends JpaRepository<Book,String> {


    @Query(value = "SELECT total_KM FROM book WHERE registrationNo=?1 ORDER BY bookId DESC LIMIT 1",nativeQuery = true)
    BigDecimal findTotalKm(String registrationNo);

}
