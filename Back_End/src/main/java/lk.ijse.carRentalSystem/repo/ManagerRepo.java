package lk.ijse.carRentalSystem.repo;

import lk.ijse.carRentalSystem.entity.Manager;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ManagerRepo extends JpaRepository<Manager,String> {

    Boolean existsManagerByUsername(String username);
    Boolean existsManagerByPassword(String password);
    Boolean existsManagerByEmail(String email);

}
