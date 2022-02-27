import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { GetTravelAdvisorDto } from '../dtos/travel-advisors.dto';
import { RestaurantsService } from '../services/restaurants.service';

@Controller('restaurants')
@ApiTags('restaurants')
export class RestaurantsController {
  constructor(private restaurantService: RestaurantsService) {}

  @ApiBearerAuth()
  @Get('/')
  @UseGuards(AuthGuard())
  getRestaurants(
    @Req() Req,
    @Query() params: GetTravelAdvisorDto,
  ): Promise<any> {
    return this.restaurantService.getTravelAdvisorRestaurants(params);
  }
}
