import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-picapau',
  templateUrl: './picapau.page.html',
  styleUrls: ['./picapau.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PicapauPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
