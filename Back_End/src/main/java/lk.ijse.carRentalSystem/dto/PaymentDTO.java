package lk.ijse.carRentalSystem.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class PaymentDTO {
    private String pay_Id;
    private byte[] bank_Slip_Image;
    private BigDecimal loss_Damage_Waiver;
    private BigDecimal rental_Fee;
    private String additional_payment_Description;
    private BigDecimal additional_payment_Cost;
    private LocalDate additional_payment_Date;
    private String additional_charge_Description;
    private BigDecimal additional_charge_Cost;
    private LocalDate additional_charge_Date;
//    private String book_Id;
}
