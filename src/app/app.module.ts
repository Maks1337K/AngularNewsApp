import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// for network
import { HttpClientModule } from '@angular/common/http';
import { NewsService } from './news.service';

// for ng material
import { MatButtonModule, MatMenuModule, MatCardModule, MatToolbarModule } from '@angular/material';
import { MatIconModule, MatSidenavModule, MatListModule } from '@angular/material'
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [HttpClient, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
