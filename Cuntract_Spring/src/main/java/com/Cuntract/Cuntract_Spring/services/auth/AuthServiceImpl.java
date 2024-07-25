package com.Cuntract.Cuntract_Spring.services.auth;

import com.Cuntract.Cuntract_Spring.dto.SignupRequest;
import com.Cuntract.Cuntract_Spring.dto.UserDto;
import com.Cuntract.Cuntract_Spring.entity.User;
import com.Cuntract.Cuntract_Spring.enums.UserRole;
import com.Cuntract.Cuntract_Spring.repository.UserRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.Cuntract.Cuntract_Spring.services.auth.AuthService;

@Service
public class AuthServiceImpl implements AuthService{
    @Autowired
    private UserRepository userRepository;

    //outdated

    public UserDto createTalento(SignupRequest signupRequest){
        User user = new User();

        user.setEmail(signupRequest.getEmail());
        user.setNombre(signupRequest.getName());
        user.setPassword(new BCryptPasswordEncoder().encode(signupRequest.getPassword()));
        user.setRole(UserRole.TALENTO);

        return userRepository.save(user).getDto();

    }
    public UserDto createNegocio(SignupRequest signupRequest){
        User user = new User();

        user.setEmail(signupRequest.getEmail());
        user.setNombre(signupRequest.getName());
        user.setPassword(new BCryptPasswordEncoder().encode(signupRequest.getPassword()));
        user.setRole(UserRole.NEGOCIO);

        return userRepository.save(user).getDto();

    }

    public Boolean hasUserWithEmail(String email){
        return userRepository.findFirstByEmail(email).isPresent();
    }

    @PostConstruct
    public void createBusinessAccount() {
        User businessAccount = userRepository.findByRole(UserRole.NEGOCIO);
        if (null == businessAccount) {
            User user = new User();
            user.setEmail("business@test.com");
            user.setNombre("purecuck enterprises");
            user.setRole(UserRole.NEGOCIO);
            user.setPassword(new BCryptPasswordEncoder().encode( "mechanicus"));
            userRepository.save(user);
        }
    }
}
