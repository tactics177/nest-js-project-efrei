import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Player } from './player.model';
import mongoose from 'mongoose'; // Import the mongoose module

@Injectable()
export class PlayerService {
  constructor(@InjectModel(Player.name) private playerModel: Model<Player>) {}

  async createPlayer(name: string): Promise<Player> {
    const newPlayer = new this.playerModel({
      name,
      _id: new mongoose.Types.ObjectId(),
    });
    return newPlayer.save();
  }

  async getAllPlayers(): Promise<Player[]> {
    return this.playerModel.find().exec();
  }

  async getPlayerById(id: string): Promise<Player> {
    return this.playerModel.findById(id).exec();
  }

  async getPlayerByName(name: string): Promise<Player> {
    return this.playerModel.findOne({ name }).exec();
  }

  async updatePlayer(id: string, name: string): Promise<Player> {
    return this.playerModel
      .findByIdAndUpdate(id, { name }, { new: true })
      .exec();
  }

  async deletePlayer(id: string): Promise<Player> {
    return this.playerModel.findByIdAndDelete(id).exec();
  }
}
