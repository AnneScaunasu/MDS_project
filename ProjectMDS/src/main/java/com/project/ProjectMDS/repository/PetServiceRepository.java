package com.project.ProjectMDS.repository;

import com.project.ProjectMDS.model.PetService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.*;


@Repository
public interface PetServiceRepository extends JpaRepository<PetService, Long> {
    @Query(value = "SELECT ps FROM PetService ps where ps.service_type = ?1 AND ps.location = ?2")
    List<PetService> findAllByTypeAndLocation(String type, String location);
}

