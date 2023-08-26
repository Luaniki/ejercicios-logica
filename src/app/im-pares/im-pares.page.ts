import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-im-pares',
  templateUrl: './im-pares.page.html',
  styleUrls: ['./im-pares.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ImParesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
