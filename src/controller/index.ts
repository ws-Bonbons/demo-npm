import { BaseController } from "@bonbons/controllers";
import { Controller, Route, Method } from "@bonbons/decorators";

@Controller("index")
export class IndexController extends BaseController {

  @Method("GET")
  @Route("/")
  public Index() {
    return "Hello world!";
  }

}
