import {
    IsNotEmpty,
    IsOptional,
    IsString,
  } from 'class-validator';
  
  export class EditWalletDto {
    @IsString()
    @IsOptional()
    address?: string;
  }