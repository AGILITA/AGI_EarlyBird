import { Controller, Get, HttpException, Render } from "@nestjs/common";
import { resourceLimits } from "node:worker_threads";
import { AppService } from "./app.service";

@Controller()
export class UITest {
  constructor(private readonly appService: AppService) {}
  @Get("test")
  getTest() {
    return getTest();
  }
  @Get("ui")
  @Render("index")
  render() {
    const message = this.appService.getHello();
    return { message };
  }
}

function getTest(): String {
  return "test Hallo";
}
