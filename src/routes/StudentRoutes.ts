import { StudentController } from "../controller/StudentController";

export const StudentRoutes = [
  {
    method: "get",
    route: "/student",
    controller: StudentController,
    action: "all",
  },
  {
    method: "get",
    route: "/student/:id",
    controller: StudentController,
    action: "one",
  },
  {
    method: "post",
    route: "/student",
    controller: StudentController,
    action: "save",
  },
  // TODO: add put method to update
  {
    method: "delete",
    route: "/student/:id",
    controller: StudentController,
    action: "remove",
  },
];
