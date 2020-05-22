package com.example.SpringWithDatabase.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.util.Date;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity

public class Todo {

    @Id
    @GeneratedValue
    private int id;
    private String description;
    private Date targetDate;
    private boolean done;
    private String userEmail;

   // @OneToOne(cascade=CascadeType.ALL) User user;

    public int getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public Date getTargetDate() {
        return targetDate;
    }

    public boolean isDone() {
        return done;
    }


    public void setDescription(String description) {
        this.description = description;
    }

    public void setTargetDate(Date targetDate) {
        this.targetDate = targetDate;
    }

    public void setDone(boolean done) {
        this.done = done;
    }

    public String getUserEmail() {

        return userEmail;
    }

}

