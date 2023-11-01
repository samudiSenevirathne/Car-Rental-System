package lk.ijse.carRentalSystem.service.impl;

import lk.ijse.carRentalSystem.dto.DriverDTO;
import lk.ijse.carRentalSystem.dto.RegisterDTO;
import lk.ijse.carRentalSystem.entity.Driver;
import lk.ijse.carRentalSystem.entity.Register;
import lk.ijse.carRentalSystem.repo.CustomerRepo;
import lk.ijse.carRentalSystem.repo.DriverRepo;
import lk.ijse.carRentalSystem.repo.RegisterRepo;
import lk.ijse.carRentalSystem.service.DriverService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Service
@Transactional
public class DriverServiceImpl implements DriverService {

    @Autowired
    DriverRepo driverRepo;

    @Autowired
    CustomerRepo customerRepo;

    @Autowired
    RegisterRepo registerRepo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void addDriver(DriverDTO dto) {
        if (driverRepo.existsById(dto.getNic_No())) {
            throw new RuntimeException(dto.getNic_No() + " is already available, please again check your NIC");
        }
        if (driverRepo.existsDriverByUsername(dto.getUsername()) || customerRepo.existsCustomerByUsername(dto.getUsername())) {
            throw new RuntimeException(dto.getUsername() + " is already available, please insert a new username");
        }
        if (driverRepo.existsDriverByPassword(dto.getPassword()) || customerRepo.existsCustomerByPassword(dto.getPassword())) {
            throw new RuntimeException(dto.getPassword() + " is already available, please insert a new password");
        }
        if (driverRepo.existsDriverByLicense(dto.getLicense())) {
            throw new RuntimeException(dto.getLicense() + " is already available, please again check your License_No");
        }
        if (driverRepo.existsDriverByEmail(dto.getEmail())) {
            throw new RuntimeException(dto.getEmail() + " is already available, please again check your Email");
        }
        Driver map = mapper.map(dto, Driver.class);
        driverRepo.save(map);
        for(RegisterDTO dtoR:dto.getRegisterDetail()){
            Register register = new Register(dtoR.getR_Id(), LocalDate.now(), LocalTime.now(),dtoR.getType(),driverRepo.getReferenceById(dtoR.getNic_No_Driver()));
            registerRepo.save(register);
        }
    }

    @Override
    public List<DriverDTO> getAllDriver() {
        List<Driver> all = driverRepo.findAll();
        return mapper.map(all, new TypeToken<List<DriverDTO>>() {
        }.getType());
    }

    @Override
    public DriverDTO findDriver(String nic) {
        if (!driverRepo.existsById(nic)) {
            throw new RuntimeException(nic+ " Driver is not available, please check your NIC.!");
        }
        Driver driver = driverRepo.findById(nic).get();
        return mapper.map(driver, DriverDTO.class);
    }

    @Override
    public void updateDriver(DriverDTO c) {
        if (!driverRepo.existsById(c.getNic_No())) {
            throw new RuntimeException(c.getNic_No()+ " Driver is not available, please check your NIC before update.!");
        }
        Driver map = mapper.map(c, Driver.class);
        driverRepo.save(map);
    }
}
