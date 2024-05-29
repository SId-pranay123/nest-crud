import {
    IsNotEmpty,
    IsOptional,
    IsString,
  } from 'class-validator';
  
  export class CreateWalletDto {
    @IsString()
    @IsOptional()
    address?: string;
  }