package lk.ijse.carRentalSystem.repo;

import lk.ijse.carRentalSystem.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepo extends JpaRepository<Car,String> {

}
