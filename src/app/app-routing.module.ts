import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShortCodeComponent } from './components/short-code/short-code.component';
import { HourComponent } from './components/hour/hour.component';
import { DancerComponent } from './components/dancer/dancer.component';
import { StudentComponent } from './components/student/student.component';

const routes: Routes = [
  { path: 'banner', component: BannerComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'short-code', component: ShortCodeComponent},
  { path: 'hour', component: HourComponent},
  { path: 'dancer', component: DancerComponent},
  { path: 'student', component: StudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
