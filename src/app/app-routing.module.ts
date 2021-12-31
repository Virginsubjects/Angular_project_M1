import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [ 
    { path : '', component : HomeComponent, pathMatch : 'full'},
    { path: 'artists/:id', component: ArtistComponent, pathMatch : 'full'},
    {path: 'albums/:id', component: AlbumComponent, pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
