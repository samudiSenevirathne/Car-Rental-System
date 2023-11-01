package lk.ijse.carRentalSystem.repo;

import lk.ijse.carRentalSystem.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepo extends JpaRepository<Customer,String> {

    Boolean existsCustomerByUsername(String username);
    Boolean existsCustomerByPassword(String password);
    Boolean existsCustomerByLicense(String license);
    Boolean existsCustomerByEmail(String email);
}
