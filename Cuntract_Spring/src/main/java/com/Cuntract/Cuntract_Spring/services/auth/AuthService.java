package com.Cuntract.Cuntract_Spring.services.auth;

import com.Cuntract.Cuntract_Spring.dto.SignupRequest;
import com.Cuntract.Cuntract_Spring.dto.UserDto;

public interface AuthService {

    UserDto createTalento(SignupRequest signupRequest);

    Boolean hasUserWithEmail(String email);

    UserDto createNegocio(SignupRequest signupRequest);
}
