import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { VariablesGlobales } from '../globales';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  public albumId : any;

  constructor(private activatedRoute : ActivatedRoute,private globals : VariablesGlobales) { 
    this.globals.enabled = false;
  }

  ngOnInit(): void {
    
    this.activatedRoute.paramMap.subscribe((paramMap:ParamMap)=>{
      this.albumId = paramMap.get('id');
    });
  }


}
