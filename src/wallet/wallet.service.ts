import {
    ForbiddenException,
    Injectable,
  } from '@nestjs/common';
  import { PrismaService } from '../prisma/prisma.service';
  import {
    CreateWalletDto,
    EditWalletDto,
  } from './dto';
  
  @Injectable()
  export class WalletService {
    constructor(private prisma: PrismaService) {}
  
    getWallets(userId: number) {
      return this.prisma.wallet.findMany({
        where: {
          userId,
        },
      });
    }
  
    getWalletById(
      userId: number,
      walletId: number,
    ) {
      return this.prisma.wallet.findFirst({
        where: {
          id: walletId,
          userId,
        },
      });
    }
  
    async createWallet(
      userId: number,
      dto: CreateWalletDto,
    ) {
      const wallet =
        await this.prisma.wallet.create({
          data: {
            userId,
            ...dto,
          },
        });
  
      return wallet;
    }
  
    async editWalletById(
      userId: number,
      walletId: number,
      dto: EditWalletDto,
    ) {
      // get the wallet by id
      const wallet =
        await this.prisma.wallet.findUnique({
          where: {
            id: walletId,
          },
        });
  
      // check if user owns the wallet
      if (!wallet || wallet.userId !== userId)
        throw new ForbiddenException(
          'Access to resources denied',
        );
  
      return this.prisma.wallet.update({
        where: {
          id: walletId,
        },
        data: {
          ...dto,
        },
      });
    }
  
    async deleteWalletById(
      userId: number,
      walletId: number,
    ) {
      const wallet =
        await this.prisma.wallet.findUnique({
          where: {
            id: walletId,
          },
        });
  
      // check if user owns the wallet
      if (!wallet || wallet.userId !== userId)
        throw new ForbiddenException(
          'Access to resources denied',
        );
  
      await this.prisma.wallet.delete({
        where: {
          id: walletId,
        },
      });
    }
  }