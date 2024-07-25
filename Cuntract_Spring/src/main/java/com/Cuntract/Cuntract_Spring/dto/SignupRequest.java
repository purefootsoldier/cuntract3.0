package com.Cuntract.Cuntract_Spring.dto;


import lombok.Data;

@Data
public class SignupRequest {
    private Long id;
    private String email;
    private String password;
    private String name;
}
