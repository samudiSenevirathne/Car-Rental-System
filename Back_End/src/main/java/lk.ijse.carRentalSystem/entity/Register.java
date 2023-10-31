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
    @JoinColumn(name = "nic_No_Customer",referencedColumnName = "nic_No",nullable = false)
    private Customer cus;

    @OneToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "nic_No_Driver",referencedColumnName = "nic_No",nullable = false)
    private Driver drive;

    @OneToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "nic_No_Manager",referencedColumnName = "nic_No",nullable = false)
    private Manager mng;

}
