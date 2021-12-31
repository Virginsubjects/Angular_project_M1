import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DeezerService } from '../services/deezer.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  public albumId : any;
  public album :any;

  constructor(private activatedRoute : ActivatedRoute, private deezerService : DeezerService) { }

  ngOnInit(): void {
    //get albumId from the browser URL
    this.activatedRoute.paramMap.subscribe((paramMap:ParamMap)=>{
      this.albumId = paramMap.get('id');
    });

    //get an album from the service
    this.deezerService.getAlbum(this.albumId).subscribe((data)=>{
      this.album = data;
    })
  }


}