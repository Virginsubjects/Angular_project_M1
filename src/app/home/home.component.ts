
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
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
  public enabled = this.variablesGlobales.enabled; 

  constructor(private deezerService : DeezerService, private router: Router,
              private variablesGlobales : VariablesGlobales) {
    
   
        
  }

  ngOnInit(): void {
    this.router.events.subscribe(
      (event: any) => { 
         if ( event instanceof NavigationStart ) {
          this.variablesGlobales.enabled  = true;     
         }
       });
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
      this.enabled = this.variablesGlobales.enabled = false;
      
  }
}
