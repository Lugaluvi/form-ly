import { AdminRoutes } from "./AdminRoutes";
import { ResponsibleRoutes } from "./ResponsibleRoutes";
import { ResumeRoutes } from "./ResumeRoutes";
import { StudentRoutes } from "./StudentRoutes";
import { SubjectRoutes } from "./SubjectRoutes";
import { TeacherRoutes } from "./TeacherRoutes";
import { TeamRoutes } from "./TeamRoutes";
import { UserRoutes } from "./UserRoutes";

export const Routes = [
  ...AdminRoutes,
  ...ResponsibleRoutes,
  ...ResumeRoutes,
  ...StudentRoutes,
  ...SubjectRoutes,
  ...TeacherRoutes,
  ...TeamRoutes,
  ...UserRoutes,
];
