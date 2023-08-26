import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-conjuntos',
  templateUrl: './conjuntos.page.html',
  styleUrls: ['./conjuntos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class ConjuntosPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onClickIrHome():void {
    this.router.navigateByUrl('home');
  }

  nuevoArray: number[] = [];
  nuevoArray2: number[] = [];
  tamanioArray!: number;

  crearArrayConValores() {
  }

  unionArray(nuevoArray: string | any[], nuevoArray2: any){

    let arr = nuevoArray.concat(nuevoArray2);
    let uniqueArr = [];

    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    alert(uniqueArr);
}

interseccionArray(nuevoArray: string | any[], nuevoArray2: any) {

  const setA = new Set(nuevoArray);
  const setB = new Set(nuevoArray2);

  let interseccionFinal = [];

  for (let i of setB) {
  
      if (setA.has(i)) {
          interseccionFinal.push(i);
      }
      
  }
  
  alert(interseccionFinal);

}

}
