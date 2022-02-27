import { Controller, Get, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { GetTravelAdvisorDto } from '../dtos/travel-advisors.dto';
import { RestaurantsService } from '../services/restaurants.service';

@Controller('restaurants')
@ApiTags('restaurants')
export class RestaurantsController {
  constructor(private restaurantService: RestaurantsService) {}

  @Get('/')
  @ApiBearerAuth()
  getRestaurants(@Query() params: GetTravelAdvisorDto): Promise<any> {
    return this.restaurantService.getTravelAdvisorRestaurants(params);
  }
}
