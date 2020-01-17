import { Injectable } from "@angular/core";
import * as data from "../../data/buyer.json";
import * as order from "../../data/order.json";
import * as item from "../../data/order_item.json";

@Injectable({
  providedIn: "root"
})
export class GeneralService {
  constructor() {}

  getBuyerInfo() {
    return { ...data.data };
  }

  getOrder() {
    return { ...order.data };
  }

  getOrderItem() {
    return item.data;
  }
}
