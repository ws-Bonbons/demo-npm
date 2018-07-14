import { Bonbons, ENV_MODE, DEPLOY_MODE } from "@bonbons/core";
import { APIController } from "./src/controller/api";
import { IndexController } from "./src/controller";
import { AppService } from "./src/service/app";
import { ScopeContract, ScopeService } from "./src/service/scope";

Bonbons.New
  .controller(IndexController)
  .controller(APIController)
  .singleton(AppService)
  .scoped(ScopeContract, ScopeService)
  .option(ENV_MODE, { mode: "development" })
  .option(DEPLOY_MODE, { port: 3200 })
  .start();
