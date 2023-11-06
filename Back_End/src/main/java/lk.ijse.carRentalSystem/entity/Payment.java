package lk.ijse.carRentalSystem.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Payment implements Serializable {
    @Id
    private String pay_Id;
    @Lob
    private String bank_Slip_Image;
    @Column(nullable = false)
    private BigDecimal loss_Damage_Waiver;
    @Column(nullable = false)
    private BigDecimal rental_Fee;
    private String additional_payment_Description;
    private BigDecimal additional_payment_Cost;
    private LocalDate additional_payment_Date;
    private String additional_charge_Description;
    private BigDecimal additional_charge_Cost;
    private LocalDate additional_charge_Date;


    @OneToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "bookId",referencedColumnName = "bookId")
    private Book book;

    public Payment(String pay_Id, BigDecimal loss_Damage_Waiver, BigDecimal rental_Fee, Book book) {
        this.pay_Id = pay_Id;
        this.loss_Damage_Waiver = loss_Damage_Waiver;
        this.rental_Fee = rental_Fee;
        this.book = book;
    }
}
