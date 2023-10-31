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
public class Driver implements Serializable {
    @Column(nullable = false,unique=true)
    private String username;
    @Column(nullable = false,unique=true)
    private String password;
    @Id
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

    @OneToMany(mappedBy = "drive")
    List<Book> BookList;

    @OneToOne(mappedBy = "drive")
    private Register register;

}
