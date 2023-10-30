package lk.ijse.carRentalSystem.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Maintenance implements Serializable {
    @Id
    private String maintain_Id;
    @Column(nullable = false)
    private String maintain_Place;
    @Column(nullable = false)
    private LocalDate maintain_Start_Date;
    private LocalDate maintain_End_Date;
    private BigDecimal maintain_Cost;

    @ManyToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "username_Manager",referencedColumnName = "username_Manager",nullable = false)
    private Manager mng;

    @ManyToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "registration_Number",referencedColumnName = "registration_Number",nullable = false)
    private Car car;

}
