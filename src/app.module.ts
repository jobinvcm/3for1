import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PurchaseModule } from './purchase/purchase.module';
import { SaleModule } from './sale/sale.module';
import { PurchaseProviders } from './purchase/Purchase.providers';
import { DatabaseModule } from './database.module';
import { SaleService } from './sale/sale.service';
import { saleProviders } from './sale/sale.providers';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    PurchaseModule,
    DatabaseModule,
    SaleModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, ...PurchaseProviders, SaleService, ...saleProviders],
})
export class AppModule {}
