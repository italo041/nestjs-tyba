import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';

import { GetTravelAdvisorDto } from '../dtos/travel-advisors.dto';
import config from './../../config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RestaurantsService {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
    private httpService: HttpService,
  ) {}
  async getTravelAdvisorRestaurants(
    getTravelAdvisorDto: GetTravelAdvisorDto,
  ): Promise<any> {
    const { city } = getTravelAdvisorDto;
    const data = this.httpService.get(
      'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete',
      {
        headers: {
          'x-rapidapi-key': this.configService.travelAdvisorKey,
        },
        params: {
          query: city,
        },
      },
    );
    const restaurantsData = await (await firstValueFrom(data)).data;

    return restaurantsData.data.Typeahead_autocomplete.results;
  }
}
