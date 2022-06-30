import { AdminController } from "../controller/AdminController";

export const AdminRoutes = [
  {
    method: "get",
    route: "/admin",
    controller: AdminController,
    action: "all",
  },
  {
    method: "get",
    route: "/admin/:id",
    controller: AdminController,
    action: "one",
  },
  {
    method: "post",
    route: "/admin",
    controller: AdminController,
    action: "save",
  },
  // TODO: add put method to update
  {
    method: "delete",
    route: "/admin/:id",
    controller: AdminController,
    action: "remove",
  },
];
