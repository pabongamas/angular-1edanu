import { Component } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  albums: Album[] = [
    {
      nombre: 'Black album',
      anio: '1991-01-01',
      artista: 'Metallica',
      image:
        'https://www.rockculture.es/wp-content/uploads/2021/08/71R6r39nBKL._SL1425_.jpg',
      genero: 'metal',
      agregado: true,
    },
    {
      nombre: 'Rust in peace',
      anio: '1991-01-01',
      artista: 'Megadeth',
      image:
        'https://megadeth.com/wp-content/uploads/2022/09/RustInPeace-1.jpg',
      genero: 'metal',
      agregado: true,
    },
  ];
  deleteAlbum(position) {
    this.albums.splice(position, 1);
  }
  editAlbum(position) {
    this.albums[position].agregado = false;
  }
  addAlbum() {
    let obj = {
      nombre: '',
      anio: '',
      artista: '',
      image: '',
      genero: '',
      agregado: false,
    };
    this.albums.push(obj);
  }
  addAlbumButton(position) {
    this.albums[position].agregado = true;
  }
}
