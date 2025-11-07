import { Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./inventory-main/inventory-main"),
    title: "TA9 Inventory | Main",
  },
];

export default routes;
