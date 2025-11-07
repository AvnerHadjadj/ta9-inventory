import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: "", redirectTo: "/inventory", pathMatch: "full" },
    { path: "inventory", loadChildren: () => import("./pages/inventory/inventory.routes") },
    {
        path: "**",
        loadComponent: () => import("./core/not-found/not-found.component"),
        title: "Not Found",
    },
];