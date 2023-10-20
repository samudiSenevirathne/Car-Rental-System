package lk.ijse.carRentalSystem.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Manager {
    @Id
    private String m_Id;
    @Column(nullable = false)
    private String name;
    @Column(unique=true)
    private String email;
    @Column(nullable = false)
    private String address;
    @Column(nullable = false)
    private String contact;
    private BigDecimal salary;
    @Column(nullable = false,unique=true)
    private String nic_No;
    @Lob
    private byte[] nic_Image;
    @Column(nullable = false)
    private LocalDate appointment_Start_Date;
    private LocalDate appointment_End_Date;

    @OneToMany(mappedBy = "mng")
    ArrayList<Car>carList;

    @OneToMany(mappedBy = "mng")
    ArrayList<Maintenance>maintenanceList;

    @OneToMany(mappedBy = "mng")
    ArrayList<Damage_Service_Detail>damageServiceDetailList;
}
