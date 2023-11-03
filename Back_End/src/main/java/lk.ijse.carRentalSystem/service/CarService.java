package lk.ijse.carRentalSystem.service;

import lk.ijse.carRentalSystem.dto.CarDTO;

import java.util.List;

public interface CarService {

    void addCar(CarDTO dto);

    void deleteCar(String registration_Number);

    List<CarDTO> getAllCar();

    CarDTO findCar(String registration_Number);

    void updateCar(CarDTO c);

    List<CarDTO> findType(String type);

    List<CarDTO> findBrand(String brand);

}
