package lk.ijse.carRentalSystem.repo;

import lk.ijse.carRentalSystem.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CustomerRepo extends JpaRepository<Customer,String> {

    Boolean existsCustomerByUsername(String username);
    Boolean existsCustomerByPassword(String password);
    Boolean existsCustomerByLicense(String license);
    Boolean existsCustomerByEmail(String email);
    Boolean existsCustomerByUsernameAndPassword(String username,String password);

    @Query(value = "select nic_No from customer where username=?1",nativeQuery = true)
    String findCustomerNIC(String username);
}
