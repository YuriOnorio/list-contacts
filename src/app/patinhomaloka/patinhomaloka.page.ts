import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-patinhomaloka',
  templateUrl: './patinhomaloka.page.html',
  styleUrls: ['./patinhomaloka.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PatinhomalokaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
