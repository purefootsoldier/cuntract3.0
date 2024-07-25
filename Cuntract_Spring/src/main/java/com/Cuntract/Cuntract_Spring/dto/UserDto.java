package com.Cuntract.Cuntract_Spring.dto;

import com.Cuntract.Cuntract_Spring.enums.UserRole;
import lombok.Data;

@Data
public class UserDto {
    private Long id;

    private String email;

    private String name;

    private String password;

    private UserRole role;
}
