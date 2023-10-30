package lk.ijse.carRentalSystem.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class MaintenanceDTO {
    private String maintain_Id;
    private String maintain_Place;
    private LocalDate maintain_Start_Date;
    private LocalDate maintain_End_Date;
    private BigDecimal maintain_Cost;
    private String username_Manager;
    private String registration_Number;
}
