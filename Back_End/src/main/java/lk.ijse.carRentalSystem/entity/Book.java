package lk.ijse.carRentalSystem.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
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

    /*relationship*/
    //    driver_Id
    //    car_Id
    //    username

}
