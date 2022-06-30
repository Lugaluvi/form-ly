import { ResumeController } from "../controller/ResumeController";

export const ResumeRoutes = [
  {
    method: "get",
    route: "/resume",
    controller: ResumeController,
    action: "all",
  },
  {
    method: "get",
    route: "/resume/:id",
    controller: ResumeController,
    action: "one",
  },
  {
    method: "post",
    route: "/resume",
    controller: ResumeController,
    action: "save",
  },
  // TODO: add put method to update
  {
    method: "delete",
    route: "/resume/:id",
    controller: ResumeController,
    action: "remove",
  },
];
