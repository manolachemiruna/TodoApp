package com.example.SpringWithDatabase.services;


import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;

public class BCryptPasswordEncoder {

    public String encode(String password)
    {
        //SecureRandom random = new SecureRandom();
        //byte[] salt = new byte[16];
        //random.nextBytes(salt);
        MessageDigest md = null;
        byte [] hashedPassword=null;
        try {
            md = MessageDigest.getInstance("SHA-512");
           // md.update(salt);
            hashedPassword = md.digest(password.getBytes(StandardCharsets.UTF_16));
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }

          return hashedPassword.toString();
    }
}
