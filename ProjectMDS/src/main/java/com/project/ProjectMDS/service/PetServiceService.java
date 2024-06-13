package com.project.ProjectMDS.service;

import com.project.ProjectMDS.model.PetService;
import com.project.ProjectMDS.repository.PetServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PetServiceService {

    @Autowired
    private PetServiceRepository petServiceRepository;

    public List<PetService> getByTypeAndLocation(String type, String location) {
        return petServiceRepository.findAllByTypeAndLocation(type, location);
    }

    public List<PetService> getAllServices() {
        return petServiceRepository.findAll();
    }

    public PetService getServiceById(Long id) {
        return petServiceRepository.findById(id).orElseThrow(() -> new RuntimeException("Service not found"));
    }

    public PetService createService(PetService service) {
        return petServiceRepository.save(service);
    }

    public PetService updateService(Long id, PetService service) {
        PetService existingService = petServiceRepository.findById(id).orElseThrow(() -> new RuntimeException("Service not found"));
        existingService.setService_type(service.getService_type());
        existingService.setDescription(service.getDescription());
        existingService.setRate_per_hour(service.getRate_per_hour());
        existingService.setAvailability(service.isAvailability());
        return petServiceRepository.save(existingService);
    }

    public void deleteService(Long id) {
        petServiceRepository.deleteById(id);
    }
}

