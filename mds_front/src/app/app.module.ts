import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RequestsComponent } from './requests/requests.component';
import { ProfileComponent } from './profile/profile.component';
import { JobsComponent } from './jobs/jobs.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule} from '@angular/material/icon'; /* pentru icons */
import { provideHttpClient, withFetch } from '@angular/common/http';
import { HomePageComponent } from './homepage/homepage.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    RequestsComponent,
    LoginComponent,
    JobsComponent,
    RequestsComponent,
    ProfileComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    HeaderComponent,
    SignUpComponent,
    AppRoutingModule,
    FormsModule
    AppRoutingModule,
    MatIconModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
