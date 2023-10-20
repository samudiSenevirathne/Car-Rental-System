package lk.ijse.carRentalSystem.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Book {
    @Id
    private String book_Id;
    @Column(nullable = false)
    private LocalDate booking_Date;
    @Column(nullable = false)
    private LocalTime booking_Time;
    @Column(nullable = false)
    private LocalDate start_Date;
    @Column(nullable = false)
    private LocalTime start_Time;
    @Column(nullable = false)
    private LocalDate end_Date;
    @Column(nullable = false)
    private LocalTime end_Time;
    @Column(nullable = false)
    private String from;
    @Column(nullable = false)
    private String to;
    private BigDecimal total_KM;
    private String maintain_Status;
    @EmbeddedId
    private CarCustomerPK carCustomerPK;

    @OneToOne(mappedBy = "book")
    private Payment payment;

    @ManyToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "driver_Id",referencedColumnName = "driver_Id",nullable = false)
    private Driver drive;

    @ManyToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "car_Id",referencedColumnName = "car_Id",nullable = false)
    private Car car;

    @ManyToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "username",referencedColumnName = "username",nullable = false)
    private Customer cus;

}
