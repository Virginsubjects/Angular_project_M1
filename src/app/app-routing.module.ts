import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './home/album/album.component';
import { ArtistComponent } from './home/artist/artist.component';

const routes: Routes = [ 
    { path: 'artist', component: ArtistComponent },
    {path: 'artist/:id', component: AlbumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
