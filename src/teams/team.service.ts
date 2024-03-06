import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Team } from './team.model';
import mongoose from 'mongoose'; // Import the mongoose module

@Injectable()
export class TeamService {
    constructor(@InjectModel(Team.name) private teamModel: Model<Team>) {}

    async createTeam(name: string): Promise<Team> {
        const newTeam = new this.teamModel({ name, _id: new mongoose.Types.ObjectId() });
        return newTeam.save();
    }

    async getAllTeams(): Promise<Team[]> {
        return this.teamModel.find().exec();
    }

    // Implement other CRUD operations as needed
}
