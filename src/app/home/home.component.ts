import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { VariablesGlobales } from '../globales';

import { DeezerService } from '../services/deezer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public searchQuery:string="";
  public artists :any= [];  
  public enabled = true; 

  constructor(private deezerService : DeezerService, private router: Router,
              private variablesGlobales : VariablesGlobales) {
    router.events.subscribe(
      (event) => {
        if ( event instanceof NavigationStart ) {
         this.enabled  = true;     
        }});
  }

  ngOnInit(): void {
  }

  searchArtist(){
    this.deezerService.getAllArtists(this.searchQuery).subscribe((data)=>{
    this.artists=data.data ;
      
    })
  }

  onClick(index : number){
      
      this.variablesGlobales.currentArtist = this.artists[index].artist.id;
      this.variablesGlobales.currentArtistImg = this.artists[index].artist.picture ;
      this.variablesGlobales.artistName = this.artists[index].artist.name;
      this.enabled = false;
  }

  

}
