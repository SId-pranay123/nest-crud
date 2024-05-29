import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    Req,
    UseGuards,
  } from '@nestjs/common';
  import {AuthGuard} from '@nestjs/passport'
  import { GetUser } from '../auth/decorator';
  import { WalletService } from './wallet.service';
  import {
    CreateWalletDto,
    EditWalletDto,
  } from './dto';
  
  @UseGuards(AuthGuard('jwt'))
  @Controller('wallets')
  export class WalletController {
    constructor(
      private walletService: WalletService,
    ) {}
  
    @Get()
    getWallets(@GetUser('id') userId: number) {
        return this.walletService.getWallets(
            userId,
        );
    }
    
    @Get(':id')
    getWalletById(
        @GetUser('id') userId: number,
        @Param('id', ParseIntPipe) walletId: number,
    ) {
        return this.walletService.getWalletById(
            userId,
            walletId,
        );
    }
    
    @Post()
    createWallet(
        @GetUser('id') userId: number,
        @Body() dto: CreateWalletDto,
    ) {
        return this.walletService.createWallet(
            userId,
            dto,
        );
    }
    
    @Patch(':id')
    editWalletkById(
        @GetUser('id') userId: number,
        @Param('id', ParseIntPipe) walletId: number,
        @Body() dto: EditWalletDto,
    ) {
        return this.walletService.editWalletById(
            userId,
            walletId,
            dto,
        );
    }
    
    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    deleteWalletById(
        @GetUser('id') userId: number,
        @Param('id', ParseIntPipe) walletId: number,
    ) {
        return this.walletService.deleteWalletById(
            userId,
            walletId,
        );
    }
}