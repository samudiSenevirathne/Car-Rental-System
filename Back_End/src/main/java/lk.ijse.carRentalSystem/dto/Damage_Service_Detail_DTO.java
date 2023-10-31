package lk.ijse.carRentalSystem.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Damage_Service_Detail_DTO {
    private String d_Id;
    private String damage_Description;
    private LocalDate service_Start_Date;
    private LocalDate service_End_Date;
    private BigDecimal damage_Cost;
    private String nic_No_Manager;
    private String registration_Number;
}
