import { ResponsibleController } from "../controller/ResponsibleController";

export const ResponsibleRoutes = [
  {
    method: "get",
    route: "/responsible",
    controller: ResponsibleController,
    action: "all",
  },
  {
    method: "get",
    route: "/responsible/:id",
    controller: ResponsibleController,
    action: "one",
  },
  {
    method: "post",
    route: "/responsible",
    controller: ResponsibleController,
    action: "save",
  },
  // TODO: add put method to update
  {
    method: "delete",
    route: "/responsible/:id",
    controller: ResponsibleController,
    action: "remove",
  },
];
