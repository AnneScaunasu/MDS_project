package com.project.ProjectMDS.repository;

import com.project.ProjectMDS.model.PetService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PetServiceRepository extends JpaRepository<PetService, Long> {

}

