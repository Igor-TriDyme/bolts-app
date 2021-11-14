// import { SectionGeometry } from '@tridyme/aec';

// Option 1: utilisation de la librairie @tridyme/aec: https://github.com/tridyme/aec
// const calculations = {
//   outputs: (inputs) => {
//     return {
//       A: new SectionGeometry.RectangularSection(inputs).A,
//       Ixx: new SectionGeometry.RectangularSection(inputs).Iy
//     }
//   }
// }

// export default calculations;

// Option 2: calcul manuel
const calculations = {
  // OUTPUTS
  outputs: (inputs) => {
    return {
      A: calculations.A(inputs),
      Ixx: calculations.Ixx(inputs)
    }
  },
  // CALCULATION FUNCTIONS
  A: (inputs) => {
    const {
      b,
      h
    } = inputs;
    return b * h;
  },

  Ixx: (inputs) => {
    const {
      b,
      h
    } = inputs;
    return b * h ** 3 / 12;
  }
}

export default calculations;
