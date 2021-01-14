package com.hyy;

import com.hyy.repository.UserRepository;
import com.hyy.users.entity.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
class PropertyManagementApplicationTests {

    @Test
    void contextLoads() {
    }


    @Autowired
    UserRepository userRepository;

    @Test
    void testUser(){
        List<User> all = userRepository.findAll();
        System.out.println();
    }

}
