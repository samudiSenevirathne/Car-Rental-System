package lk.ijse.carRentalSystem.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class BookDTO {
    private String bookId;
    private LocalDate booking_Date;
    private LocalTime booking_Time;
    private LocalDate start_Date;
    private LocalTime start_Time;
    private LocalDate end_Date;
    private LocalTime end_Time;
    private String startVenue;
    private String endVenue;
    private BigDecimal total_KM;
    private String maintain_Status;
    private String nic_No_Driver;
    private String registration_No;
    private String nic_No_Cus;
    private String pay_Id;
    private BigDecimal loss_Damage_Waiver;
    private BigDecimal rental_Fee;
    private List<BookDTO> bookDetails;
}
