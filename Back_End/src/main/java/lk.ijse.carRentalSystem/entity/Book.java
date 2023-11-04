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
    @Column(unique=true)
    private String bookId;
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
    @JoinColumn(name = "nic_No_Driver",referencedColumnName = "nic_No",nullable = false)
    private Driver drive;

    @ManyToOne
    @JoinColumn(name = "registrationNo",referencedColumnName = "registration_Number",insertable = false,updatable = false)
    private Car car;

    @ManyToOne
    @JoinColumn(name = "nic_No_Cus",referencedColumnName = "nic_No",insertable = false,updatable = false)
    private Customer cus;

}
