import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonInput, IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.page.html',
  styleUrls: ['./fibonacci.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class FibonacciPage implements OnInit {

  public arr: number[] = [];

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onClickIrHome():void {
    this.router.navigateByUrl('home');
  }

  calcularSerieFibonacci(n:number) {
    let a = 0;
    let b = 1;
    this.arr = [a, b];

    for (let i = 1; i <= n; i++) {

    }

  }

}

