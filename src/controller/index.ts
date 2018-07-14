import { BaseController, Controller, Method, Route } from "@bonbons/core";

@Controller("index")
export class IndexController extends BaseController {

  @Method("GET")
  @Route("/")
  public Index() {
    return "Hello world!";
  }

}
