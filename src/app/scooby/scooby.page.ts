import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-scooby',
  templateUrl: './scooby.page.html',
  styleUrls: ['./scooby.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ScoobyPage {

  constructor(private router: Router) { }

  voltar(){
    this.router.navigate(['/home'])
  }
}
