package lk.ijse.carRentalSystem.service.impl;

import lk.ijse.carRentalSystem.dto.CarDTO;
import lk.ijse.carRentalSystem.entity.Car;
import lk.ijse.carRentalSystem.repo.CarRepo;
import lk.ijse.carRentalSystem.repo.ManagerRepo;
import lk.ijse.carRentalSystem.service.CarService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class CarServiceImpl implements CarService {

    @Autowired
    CarRepo carRepo;

    @Autowired
    ManagerRepo managerRepo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void addCar(CarDTO dto) {
        if (carRepo.existsById(dto.getRegistration_Number())) {
            throw new RuntimeException(dto.getRegistration_Number()+" is already available, please check again RegistrationNumber");
        }
        Car car = mapper.map(dto, Car.class);
        car.setMng(managerRepo.getReferenceById(dto.getNic_No_Manager()));
        carRepo.save(car);
    }

    @Override
    public void deleteCar(String regisNum) {
        if (!carRepo.existsById(regisNum)) {
            throw new RuntimeException(regisNum+ " Car is not available, please check the RegistrationNumber before delete.!");
        }
        carRepo.deleteById(regisNum);
    }

    @Override
    public List<CarDTO> getAllCar() {
        List<Car> all = carRepo.findAll();
        return mapper.map(all, new TypeToken<List<CarDTO>>() {
        }.getType());
    }

    @Override
    public CarDTO findCar(String regisNum) {
        if (!carRepo.existsById(regisNum)) {
            throw new RuntimeException(regisNum+ " Car is not available, please check the RegistrationNumber.!");
        }
        Car customer = carRepo.findById(regisNum).get();
        return mapper.map(customer,CarDTO.class);
    }

    @Override
    public void updateCar(CarDTO c) {
        if (!carRepo.existsById(c.getRegistration_Number())) {
            throw new RuntimeException(c.getRegistration_Number()+ " Car is not available, please check the RegistrationNumber before update.!");
        }
        Car map = mapper.map(c, Car.class);
        carRepo.save(map);
    }
}
