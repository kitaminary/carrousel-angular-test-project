import {
  state,
  style,
  animate,
  transition,
  trigger,
} from '@angular/animations';


export const Animations =
  trigger('carouselAnimations', [
    state('prev', style({
      transform: '{{translate}}({{prevLength}}px)',
      transition: '0.3s {{animationTypes}}'
    }),
      { params: { prevLength: 0, translate: 'translateX', animationTypes: 'ease' } }),
    state('next', style({
      transform: '{{translate}}(-{{nextLength}}px)',
      transition: '0.3s {{animationTypes}}'
    }),
      { params: { nextLength: 0, translate: 'translateX', animationTypes: 'ease' } }),
  ])
