package lk.ijse.carRentalSystem.repo;

import lk.ijse.carRentalSystem.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepo extends JpaRepository<Book,String> {

}
