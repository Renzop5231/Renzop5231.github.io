// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style, query, animateChild, group } from '@angular/animations';


export const slideExpandAnimation =
    trigger('slideExpandAnimation', [

      transition(':enter', [

        query('.imgCard', [
          style({
            opacity:0
          })
        ]),

        query(':self', [
          style({
            left: '-100%',
            transform: 'scaleY(0.05)'
          }),
          animate('1s ease-in-out', style({
            left: '0%'
          }))
        ]),

        group([
          query('.imgCard', [
            style({
              opacity: 0
            }),
            animate('1s ease-in-out', style({
              opacity: 1
            }))
          ]),
          query(':self', [
            style({
              transform: 'scaleY(0.05)'
            }),
            animate('1s ease-in-out', style({
              transform: 'scaleY(1)'
            }))
          ])
        ])
      ]),

      // transition(':leave', [
      //   animate('2s ease-in-out', style({
      //     right:'-1000%'
      //   }))
      // ])
]);
