const sortWorkedHoursDecreasing = (a, b) => {
  if (a.horas > b.horas) {
    return -1;
  }
  if (b.horas < a.horas) {
    return 1;
  }
  return 0;
};
export default sortWorkedHoursDecreasing;
