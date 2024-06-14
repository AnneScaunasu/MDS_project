package com.project.ProjectMDS.service;

import com.project.ProjectMDS.model.Payment;
import com.project.ProjectMDS.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    //operatiile crud pe clasa list
    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    public Payment getPaymentById(Long id) {
        return paymentRepository.findById(id).orElseThrow(() -> new RuntimeException("Payment not found"));
    }

    public Payment createPayment(Payment payment) {
        return paymentRepository.save(payment);
    }

    public Payment updatePayment(Long id, Payment payment) {
        Payment existingPayment = paymentRepository.findById(id).orElseThrow(() -> new RuntimeException("Payment not found"));
        existingPayment.setAmount(payment.getAmount());
        existingPayment.setPayment_date(payment.getPayment_date());
        existingPayment.setPayment_method(payment.getPayment_method());
        existingPayment.setPayment_status(payment.getPayment_status());
        existingPayment.setBooking(payment.getBooking());
        return paymentRepository.save(existingPayment);
    }

    public void deletePayment(Long id) {
        paymentRepository.deleteById(id);
    }
}

