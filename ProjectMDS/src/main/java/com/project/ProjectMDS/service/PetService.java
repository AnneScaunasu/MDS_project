package com.project.ProjectMDS.service;

import com.project.ProjectMDS.model.Pet;
import com.project.ProjectMDS.repository.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PetService {

    @Autowired
    private PetRepository petRepository;

    // operatii crud pe clasa pet

    public List<Pet> getAllPets() {
        return petRepository.findAll();
    }

    public Pet getPetById(Long id) {
        return petRepository.findById(id).orElseThrow(() -> new RuntimeException("Pet not found"));
    }

    public Pet createPet(Pet pet) {
        return petRepository.save(pet);
    }

    public Pet updatePet(Long id, Pet pet) {
        Pet existingPet = petRepository.findById(id).orElseThrow(() -> new RuntimeException("Pet not found"));
        existingPet.setPet_name(pet.getPet_name());
        existingPet.setSpecies(pet.getSpecies());
        existingPet.setBreed(pet.getBreed());
        existingPet.setAge(pet.getAge());
        existingPet.setSpecial_needs(pet.getSpecial_needs());
        existingPet.setVaccination_status(pet.getVaccination_status());
        existingPet.setNotes(pet.getNotes());
        existingPet.setUser(pet.getUser());
        return petRepository.save(existingPet);
    }

    public void deletePet(Long id) {
        petRepository.deleteById(id);
    }
}

