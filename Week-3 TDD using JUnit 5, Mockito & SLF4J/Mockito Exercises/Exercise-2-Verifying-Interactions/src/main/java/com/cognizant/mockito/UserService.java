package com.cognizant.mockito;

public class UserService {

    private UserRepository repository;

    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    public void registerUser(String name) {
        repository.saveUser(name);
    }
}