import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-interpolacion',//Hacer referencia al componente
  standalone: true, // si requerimos imports aqui va
  imports: [
   
  
  ],
  templateUrl: './interpolacion.component.html', //html del componente
  styleUrl: './interpolacion.component.css'//hoja de estilo del componente
})
//JavaScrip orientada a objetos .ts sxtypescrip
export class InterpolacionComponent {
mensaje:string = "Hola mundo de las interpretaciones o sustitucion de las variables"
nombre="Brandon"
edad:number=22
correo:string="brandon@gmail.com"
}
 