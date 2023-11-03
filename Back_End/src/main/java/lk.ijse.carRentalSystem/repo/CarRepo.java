package lk.ijse.carRentalSystem.repo;

import lk.ijse.carRentalSystem.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CarRepo extends JpaRepository<Car,String> {

    Boolean existsCarByType(String type);

    List<Car> findByType(String type);

    List<Car> findByBrand(String brand);

}
