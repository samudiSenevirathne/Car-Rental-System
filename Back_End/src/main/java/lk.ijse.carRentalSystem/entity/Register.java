package lk.ijse.carRentalSystem.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Register implements Serializable {
    @Id
    private String r_Id;
    @Column(nullable = false)
    private LocalDate date;
    private LocalTime time;
    private String type;

    @OneToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "username_Customer",referencedColumnName = "username_Customer",nullable = false)
    private Customer cus;

    @OneToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "username_Driver",referencedColumnName = "username_Driver",nullable = false)
    private Driver drive;

    @OneToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "username_Manager",referencedColumnName = "username_Manager",nullable = false)
    private Manager mng;



}
