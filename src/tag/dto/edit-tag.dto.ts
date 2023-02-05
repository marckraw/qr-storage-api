import { IsOptional, IsString } from 'class-validator';

export class EditTagDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;
}
