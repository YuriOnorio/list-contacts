import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-pernalonga',
  templateUrl: './pernalonga.page.html',
  styleUrls: ['./pernalonga.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PernalongaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
