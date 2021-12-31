
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


  constructor(private deezerService : DeezerService) {}

  ngOnInit(): void {
  }

  searchArtist(){
    this.deezerService.getAllArtists(this.searchQuery).subscribe((data)=>{
    this.artists=data.data ;   
    })
  }

}
