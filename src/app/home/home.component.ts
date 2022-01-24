
import { Component, OnInit } from '@angular/core';
import { DeezerService } from '../services/deezer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public searchQuery:string="";
  public artists :any= [];
  public artists2 :any= [];
  public queryTyped = false; 


  constructor(private deezerService : DeezerService) {}

  ngOnInit(): void {
    this.landingPageArtist();
  }

  searchArtist(){
    this.deezerService.getAllArtists(this.searchQuery).subscribe((data)=>{
    this.artists=data.data ; 
    this.queryTyped = true;  
    })
  }

  landingPageArtist(){
    this.deezerService.getAllArtists("buena vista social club").subscribe((data)=>{
      this.artists2[0]=data.data ;   
    
      })
      this.deezerService.getAllArtists("classic music").subscribe((data)=>{
        this.artists2[1]=data.data ;   
      
        })
        this.deezerService.getAllArtists("sound for sleep").subscribe((data)=>{
          this.artists2[2]=data.data ;   
        
          })

    }
  }
