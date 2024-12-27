import { Request, Response } from 'express';
import User from '../models/userModel';

class UserController {
    async registerUser(req: Request, res: Response): Promise<void> {
        const { username, email, password } = req.body;

        try {
            const newUser = new User({ username, email, password });
            await newUser.save();
            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Failed to register user', error });
        }
    }

    async loginUser(req: Request, res: Response): Promise<void> {
        // Logic for user login
    }

    async getUserDetails(req: Request, res: Response): Promise<void> {
        // Logic for fetching user details
    }
}

export default UserController;