import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { VariablesGlobales } from 'src/app/globales';
import { DeezerService } from 'src/app/services/deezer.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  
  idArtist = -1;
  artistImgSrc ="";
  albums : any = [];
  name = "";
  artist : any ;
  artistId : any;

  constructor( private activatedRoute : ActivatedRoute, private deezerService : DeezerService, private variablesGlobales : VariablesGlobales) { 
    this.ngOnInit();
  }

  ngOnInit(): void { 
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap)=>{
      this.artistId = paramMap.get('id');
    })
    this.albums = this.getAllAlbums();
    this.artist = this.getArtistInfos();
    this.name = this.variablesGlobales.artistName;
    
  }

  getArtistInfos(){
    this.deezerService.getArtist(this.variablesGlobales.currentArtist).subscribe((data)=>{
      this.artist = data;
      console.log(this.artist.name);
      })
  }

  getAllAlbums(){
    this.deezerService.getAllAlbumsfromArtist(this.variablesGlobales.currentArtist).subscribe((data)=>{
    this.albums=data.data;
    this.idArtist = this.variablesGlobales.currentArtist;
    this.artistImgSrc= this.variablesGlobales.currentArtistImg;
    console.log(this.albums);
    })
  }
}
