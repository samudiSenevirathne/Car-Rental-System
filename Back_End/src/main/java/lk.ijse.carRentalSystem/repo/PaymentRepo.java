package lk.ijse.carRentalSystem.repo;

import lk.ijse.carRentalSystem.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepo extends JpaRepository<Payment,String> {

}
