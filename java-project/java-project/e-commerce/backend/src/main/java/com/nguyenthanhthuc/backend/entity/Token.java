package com.nguyenthanhthuc.backend.entity;

import java.util.Date;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity

public class Token {
    @Id
    private Long id;
    private String token;
    private Date created_at;

    @ManyToOne
    private User user;
}
