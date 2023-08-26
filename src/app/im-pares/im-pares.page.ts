import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-im-pares',
  templateUrl: './im-pares.page.html',
  styleUrls: ['./im-pares.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class ImParesPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onClickIrHome():void {
    this.router.navigateByUrl('home');
  }

}
