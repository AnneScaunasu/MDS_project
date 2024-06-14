package com.project.ProjectMDS.model;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class PetService {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long service_id;

    private String service_type;
    private String description;
    private String location; //added by Delia
    private float rate_per_hour;
    private boolean availability;

    //added id_user as a foreign key
    //we need to identify who provides the service, or posts requests

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;


    // relatie one to many intre petService si booking
    @OneToMany(mappedBy = "petService", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Booking> bookings = new ArrayList<>();

    public String getService_type() {
        return service_type;
    }

    public void setService_type(String service_type) {
        this.service_type = service_type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public float getRate_per_hour() {
        return rate_per_hour;
    }

    public void setRate_per_hour(float rate_per_hour) {
        this.rate_per_hour = rate_per_hour;
    }

    public boolean isAvailability() {
        return availability;
    }

    public void setAvailability(boolean availability) {
        this.availability = availability;
    }

    public User getUser(){
        return this.user;
    }

    public void setUser(User user){
        this.user = user;
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
