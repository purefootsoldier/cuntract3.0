package com.Cuntract.Cuntract_Spring.dto;


import lombok.Data;

@Data
public class SignupRequest {
    private String email;
    private String password;
    private String name;
    private String userRole;
}
