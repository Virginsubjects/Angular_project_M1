import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';



const routes: Routes = [ 
    { path : 'home', component : HomeComponent, pathMatch : 'full'},
    { path: 'artists/:id', component: ArtistComponent, pathMatch : 'full'},
    {path: 'albums/:id', component: AlbumComponent, pathMatch : 'full'},
    { path : '', redirectTo:'home', pathMatch : 'full'},
    { path: '**', component: NotFoundComponent },  // Wildcard route for a 404 page
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
