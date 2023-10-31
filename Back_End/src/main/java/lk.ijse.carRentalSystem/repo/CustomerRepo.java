package lk.ijse.carRentalSystem.repo;

import lk.ijse.carRentalSystem.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepo extends JpaRepository<Customer,String> {

//    Boolean existsCustomerByUsername_Customer(String username);
//    Boolean existsCustomerByPassword_Customer(String password);


}
