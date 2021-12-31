import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeezerService {

  private httpOptions ={
    headers : new HttpHeaders({
      'Accept' : 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':' *'
    })
  };

  constructor(private httpClient : HttpClient) {
   }

  getAllArtists(searchQuery: string):Observable<any>{
    let artistsUrl = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=' + searchQuery;
    //let artistUrl = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/302127';
    console.log(searchQuery);
    return this.httpClient.get<any>(artistsUrl, this.httpOptions);
  }

  getAllAlbumsfromArtist(artistId :number): Observable<any>{
    let albumsUrl = 'https://cors-anywhere.herokuapp.com/http://api.deezer.com/artist/'+artistId+'/albums';
    return this.httpClient.get<any>(albumsUrl, this.httpOptions);
  }

  getArtist(artistId : number): Observable<any>{
    let artistUrl = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/'+artistId;
    return this.httpClient.get<any>(artistUrl, this.httpOptions);
  }

  getAlbum(albumId : number): Observable<any>{
    let albumUrl = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/'+albumId;
    return this.httpClient.get<any>(albumUrl, this.httpOptions);
  }

  getAllTracks(albumId: number) : Observable<any>{
    let tracksUrl = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/'+albumId+'/tracks';
    return this.httpClient.get<any>(tracksUrl, this.httpOptions);
  }
  
}
