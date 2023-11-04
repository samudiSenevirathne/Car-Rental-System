package lk.ijse.carRentalSystem.service.impl;


import lk.ijse.carRentalSystem.dto.PaymentDTO;
import lk.ijse.carRentalSystem.entity.Payment;
import lk.ijse.carRentalSystem.repo.PaymentRepo;
import lk.ijse.carRentalSystem.service.PaymentService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class PaymentServiceImpl implements PaymentService {

    @Autowired
    PaymentRepo paymentRepo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void addPayment(PaymentDTO dto) {
        if (paymentRepo.existsById(dto.getPay_Id())) {
            throw new RuntimeException(dto.getPay_Id()+" is already available, please check again Pay_Id");
        }
        Payment payment = mapper.map(dto, Payment.class);
        paymentRepo.save(payment);
    }

    @Override
    public void deletePayment(String pay_Id) {
        if (!paymentRepo.existsById(pay_Id)) {
            throw new RuntimeException(pay_Id+ " Payment is not available, please check the Pay_Id before delete.!");
        }
        paymentRepo.deleteById(pay_Id);
    }

    @Override
    public List<PaymentDTO> getAllPayment() {
        List<Payment> all = paymentRepo.findAll();
        return mapper.map(all, new TypeToken<List<PaymentDTO>>() {
        }.getType());
    }

    @Override
    public PaymentDTO findPayment(String pay_Id) {
        if (!paymentRepo.existsById(pay_Id)) {
            throw new RuntimeException(pay_Id+ " Payment is not available, please check the pay_Id.!");
        }
        Payment payment = paymentRepo.findById(pay_Id).get();
        return mapper.map(payment,PaymentDTO.class);
    }

    @Override
    public void updatePayment(PaymentDTO p) {
        if (!paymentRepo.existsById(p.getPay_Id())) {
            throw new RuntimeException(p.getPay_Id()+ " Payment is not available, please check the pay_Id before update.!");
        }
        Payment payment = mapper.map(p, Payment.class);
        paymentRepo.save(payment);
    }
}
