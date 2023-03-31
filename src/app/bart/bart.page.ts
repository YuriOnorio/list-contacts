import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bart',
  templateUrl: './bart.page.html',
  styleUrls: ['./bart.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class BartPage{

  constructor(private router: Router) { }

  voltar() {
    this.router.navigate(['/home'])
  }
}
