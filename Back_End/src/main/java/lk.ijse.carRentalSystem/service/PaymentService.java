package lk.ijse.carRentalSystem.service;

import lk.ijse.carRentalSystem.dto.PaymentDTO;

import java.util.List;

public interface PaymentService {

    void addPayment(PaymentDTO dto);

    void deletePayment(String pay_Id);

    List<PaymentDTO> getAllPayment();

    PaymentDTO findPayment(String pay_Id);

    void updatePayment(PaymentDTO p);

}
