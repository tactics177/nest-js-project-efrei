import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { PlayerService } from './player.service';
import { Player } from './player.model';

@Controller('players')
export class PlayersController {
  constructor(private readonly playerService: PlayerService) {}

  @Post()
  async create(@Body() createplayerDto: { name: string }): Promise<Player> {
    console.log(createplayerDto);
    return this.playerService.createPlayer(createplayerDto.name);
  }

  @Get()
  async findAll(): Promise<Player[]> {
    return this.playerService.getAllPlayers();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Player> {
    return this.playerService.getPlayerById(id);
  }

  @Get('name/:name')
  async findByName(@Param('name') name: string): Promise<Player> {
    return this.playerService.getPlayerByName(name);
  }

  @Post(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePlayerDto: { name: string },
  ): Promise<Player> {
    return this.playerService.updatePlayer(id, updatePlayerDto.name);
  }

  @Post('delete/:id')
  async delete(@Param('id') id: string): Promise<Player> {
    return this.playerService.deletePlayer(id);
  }
}
