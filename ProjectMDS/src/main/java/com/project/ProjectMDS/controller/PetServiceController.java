package com.project.ProjectMDS.controller;

import com.project.ProjectMDS.model.PetService;
import com.project.ProjectMDS.service.PetServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
// requesturile catre aceasta entitate se vor duce la "api/services"
@RequestMapping("/api/services")
public class PetServiceController {

    private final PetServiceService petServiceService;

    // initializam petServiceService cu dependency injection
    @Autowired
    public PetServiceController(PetServiceService petServiceService) {
        this.petServiceService = petServiceService;
    }

    @PostMapping
    public ResponseEntity<PetService> createService(@RequestBody PetService service) {
        PetService createdService = petServiceService.createService(service);
        return new ResponseEntity<>(createdService, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PetService> updateService(@PathVariable Long id, @RequestBody PetService service) {
        PetService updatedService = petServiceService.updateService(id, service);
        if (updatedService != null) {
            return new ResponseEntity<>(updatedService, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteService(@PathVariable Long id) {
        petServiceService.deleteService(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PetService> getServiceById(@PathVariable Long id) {
        PetService service = petServiceService.getServiceById(id);
        if (service != null) {
            return new ResponseEntity<>(service, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/getServiceByTypeAndLocation")
    public ResponseEntity<List<PetService>> getServiceByTypeAndLocation(@RequestParam String type, @RequestParam String location) {
        List<PetService> services = petServiceService.getByTypeAndLocation(type, location);
        return new ResponseEntity<>(services, HttpStatus.OK);
    }

    @GetMapping("/getAllServices")
    public ResponseEntity<List<PetService>> getAllServices() {
        List<PetService> services = petServiceService.getAllServices();
        return new ResponseEntity<>(services, HttpStatus.OK);
    }
}

