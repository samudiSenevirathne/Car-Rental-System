package lk.ijse.carRentalSystem.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.ArrayList;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Car {
    @Id
    private String car_Id;
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
    @Column(nullable = false,unique=true)
    private String registration_Number;
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
    @JoinColumn(name = "m_Id",referencedColumnName = "m_Id",nullable = false)
    private Manager mng;

    @OneToMany(mappedBy = "car")
    ArrayList<Maintenance> maintenanceList;

    @OneToMany(mappedBy = "car")
    ArrayList<Damage_Service_Detail>damageServiceDetailList;

}
