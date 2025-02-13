package package1.repository;

import package1.model.User;

import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;

@Repository
public class UserRepository {
    private static Map<String, User> userDatabase = new HashMap<>();

    public User save(User user) {
        userDatabase.put(user.getEmail(), user);
        return user;
    }

    public User findByEmail(String email) {
        return userDatabase.get(email);
    }
}
