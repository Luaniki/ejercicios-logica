import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.page.html',
  styleUrls: ['./factorial.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class FactorialPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onClickIrHome():void {
    this.router.navigateByUrl('home');
  }

  n!: number;
  facto!: number;

  fact(){

    if(this.n < 0){
      alert('¡Error! Los números negativos no tienen factoriales')
    } else if (this.n === 0){
      alert('El factorial de 0 es 1')
    } else {
      let facto = 1;
      for (let i = 1; i <= this.n; i++){
        facto *= i;
      }
      alert("El factorial de " + this.n + " es: " + facto)
    }

  }

}
