package com.example.application.entity;


import javax.persistence.*;

@Table(name = "items")
@Entity
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String description;


    private Boolean completed;

    public Item() {

    }



    public Item(Long id, String description, Boolean completed) {

        this.id = id;
        this.description = description;
        this.completed = completed;
        }



    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean getCompleted() {
        return completed;
    }

    public void setCompleted(Boolean completed) {
        this.completed = completed;
    }

}
