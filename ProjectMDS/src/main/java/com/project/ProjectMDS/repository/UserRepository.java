package com.project.ProjectMDS.repository;

import com.project.ProjectMDS.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}

