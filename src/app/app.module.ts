import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './container/main/main.component';
import { HeroComponent } from './container/hero/hero.component';
import { AboutComponent } from './container/about/about.component';
import { ServicesComponent } from './container/services/services.component';
import { PortfolioComponent } from './container/portfolio/portfolio.component';
import { ContactComponent } from './container/contact/contact.component';
import { AboutBoxComponent } from './container/about/about-box/about-box.component';
import { RestService } from './services/rest.service';

import { HttpClientModule } from '@angular/common/http';
import { PModalComponent } from './container/portfolio/p-modal/p-modal.component';
import { HeroVideoComponent } from './container/hero-video/hero-video.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    AboutBoxComponent,
    PModalComponent,
    HeroVideoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,HttpClientModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
