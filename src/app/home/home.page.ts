import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})


export class HomePage {

  constructor( private router: Router ) {}

  navegar() {
    this.router.navigate(['/patinhomaloka'])
  }

  navegar2() {
    this.router.navigate(['/pernalonga'])
  }

  navegar3() {
    this.router.navigate(['/bart'])
  }

  navegar4() {
    this.router.navigate(['/picapau'])
  }

  navegar5() {
    this.router.navigate(['/scooby'])
  }

}
