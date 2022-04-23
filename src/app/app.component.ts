import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //añadir

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Ejemplo http';
  url: string = 'https://jsonplaceholder.typicode.com/users';
  error: string;
  seleccionado:string;
  uno;
  datos;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>(this.url).subscribe((data) => {
      this.datos = data;
    });
  }
  busca() {
    this.http.get<any>(`${this.url}/${this.seleccionado}`).subscribe((data) => this.uno = data);

    //lo siguiente genera y captura error
    this.http.get<any>(`hh${this.url}/${this.seleccionado}`).subscribe({
      next: (data) => console.log(data),
      error: (err: Error) => console.error('Observer got an error: ', err),
      complete: ()=>console.info('fin correcto')
    });
   

  }
}
