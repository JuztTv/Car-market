import {
  trigger,
  transition,
  style,
  animate,
  query,
  animateChild,
  group,
} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* <=> *', [
    group([
      query(
        ':enter',
        [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
        { optional: true }
      ),
      query(
        ':leave',
        [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
        { optional: true }
      ),
    ]),
    query('@*', animateChild(), { optional: true }),
  ]),
]);
