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
    private String bookId;
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

    @OneToOne(mappedBy = "book")
    private Payment pay;

    @ManyToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "nic_No_Driver",referencedColumnName = "nic_No")
    private Driver drive;

    @ManyToOne
    @JoinColumn(name = "registrationNo",referencedColumnName = "registration_Number",insertable = false,updatable = false)
    private Car car;

    @ManyToOne
    @JoinColumn(name = "nic_No_Cus",referencedColumnName = "nic_No",insertable = false,updatable = false)
    private Customer cus;

    public Book(String bookId, CarCustomerPK carCustomerPK, LocalDate booking_Date, LocalTime booking_Time, LocalDate start_Date, LocalDate end_Date, String startVenue, String endVenue, BigDecimal total_KM, String maintain_Status, Driver drive, Car car, Customer cus) {
        this.bookId = bookId;
        this.carCustomerPK = carCustomerPK;
        this.booking_Date = booking_Date;
        this.booking_Time = booking_Time;
        this.start_Date = start_Date;
        this.end_Date = end_Date;
        this.startVenue = startVenue;
        this.endVenue = endVenue;
        this.total_KM = total_KM;
        this.maintain_Status = maintain_Status;
        this.drive = drive;
        this.car = car;
        this.cus = cus;
    }
}
