import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { TeamService } from './team.service';
import { Team } from './team.model';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamService: TeamService) {}

  @Post()
  async create(@Body() createTeamDto: { name: string }): Promise<Team> {
    console.log(createTeamDto);
    return this.teamService.createTeam(createTeamDto.name);
  }

  @Get()
  async findAll(): Promise<Team[]> {
    return this.teamService.getAllTeams();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Team> {
    return this.teamService.getTeamById(id);
  }

  @Get('name/:name')
  async findByName(@Param('name') name: string): Promise<Team> {
    return this.teamService.getTeamByName(name);
  }

  @Post(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTeamDto: { name: string },
  ): Promise<Team> {
    return this.teamService.updateTeam(id, updateTeamDto.name);
  }

  @Post('delete/:id')
  async delete(@Param('id') id: string): Promise<Team> {
    return this.teamService.deleteTeam(id);
  }
}
