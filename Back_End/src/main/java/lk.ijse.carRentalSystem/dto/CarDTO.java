package lk.ijse.carRentalSystem.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CarDTO {
    private String registration_Number;
    private String brand;
    private String type;
    private BigDecimal rent_Price_Day;
    private BigDecimal rent_Price_Month;
    private BigDecimal Free_KM_Day;
    private BigDecimal Free_KM_Month;
    private BigDecimal price_Extra_KM;
    private String color;
    private byte[] front_View;
    private byte[] back_View;
    private byte[] side_View;
    private byte[] interior;
    private int passenger_Count;
    private String transmission_Type;
    private String fuel_Type;
    private String username_Manager;
}
