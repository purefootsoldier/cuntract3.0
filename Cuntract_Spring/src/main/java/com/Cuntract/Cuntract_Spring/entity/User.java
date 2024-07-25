package com.Cuntract.Cuntract_Spring.entity;
import com.Cuntract.Cuntract_Spring.dto.UserDto;
import com.Cuntract.Cuntract_Spring.enums.UserRole;
import java.time.LocalDate;
import jakarta.persistence.*;
import lombok.Data;
@Data
@Table(name = "users")

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;

    private String password;

    private String sexo;

    private String nombre;

    private Integer telefono;

    private Boolean verificado;

    private LocalDate fecha_registro;

    private Integer Edad;

    private UserRole role;

    @Lob
    @Column(columnDefinition = "longblob")
    private byte[] img;

    //just got implemented
    public UserDto getDto() {
        UserDto userDto = new UserDto();
        userDto.setId(id);
        userDto.setEmail(email);
        userDto.setName(nombre);
        userDto.setRole(role);

        return userDto;
    }

}
