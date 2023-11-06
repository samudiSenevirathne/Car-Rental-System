package lk.ijse.carRentalSystem.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CustomerDTO {
    private String username;
    private String password;
    private String nic_No;
    private String nic_Image_One;
    private String nic_Image_Two;
    private String license;
    private String license_Image_One;
    private String license_Image_Two;
    private String verify_State;
    private String name;
    private String contact;
    private String email;
    private String address;
    private String r_Id;
    private String type;
}
