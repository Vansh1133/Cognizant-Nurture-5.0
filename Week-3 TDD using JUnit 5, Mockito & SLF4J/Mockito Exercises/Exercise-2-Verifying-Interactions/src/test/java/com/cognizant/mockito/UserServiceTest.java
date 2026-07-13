package com.cognizant.mockito;

import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.*;

public class UserServiceTest {

    @Test
    void testVerifyInteraction() {

        UserRepository mockRepository = mock(UserRepository.class);

        UserService service = new UserService(mockRepository);

        service.registerUser("Nitin");

        verify(mockRepository).saveUser("Nitin");
    }
}