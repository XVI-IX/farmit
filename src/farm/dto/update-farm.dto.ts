import { IsIn, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateFarmDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  location?: any;

  @IsNotEmpty()
  @IsNumber()
  size: number;

  @IsString()
  @IsNotEmpty()
  @IsIn(['Plots', 'Acres', 'Hectares'])
  size_unit: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(['Planting', 'Cultivation', 'Harvesting'])
  status: string;

  @IsNotEmpty()
  soil?: any;
}
