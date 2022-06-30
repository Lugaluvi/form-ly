import { AdminRoutes } from "./AdminRoutes";
import { ResponsibleRoutes } from "./ResponsibleRoutes";
import { ResumeRoutes } from "./ResumeRoutes";
import { StudentRoutes } from "./StudentRoutes";
import { SubjectRoutes } from "./SubjectRoutes";
import { TeacherRoutes } from "./TeacherRoutes";
import { TeamRoutes } from "./TeamRoutes";

export const Routes = [
  ...AdminRoutes,
  ...ResponsibleRoutes,
  ...ResumeRoutes,
  ...StudentRoutes,
  ...SubjectRoutes,
  ...TeacherRoutes,
  ...TeamRoutes,
];
