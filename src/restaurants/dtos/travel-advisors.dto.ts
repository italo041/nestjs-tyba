import { IsNotEmpty, IsString } from 'class-validator';

export class GetTravelAdvisorDto {
  @IsNotEmpty()
  @IsString()
  city: string;
}
