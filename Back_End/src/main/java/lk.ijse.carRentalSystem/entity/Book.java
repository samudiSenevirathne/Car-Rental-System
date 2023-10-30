package lk.ijse.carRentalSystem.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Book implements Serializable {
    @Id
    private String book_Id;
    @EmbeddedId
    private CarCustomerPK carCustomerPK;
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

    @OneToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "pay_Id",referencedColumnName = "pay_Id",nullable = false)
    private Payment pay;

    @ManyToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "username_Driver",referencedColumnName = "username_Driver",nullable = false)
    private Driver drive;

    @ManyToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "registration_No",referencedColumnName = "registration_Number",nullable = false)
    private Car car;

    @ManyToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "username_Cus",referencedColumnName = "username_Customer",nullable = false)
    private Customer cus;

}
