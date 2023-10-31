package lk.ijse.carRentalSystem.service.impl;

import lk.ijse.carRentalSystem.dto.CustomerDTO;
import lk.ijse.carRentalSystem.entity.Customer;
import lk.ijse.carRentalSystem.repo.CustomerRepo;
import lk.ijse.carRentalSystem.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    CustomerRepo customerRepo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void addCustomer(CustomerDTO dto) {
        if (customerRepo.existsById(dto.getNic_No())) {
            throw new RuntimeException(dto.getNic_No() + " is already available, please again check your NIC");
        }
       if (customerRepo.existsCustomerByUsername(dto.getUsername())) {
           throw new RuntimeException(dto.getUsername() + " is already available, please insert a new username");
       }
       if (customerRepo.existsCustomerByPassword(dto.getPassword())) {
           throw new RuntimeException(dto.getPassword() + " is already available, please insert a new password");
       }
        Customer map = mapper.map(dto, Customer.class);
        customerRepo.save(map);
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
}
