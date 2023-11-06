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
public class Customer implements Serializable {
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
    @Column(nullable = false,unique=true)
    private String license;
    @Lob
    private String license_Image_One;
    @Lob
    private String license_Image_Two;
    private String verify_State;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String contact;
    @Column(unique=true)
    private String email;
    @Column(nullable = false)
    private String address;

    @OneToOne(mappedBy = "cus")
    private Register register;

    @OneToMany(mappedBy = "cus")
    private List<Book> bookList;

    public Customer(String username, String password, String nic_No, String nic_Image_One, String nic_Image_Two, String license, String license_Image_One, String license_Image_Two, String verify_State, String name, String contact, String email, String address) {
        this.username = username;
        this.password = password;
        this.nic_No = nic_No;
        this.nic_Image_One = nic_Image_One;
        this.nic_Image_Two = nic_Image_Two;
        this.license = license;
        this.license_Image_One = license_Image_One;
        this.license_Image_Two = license_Image_Two;
        this.verify_State = verify_State;
        this.name = name;
        this.contact = contact;
        this.email = email;
        this.address = address;
    }
}
