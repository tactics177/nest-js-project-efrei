import { Inject, Injectable } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async login(loginDto: { username: string; password: string }): Promise<any> {
    const { username, password } = loginDto;

    // Find user by username
    const user = await this.userModel.findOne({ username }).exec();

    // Check if user exists and verify the password
    if (user && (await bcrypt.compare(password, user.password))) {
      // Authentication successful
      return { message: 'Login successful' };
    } else {
      // Authentication failed
      throw new Error('Invalid username or password');
    }
  }

  async register(registerDto: {
    username: string;
    password: string;
  }): Promise<any> {
    // Check if username already exists
    const existingUser = await this.userModel
      .findOne({ username: registerDto.username })
      .exec();
    if (existingUser) {
      throw new Error('Username already exists');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(registerDto.password, 10); // 10 is the saltRounds

    // Create a new user with the hashed password
    const newUser = new this.userModel({
      username: registerDto.username,
      password: hashedPassword,
      _id: new mongoose.Types.ObjectId(),
    });

    try {
      const savedUser = await newUser.save(); // Save the user to the database
      return { message: 'Registration successful' };
    } catch (error) {
      throw new Error('Failed to register user');
    }
  }
}
