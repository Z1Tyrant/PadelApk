import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate(1000)
      ]),
      transition(':leave',
        animate(1000, style({ opacity: 0 })))
    ])
  ]
})
export class NotFoundPage implements OnInit {

  animState = 'in';

  toggleAnimation() {
    this.animState = this.animState === 'in' ? 'out' : 'in';
  }

  constructor() { }

  ngOnInit() {
    // Llamar a la función para activar la animación después de cierto tiempo, por ejemplo
    setTimeout(() => {
      this.toggleAnimation();
    }, 2000);
  }

}
