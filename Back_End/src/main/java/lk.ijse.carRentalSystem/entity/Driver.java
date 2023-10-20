package lk.ijse.carRentalSystem.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.math.BigDecimal;
import java.util.ArrayList;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Driver {
    @Id
    private String driver_Id;
    @Column(nullable = false)
    private String address;
    private BigDecimal salary;
    @Column(unique=true)
    private String email;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String contact;
    @Column(nullable = false,unique=true)
    private String nic;

    @OneToMany(mappedBy = "drive")
    ArrayList<Book> bookList;

}
