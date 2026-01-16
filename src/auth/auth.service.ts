import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import { RegisterDto } from './dto/resgister.dto';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService
    ) {}

    async register(registerDto: RegisterDto) {

        const hashedPassword = await bcrypt.hash(registerDto.password, 10); 

        const user = await this.prisma.user.create({
            data: {
                email: registerDto.email,
                name: registerDto.name,
                password: hashedPassword
            },

            select:{ id:true , email:true, name: true }
        });


        return { id: user.id, email: user.email, name: user.name, message: "Usuário criado com sucesso" };

    }

    async login(logimDto: LoginDto) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: logimDto.email,
            }
        });

        if(!user) {
            throw new Error('Invalid credentials');
        }

        const isPasswordValid = await bcrypt.compare(logimDto.password, user.password);

        if(!isPasswordValid || !user) {
            throw new Error('Invalid credentials');
        }

        const payload = { sub: user.id, email: user.email };
        const token = this.jwtService.sign(payload);

        return {
            access_token: token,
            id: user.id,
            name: user.name,
            email: user.email
        };

    }
}