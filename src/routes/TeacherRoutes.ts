import { TeacherController } from "../controller/TeacherController";

export const TeacherRoutes = [
  {
    method: "get",
    route: "/teacher",
    controller: TeacherController,
    action: "all",
  },
  {
    method: "get",
    route: "/teacher/:id",
    controller: TeacherController,
    action: "one",
  },
  {
    method: "post",
    route: "/teacher",
    controller: TeacherController,
    action: "save",
  },
  // TODO: add put method to update
  {
    method: "delete",
    route: "/teacher/:id",
    controller: TeacherController,
    action: "remove",
  },
];
