import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule],
})
export class HomePage {
  constructor(private router:Router) {}

  onClickIrFibonacci():void {
    this.router.navigateByUrl('fibonacci');
  }

  onClickIrFactorial():void {
    this.router.navigateByUrl('factorial');
  }

  onClickIrPrimos():void {
    this.router.navigateByUrl('primos');
  }

  onClickIrImpares():void {
    this.router.navigateByUrl('im-pares');
  }

  onClickIrConjuntos():void {
    this.router.navigateByUrl('conjuntos');
  }
}
