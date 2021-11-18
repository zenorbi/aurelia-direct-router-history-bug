import { routes } from "aurelia-direct-router";
import { HomePage } from "./home-page";
import { OtherPage } from "./other-page";

@routes([
  {
    path: "",
    component: HomePage
  },
  {
    path: "other",
    component: OtherPage
  }
])
export class MyApp {
  public message = 'Hello World!';
}
