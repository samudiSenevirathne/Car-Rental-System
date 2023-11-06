package lk.ijse.carRentalSystem.service.impl;

import lk.ijse.carRentalSystem.dto.CustomerDTO;
import lk.ijse.carRentalSystem.dto.RegisterDTO;
import lk.ijse.carRentalSystem.entity.Customer;
import lk.ijse.carRentalSystem.entity.Register;
import lk.ijse.carRentalSystem.repo.CustomerRepo;
import lk.ijse.carRentalSystem.repo.DriverRepo;
import lk.ijse.carRentalSystem.repo.ManagerRepo;
import lk.ijse.carRentalSystem.repo.RegisterRepo;
import lk.ijse.carRentalSystem.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    CustomerRepo customerRepo;

    @Autowired
    DriverRepo driverRepo;

    @Autowired
    ManagerRepo managerRepo;

    @Autowired
    RegisterRepo registerRepo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void addCustomer(CustomerDTO dto) {
        if (customerRepo.existsById(dto.getNic_No())) {
            throw new RuntimeException(dto.getNic_No() + " is already available, please again check your NIC");
        }
       if (customerRepo.existsCustomerByUsername(dto.getUsername()) || driverRepo.existsDriverByUsername(dto.getUsername()) || managerRepo.existsManagerByUsername(dto.getUsername())) {
           throw new RuntimeException(dto.getUsername() + " is already available, please insert a new username");
       }
       if (customerRepo.existsCustomerByPassword(dto.getPassword()) || driverRepo.existsDriverByPassword(dto.getPassword()) || managerRepo.existsManagerByPassword(dto.getPassword())) {
           throw new RuntimeException(dto.getPassword() + " is already available, please insert a new password");
       }
        if (customerRepo.existsCustomerByLicense(dto.getLicense())) {
            throw new RuntimeException(dto.getLicense() + " is already available, please again check your License_No");
        }
        if (customerRepo.existsCustomerByEmail(dto.getEmail())) {
            throw new RuntimeException(dto.getEmail() + " is already available, please again check your Email");
        }
          Customer customer=new Customer(dto.getUsername(),dto.getPassword(),dto.getNic_No(),dto.getNic_Image_One(),dto.getNic_Image_Two(),dto.getLicense(),dto.getLicense_Image_One(),dto.getLicense_Image_Two(),dto.getVerify_State(),dto.getName(),dto.getContact(),dto.getEmail(),dto.getAddress());
          customerRepo.save(customer);
          Register register = new Register(dto.getR_Id(), LocalDate.now(), LocalTime.now(),dto.getType(),customerRepo.getReferenceById(dto.getNic_No()));
          registerRepo.save(register);
    }

    @Override
    public List<CustomerDTO> getAllCustomer() {
        List<Customer> all = customerRepo.findAll();
        return mapper.map(all, new TypeToken<List<CustomerDTO>>() {
        }.getType());
    }

    @Override
    public CustomerDTO findCustomer(String nic) {
        if (!customerRepo.existsById(nic)) {
            throw new RuntimeException(nic+ " Customer is not available, please check your NIC.!");
        }
        Customer customer = customerRepo.findById(nic).get();
        return mapper.map(customer,CustomerDTO.class);
    }

    @Override
    public void updateCustomer(CustomerDTO c) {
        if (!customerRepo.existsById(c.getNic_No())) {
            throw new RuntimeException(c.getNic_No()+ " Customer is not available, please check your NIC before update.!");
        }
        Customer map = mapper.map(c, Customer.class);
        customerRepo.save(map);
    }

    @Override
    public void checkCustomer(String username, String password) {
        if (!customerRepo.existsCustomerByUsername(username)) {
            throw new RuntimeException(username + " is not available");
        }
        if (!customerRepo.existsCustomerByPassword(password)) {
            throw new RuntimeException(password + " is not available");
        }
        customerRepo.existsCustomerByUsernameAndPassword(username,password);
    }

    @Override
    public String findCustomerNIC(String username) {
        return customerRepo.findCustomerNIC(username);
    }

}
