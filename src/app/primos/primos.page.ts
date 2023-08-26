import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-primos',
  templateUrl: './primos.page.html',
  styleUrls: ['./primos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class PrimosPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onClickIrHome():void {
    this.router.navigateByUrl('home');
  }

  n!:number;

  primos(){

    for (let i = 1; i <= this.n; i++) {
      let flag = 0;
  
      for (let j = 2; j < i; j++) {
          if (i % j == 0) {
              flag = 1;
              break;
          }
      }
  
      if (i >= 1 && flag == 0) {
          alert(i);
      }
  }
  }
}
