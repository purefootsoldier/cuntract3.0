package com.Cuntract.Cuntract_Spring.entity;
import com.Cuntract.Cuntract_Spring.enums.UserRole;
import java.time.LocalDate;
import jakarta.persistence.*;
import lombok.Data;
@Entity
@Data
@Table(name = "users")

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

}
