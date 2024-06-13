import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RequestsComponent } from './requests/requests.component';
import { ProfileComponent } from './profile/profile.component';
import { JobsComponent } from './jobs/jobs.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import{MatIconModule} from '@angular/material/icon'; /* pentru icons */




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JobsComponent,
    RequestsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
