package lk.ijse.carRentalSystem.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Manager implements Serializable {
    @Id
    private String username_Manager;
    @Column(nullable = false,unique=true)
    private String password_Manager;
    @Column(nullable = false,unique=true)
    private String nic_No;
    @Lob
    private byte[] nic_Image_One;
    @Lob
    private byte[] nic_Image_Two;
    private String verify_State;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String contact;
    @Column(unique=true)
    private String email;
    @Column(nullable = false)
    private String address;

    @OneToMany(mappedBy = "mng")
    List<Car> carList;

    @OneToMany(mappedBy = "mng")
    List<Maintenance>maintenanceList;

    @OneToMany(mappedBy = "mng")
    List<Damage_Service_Detail>damageServiceDetailList;

    @OneToOne(mappedBy = "mng")
    private Register register;
}
