import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import {  RouterModule } from '@angular/router';
import { NewStateComponent } from './modules/new-state/new-state.component';
import { TravelComponent } from './modules/travel/travel.component';
import { MapComponent } from './modules/travel/map/map.component';
import { FormsModule } from '@angular/forms';
import { AskQuestionsComponent } from './modules/ask-questions/ask-questions/ask-questions.component';
import { AboutComponent } from './modules/about/about/about.component';
import { StoryComponent } from './story/story.component';
import { StateGeneratorService } from './services/state-generator.service';
import { RobotFoundComponent } from './modules/robot-found/robot-found.component';
import { CanActivateRoute } from './route-guard';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NewStateComponent,
    TravelComponent,
    MapComponent,
    AskQuestionsComponent,
    AboutComponent,
    StoryComponent,
    RobotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path : '', component : WelcomeComponent},
      {path : 'new-state', component : NewStateComponent, canActivate: [CanActivateRoute]},
      {path : 'travel', component: TravelComponent , canActivate: [CanActivateRoute]},
      {path : 'ask-questions', component: AskQuestionsComponent,  canActivate: [CanActivateRoute]},
      {path : 'about', component: AboutComponent },
      {path : 'story', component: StoryComponent, canActivate: [CanActivateRoute]}
    ])
  ],
  providers: [StateGeneratorService, CanActivateRoute],
  bootstrap: [AppComponent]
})
export class AppModule { }


