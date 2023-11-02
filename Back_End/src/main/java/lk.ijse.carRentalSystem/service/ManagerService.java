package lk.ijse.carRentalSystem.service;

import lk.ijse.carRentalSystem.dto.ManagerDTO;

public interface ManagerService {
    void addManager(ManagerDTO dto);

    void updateManager(ManagerDTO m);

    void  checkManager(String username,String password);

    String findManagerNIC(String username);
}
