package com.project.ProjectMDS.service;

import com.project.ProjectMDS.model.Booking;
import com.project.ProjectMDS.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public Booking getBookingById(Long id) {
        return bookingRepository.findById(id).orElseThrow(() -> new RuntimeException("Booking not found"));
    }

    public Booking createBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    public Booking updateBooking(Long id, Booking booking) {
        Booking existingBooking = bookingRepository.findById(id).orElseThrow(() -> new RuntimeException("Booking not found"));
        existingBooking.setStart_date(booking.getStart_date());
        existingBooking.setEnd_date(booking.getEnd_date());
        existingBooking.setTotal_cost(booking.getTotal_cost());
        existingBooking.setStatus(booking.getStatus());
        existingBooking.setPayments(booking.getPayments());
        existingBooking.setUser(booking.getUser());
        existingBooking.setReview(booking.getReview());
        existingBooking.setService(booking.getService());
        return bookingRepository.save(existingBooking);
    }

    public void deleteBooking(Long id) {
        bookingRepository.deleteById(id);
    }
}



