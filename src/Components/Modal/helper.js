export const clearCanvas = (
  setterOne,
  setterTwo,
  setterThree,
  setterFour,
  fn
) => () => {
  setterOne('');
  setterTwo('');
  setterThree('');
  setterFour('');
  fn();
};
