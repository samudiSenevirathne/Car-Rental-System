package lk.ijse.carRentalSystem.service.impl;

import lk.ijse.carRentalSystem.dto.ManagerDTO;
import lk.ijse.carRentalSystem.dto.RegisterDTO;
import lk.ijse.carRentalSystem.entity.Manager;
import lk.ijse.carRentalSystem.entity.Register;
import lk.ijse.carRentalSystem.repo.CustomerRepo;
import lk.ijse.carRentalSystem.repo.DriverRepo;
import lk.ijse.carRentalSystem.repo.ManagerRepo;
import lk.ijse.carRentalSystem.repo.RegisterRepo;
import lk.ijse.carRentalSystem.service.ManagerService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.LocalTime;

@Service
@Transactional
public class ManagerServiceImpl implements ManagerService {

    @Autowired
    ManagerRepo managerRepo;

    @Autowired
    CustomerRepo customerRepo;

    @Autowired
    DriverRepo driverRepo;

    @Autowired
    RegisterRepo registerRepo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void addManager(ManagerDTO dto) {
        if (managerRepo.existsById(dto.getNic_No())) {
            throw new RuntimeException(dto.getNic_No() + " is already available, please again check your NIC");
        }
        if (managerRepo.existsManagerByUsername(dto.getUsername()) || customerRepo.existsCustomerByUsername(dto.getUsername()) || driverRepo.existsDriverByUsername(dto.getUsername()) ) {
            throw new RuntimeException(dto.getUsername() + " is already available, please insert a new username");
        }
        if (managerRepo.existsManagerByPassword(dto.getPassword()) || customerRepo.existsCustomerByPassword(dto.getPassword()) || driverRepo.existsDriverByPassword(dto.getPassword())) {
            throw new RuntimeException(dto.getPassword() + " is already available, please insert a new password");
        }
        if (managerRepo.existsManagerByEmail(dto.getEmail())) {
            throw new RuntimeException(dto.getEmail() + " is already available, please again check your Email");
        }
        Manager map = mapper.map(dto, Manager.class);
        managerRepo.save(map);
        for(RegisterDTO dtoR:dto.getRegisterDetail()){
            Register register = new Register(dtoR.getR_Id(), LocalDate.now(), LocalTime.now(),dtoR.getType(),managerRepo.getReferenceById(dtoR.getNic_No_Manager()));
            registerRepo.save(register);
        }
    }

    @Override
    public void updateManager(ManagerDTO m) {
        if (!managerRepo.existsById(m.getNic_No())) {
            throw new RuntimeException(m.getNic_No()+ " Manager is not available, please check your NIC before update.!");
        }
        Manager map = mapper.map(m, Manager.class);
        managerRepo.save(map);
    }

    @Override
    public void checkManager(String username, String password) {
        if (!managerRepo.existsManagerByUsername(username)) {
            throw new RuntimeException(username + " is not available");
        }
        if (!managerRepo.existsManagerByPassword(password)) {
            throw new RuntimeException(password + " is not available");
        }
        managerRepo.existsManagerByUsernameAndPassword(username,password);
    }

    @Override
    public String findManagerNIC(String username) {
        return managerRepo.findManagerNIC(username);
    }
}
