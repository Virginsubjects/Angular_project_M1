import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { DeezerService } from './services/deezer.service';
import {HttpClientModule} from "@angular/common/http";
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { ArtistService } from './services/artist.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
   ArtistComponent,
   AlbumComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [DeezerService, ArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
