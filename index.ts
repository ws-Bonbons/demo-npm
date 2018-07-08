import { Bonbons, BonbonsScope as bonbons } from "@bonbons/core";
import { APIController } from "./src/controller/api";
import { IndexController } from "./src/controller";
import { AppService } from "./src/service/app";
import { ScopeContract, ScopeService } from "./src/service/scope";

Bonbons.New
  .controller(IndexController)
  .controller(APIController)
  .singleton(AppService)
  .scoped(ScopeContract, ScopeService)
  .option(bonbons.ENV_MODE, { mode: "development" })
  .option(bonbons.DEPLOY_MODE, { port: 3200 })
  .start();
