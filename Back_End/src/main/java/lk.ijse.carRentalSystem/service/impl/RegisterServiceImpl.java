package lk.ijse.carRentalSystem.service.impl;

import lk.ijse.carRentalSystem.dto.RegisterDTO;
import lk.ijse.carRentalSystem.entity.Register;
import lk.ijse.carRentalSystem.repo.RegisterRepo;
import lk.ijse.carRentalSystem.service.RegisterService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class RegisterServiceImpl implements RegisterService {

    @Autowired
    RegisterRepo registerRepo;

    @Autowired
    ModelMapper mapper;


    @Override
    public List<RegisterDTO> getAllRegister() {
        List<Register> all = registerRepo.findAll();
        return mapper.map(all, new TypeToken<List<RegisterDTO>>() {
        }.getType());
    }
}
