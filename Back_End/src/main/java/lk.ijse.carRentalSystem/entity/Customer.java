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
    @Id
    private String username_Customer;
    @Column(nullable = false,unique=true)
    private String password_Customer;
    @Column(nullable = false,unique=true)
    private String nic_No;
    @Lob
    private byte[] nic_Image_One;
    @Lob
    private byte[] nic_Image_Two;
    @Column(nullable = false,unique=true)
    private String license_No;
    @Lob
    private byte[] license_Image_One;
    @Lob
    private byte[] license_Image_Two;
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
    private List<Book> BookList;

}
