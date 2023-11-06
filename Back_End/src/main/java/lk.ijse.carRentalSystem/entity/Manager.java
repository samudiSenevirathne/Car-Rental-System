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
    @Column(nullable = false,unique=true)
    private String username;
    @Column(nullable = false,unique=true)
    private String password;
    @Id
    private String nic_No;
    @Lob
    private String nic_Image_One;
    @Lob
    private String nic_Image_Two;
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

    public Manager(String username, String password, String nic_No, String nic_Image_One, String nic_Image_Two, String verify_State, String name, String contact, String email, String address) {
        this.username = username;
        this.password = password;
        this.nic_No = nic_No;
        this.nic_Image_One = nic_Image_One;
        this.nic_Image_Two = nic_Image_Two;
        this.verify_State = verify_State;
        this.name = name;
        this.contact = contact;
        this.email = email;
        this.address = address;
    }
}
