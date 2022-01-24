import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DeezerService } from 'src/app/services/deezer.service';
import { ArtistService } from '../services/artist.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  albums : any = [];
  artist : any ;
  artistId : any;

  constructor( private activatedRoute : ActivatedRoute, private deezerService : DeezerService,
                artistService : ArtistService) { 
    this.ngOnInit();
  }

  ngOnInit(): void { 
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap)=>{
      this.artistId = paramMap.get('id');
    })
    this.albums = this.getAllAlbums();
    this.artist = this.getArtistInfos();  
  }

  getArtistInfos(){
    this.deezerService.getArtist(this.artistId).subscribe((data)=>{
      this.artist = data;
         })
  }

  getAllAlbums(){
    this.deezerService.getAllAlbumsfromArtist(this.artistId).subscribe((data)=>{
    this.albums=data.data;
    })
  }
}
