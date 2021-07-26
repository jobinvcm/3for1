import { Controller, Post, Body, Res, Get, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { SaleService } from './sale.service';

@Controller('sale')
export class SaleController {
  constructor(private salesService: SaleService) {}

  @Post('add')
  addPurchases(
    @Body()
    itemDetails: {
      name: string;
      rate: number;
      quantity: number;
      total: number;
      tax: number;
      person: string;
      customerName?: string;
    },
    @Res() res: Response,
  ) {
    const { name, rate, quantity, total, tax, person, customerName } =
      itemDetails;
    if (name.length && rate && quantity && total && tax && person.length) {
      this.salesService.add(
        name,
        rate,
        quantity,
        total,
        tax,
        person,
        customerName,
      );
      res.status(HttpStatus.CREATED).send();
    } else {
      res.status(HttpStatus.NOT_ACCEPTABLE).send();
    }
  }

  @Get('all')
  getPurchases(): any {
    return this.salesService.getAll();
  }
}
