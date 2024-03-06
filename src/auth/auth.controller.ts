import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    async login(@Body() loginDto: { username: string, password: string }) {
        console.log('loginDto', loginDto);
        return this.authService.login(loginDto);
    }

    @Post('register')
    async register(@Body() registerDto: { username: string, password: string }) {
        console.log('registerDto', registerDto);
        return this.authService.register(registerDto);
    }
}
