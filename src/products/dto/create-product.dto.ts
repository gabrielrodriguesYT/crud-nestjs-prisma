import { IsNumber, IsString, Max, Min, MinLength } from 'class-validator';

export class CreateProductDto {

  @IsString()
  @MinLength(3)
  name: string;

  @IsNumber()
  @Min(0)
  @Max(10000)
  price: number;
}
