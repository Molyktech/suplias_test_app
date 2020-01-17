import { Component, OnInit } from "@angular/core";
import * as data from "../../../data/buyer.json";
import { GeneralService } from "src/app/services/general.service.js";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  buyerData: any = [];
  orders: any = [];
  orderItems: any = [];
  constructor(private generalService: GeneralService) {}

  ngOnInit() {
    this.getBuyerInfo();
    this.getOrder();
    this.getOrderItem();
  }

  async getBuyerInfo() {
    const res = await this.generalService.getBuyerInfo();
    this.buyerData = res;
  }

  async getOrder() {
    const res = await this.generalService.getOrder();

    this.orders = res["data"];
  }

  async getOrderItem() {
    const res = await this.generalService.getOrderItem();

    console.log(res);
    this.orderItems = res;
  }

  getTotalAmount(info) {
    return info.map(t => t["amount"]).reduce((sum, v) => (sum += v), 0);
  }
}
