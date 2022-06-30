import { SubjectController } from "../controller/SubjectController";

export const SubjectRoutes = [
  {
    method: "get",
    route: "/subject",
    controller: SubjectController,
    action: "all",
  },
  {
    method: "get",
    route: "/subject/:id",
    controller: SubjectController,
    action: "one",
  },
  {
    method: "post",
    route: "/subject",
    controller: SubjectController,
    action: "save",
  },
  // TODO: add put method to update
  {
    method: "delete",
    route: "/subject/:id",
    controller: SubjectController,
    action: "remove",
  },
];
