import { Injectable } from '@nestjs/common';

@Injectable()
export class DealsService {
  private deals = [];

  getAll() {
    return this.deals;
  }
}
