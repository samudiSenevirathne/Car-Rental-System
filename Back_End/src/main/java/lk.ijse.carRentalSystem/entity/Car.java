package lk.ijse.carRentalSystem.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Car implements Serializable {
    @Id
    private String registration_Number;
    @Column(nullable = false)
    private String brand;
    @Column(nullable = false)
    private String type;
    @Column(nullable = false)
    private BigDecimal rent_Price_Day;
    @Column(nullable = false)
    private BigDecimal rent_Price_Month;
    @Column(nullable = false)
    private BigDecimal Free_KM_Day;
    @Column(nullable = false)
    private BigDecimal Free_KM_Month;
    @Column(nullable = false)
    private BigDecimal price_Extra_KM;
    @Column(nullable = false)
    private String color;
    @Lob
    private byte[] front_View;
    @Lob
    private byte[] back_View;
    @Lob
    private byte[] side_View;
    @Lob
    private byte[] interior;
    @Column(nullable = false)
    private int passenger_Count;
    @Column(nullable = false)
    private String transmission_Type;
    @Column(nullable = false)
    private String fuel_Type;

    @ManyToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "username_Manager",referencedColumnName = "username_Manager",nullable = false)
    private Manager mng;

    @OneToMany(mappedBy = "car")
    List<Maintenance> maintenanceList;

    @OneToMany(mappedBy = "car")
    List<Damage_Service_Detail>damageServiceDetailList;

    @OneToMany(mappedBy = "car")
    private List<Book> BookList;

}
