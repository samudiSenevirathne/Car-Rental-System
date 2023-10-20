package lk.ijse.carRentalSystem.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Customer {
    @Id
    private String username;
    @Column(nullable = false,unique=true)
    private String password;
    @Column(nullable = false,unique=true)
    private String nic_No;
    @Lob
    private byte[] nic_Image;
    @Column(nullable = false,unique=true)
    private String license_No;
    @Lob
    private byte[] license_Image;
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
    private List<Book> bookList=new ArrayList<>();

}
