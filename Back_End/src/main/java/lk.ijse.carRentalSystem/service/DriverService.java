package lk.ijse.carRentalSystem.service;

import lk.ijse.carRentalSystem.dto.DriverDTO;

import java.util.List;

public interface DriverService {
    void addDriver(DriverDTO dto);

    List<DriverDTO> getAllDriver();

    DriverDTO findDriver(String nic);

    void updateDriver(DriverDTO c);

    void  checkDriver(String username,String password);
}
