import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patinhomaloka',
  templateUrl: './patinhomaloka.page.html',
  styleUrls: ['./patinhomaloka.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PatinhomalokaPage {

  constructor(private router: Router) { }

  voltar2() {
    this.router.navigate(['/home'])
  }

}
