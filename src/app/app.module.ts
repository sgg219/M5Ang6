import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule} from '@angular/material';
import { MatGridListModule} from '@angular/material/grid-list'
import {MatExpansionModule} from '@angular/material/expansion';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule} from '@angular/flex-layout';


import { NotFoundComponent } from './components/not-found/not-found.component';
import { UiModule } from './ui/ui.module';
import { CloudConsultingComponent } from './components/cloud-consulting/cloud-consulting.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { OtherServicesComponent } from './components/other-services/other-services.component';
import { ContactformComponent } from './components/contact-us/contactform/contactform.component';




const routes: Routes = [
  { path: 'cloud-consulting', component: CloudConsultingComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: '', component: HomeComponent},
  { path: 'other-services', component: OtherServicesComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: '**', component: NotFoundComponent},
  
];


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    CloudConsultingComponent,
    ContactUsComponent,
    AboutUsComponent,
    HomeComponent,
    OtherServicesComponent,
    ContactformComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    UiModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    MatExpansionModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
