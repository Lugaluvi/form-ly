import { TeamController } from "../controller/TeamController";

export const TeamRoutes = [
  {
    method: "get",
    route: "/team",
    controller: TeamController,
    action: "all",
  },
  {
    method: "get",
    route: "/team/:id",
    controller: TeamController,
    action: "one",
  },
  {
    method: "post",
    route: "/team",
    controller: TeamController,
    action: "save",
  },
  // TODO: add put method to update
  {
    method: "delete",
    route: "/team/:id",
    controller: TeamController,
    action: "remove",
  },
];
