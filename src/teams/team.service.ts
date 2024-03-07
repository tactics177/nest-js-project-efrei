import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Team } from './team.model';
import mongoose from 'mongoose'; // Import the mongoose module

@Injectable()
export class TeamService {
  constructor(@InjectModel(Team.name) private teamModel: Model<Team>) {}

  async createTeam(name: string): Promise<Team> {
    const newTeam = new this.teamModel({
      name,
      _id: new mongoose.Types.ObjectId(),
    });
    return newTeam.save();
  }

  async getAllTeams(): Promise<Team[]> {
    return this.teamModel.find().exec();
  }

  async getTeamById(id: string): Promise<Team> {
    return this.teamModel.findById(id).exec();
  }

  async getTeamByName(name: string): Promise<Team> {
    return this.teamModel.findOne({ name }).exec();
  }

  async updateTeam(id: string, name: string): Promise<Team> {
    return this.teamModel.findByIdAndUpdate(id, { name }, { new: true }).exec();
  }

  async deleteTeam(id: string): Promise<Team> {
    return this.teamModel.findByIdAndDelete(id).exec();
  }
}
