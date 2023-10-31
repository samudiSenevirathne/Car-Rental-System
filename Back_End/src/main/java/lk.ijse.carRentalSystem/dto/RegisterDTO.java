package lk.ijse.carRentalSystem.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class RegisterDTO {
    private String r_Id;
    private LocalDate date;
    private LocalTime time;
    private String type;
    private String nic_No_Customer;
    private String nic_No_Driver;
    private String nic_No_Manager;
}
