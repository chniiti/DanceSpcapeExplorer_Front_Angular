import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { StudentComponent } from './components/student/student.component';
import { DancerComponent } from './components/dancer/dancer.component';
import { HourComponent } from './components/hour/hour.component';
import { ShortCodeComponent } from './components/short-code/short-code.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { ContactComponent } from './components/contact/contact.component';
import { CopyRightComponent } from './components/copy-right/copy-right.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    BannerComponent,
    StudentComponent,
    DancerComponent,
    HourComponent,
    ShortCodeComponent,
    TestimonialComponent,
    ContactComponent,
    CopyRightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
