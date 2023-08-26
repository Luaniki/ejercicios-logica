import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.page.html',
  styleUrls: ['./fibonacci.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class FibonacciPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onClickIrHome():void {
    this.router.navigateByUrl('home');
  }

  n!: number;
  fibSer: number[] = [];

  fib()
    {
        this.fibSer = [];

        let n1 = 0;
        let n2 = 1;
        for (let i = 0; i <= this.n; i++)
        {
            this.fibSer.push(n1);
            const sig = n1 + n2;
            n1 = n2;
            n2 = sig;
        }
    }

}

