import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { ResponsibleModule } from './responsible/responsible.module';
import { ResumeModule } from './resume/resume.module';
import { StudentModule } from './student/student.module';
import { SubjectModule } from './subject/subject.module';
import { TeacherModule } from './teacher/teacher.module';
import { TeamModule } from './team/team.module';

@Module({
  imports: [
    AdminModule,
    ResponsibleModule,
    ResumeModule,
    StudentModule,
    SubjectModule,
    TeacherModule,
    TeamModule,
  ],
})
export class ApiModule {}
