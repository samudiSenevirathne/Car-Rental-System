package lk.ijse.carRentalSystem.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CustomerDTO {
    private String username_Customer;
    private String password_Customer;
    private String nic_No;
    private byte[] nic_Image_One;
    private byte[] nic_Image_Two;
    private String license_No;
    private byte[] license_Image_One;
    private byte[] license_Image_Two;
    private String verify_State;
    private String name;
    private String contact;
    private String email;
    private String address;
}
