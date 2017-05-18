import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartModule } from 'angular2-chartjs'

import { AppComponent } from './app.component';
import { HeaderRowComponent } from './header-row/header-row.component';
import { ExctractComponent } from './exctract/exctract.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TalksComponent } from './talks/talks.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { OrganizationsComponent } from './organizations/organizations.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderRowComponent,
    ExctractComponent,
    GalleryComponent,
    TalksComponent,
    SkillsComponent,
    EducationComponent,
    OrganizationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
