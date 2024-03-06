import { Inject, Injectable } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import mongoose from 'mongoose';

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) { }

    async login(loginDto: { username: string, password: string }): Promise<any> {
        const { username, password } = loginDto;

        // Find user by username
        const user = await this.userModel.findOne({ username }).exec();

        // Check if user exists and password matches
        if (user && user.password === password) {
            // Authentication successful
            return { message: 'Login successful' };
        } else {
            // Authentication failed
            throw new Error('Invalid username or password');
        }
    }

    async register(registerDto: { username: string, password: string }): Promise<any> {
        // Implement registration logic here
        const newUser = new this.userModel({ username: registerDto.username, password: registerDto.password, _id: new mongoose.Types.ObjectId() });
        
        try {
            const savedUser = await newUser.save(); // Save the user to the database
            return { message: 'Registration successful' };
        } catch (error) {
            throw new Error('Failed to register user');
        }
    }
}
