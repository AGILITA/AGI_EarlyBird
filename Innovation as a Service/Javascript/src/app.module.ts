import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BusinessPartnerController } from "./business-partner.controller";
import { UITest } from "./ui-test";
import { join } from "path";
import { ServeStaticModule } from "@nestjs/serve-static";

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "client"),
      exclude: ["/business-partners*", "/test"],
    }),
  ],
  controllers: [AppController, BusinessPartnerController, UITest],
  providers: [AppService],
})
export class AppModule {}
