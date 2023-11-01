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
    private LocalDate date;
    private LocalTime time;
    private String type;

    @OneToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "nic_No_Customer",referencedColumnName = "nic_No")
    private Customer cus;

    @OneToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "nic_No_Driver",referencedColumnName = "nic_No")
    private Driver drive;

    @OneToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "nic_No_Manager",referencedColumnName = "nic_No")
    private Manager mng;

    public Register(String r_Id, LocalDate date, LocalTime time, String type, Customer cus) {
        this.r_Id = r_Id;
        this.date = date;
        this.time = time;
        this.type = type;
        this.cus = cus;
    }
}
