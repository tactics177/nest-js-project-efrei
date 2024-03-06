import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class AuthService {
    async login(loginDto: { username: string, password: string }): Promise<any> {
        // Implement login logic here
        const { username, password } = loginDto;
        // Check if username and password are valid
        if (username === 'admin' && password === 'password') {
            // Authentication successful
            return { message: 'Login successful' };
        } else {
            // Authentication failed
            throw new Error('Invalid username or password');
        }
    }

    async register(registerDto: { username: string, password: string }): Promise<any> {
        // Implement registration logic here
        const newUser = new User(registerDto); // Assuming you have a User model defined
        
        try {
            const savedUser = await newUser.save(); // Save the user to the database
            return { message: 'Registration successful' };
        } catch (error) {
            throw new Error('Failed to register user');
        }
    }
}
