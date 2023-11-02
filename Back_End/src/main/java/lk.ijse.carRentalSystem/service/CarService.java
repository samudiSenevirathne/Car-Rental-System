package lk.ijse.carRentalSystem.service;

import lk.ijse.carRentalSystem.dto.CarDTO;

import java.util.List;

public interface CarService {

    void addCar(CarDTO dto);

    void deleteCar(String regisNum);

    List<CarDTO> getAllCar();

    CarDTO findCar(String regisNum);

    void updateCar(CarDTO c);

}
