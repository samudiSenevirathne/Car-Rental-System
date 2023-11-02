package lk.ijse.carRentalSystem.repo;

import lk.ijse.carRentalSystem.entity.Manager;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ManagerRepo extends JpaRepository<Manager,String> {

    Boolean existsManagerByUsername(String username);
    Boolean existsManagerByPassword(String password);
    Boolean existsManagerByEmail(String email);
    Boolean existsManagerByUsernameAndPassword(String username,String password);

    @Query(value = "select Nic_No from Manager where username=?1",nativeQuery = true)
    String findManagerNIC(String username);

}
