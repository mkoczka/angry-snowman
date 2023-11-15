
import { Colors } from './colors';
import { Measures } from './measures';

const specialBlanketGradient = {
           type: 'Linear',
            direction: {
             from: {x: 0.5, y: 3.0616171314629196e-17 },
             to:   {x: 0.5, y: 1 },
           },
            stops: [
             {
               color: "#14161852",
               position: 0
             },
             {
               color: "#14161800",
               position: 1
             },
           ],
         };
const specialFade = {
           type: 'Linear',
            direction: {
             from: {x: 0, y: 0.5 },
             to:   {x: 1, y: 0.5 },
           },
            stops: [
             {
               color: "#ffffff00",
               position: 0
             },
             {
               color: "#ffffff",
               position: 1
             },
           ],
         };


export const Gradients = {
      specialBlanketGradient,
      specialFade,
}