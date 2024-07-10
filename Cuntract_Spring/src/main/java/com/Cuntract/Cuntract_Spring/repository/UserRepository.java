package com.Cuntract.Cuntract_Spring.repository;


import com.Cuntract.Cuntract_Spring.entity.User;
import com.Cuntract.Cuntract_Spring.enums.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findFirstByEmail(String email);

    User findByRole(UserRole userRole);

}
