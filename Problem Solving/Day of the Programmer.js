function dayOfProgrammer(year) {
    if (year < 1918) {
      let days = year % 4 === 0 ? 244 : 243;
      return 256 - days + '.09.' + year;
    } else if (year > 1918) {
      let days = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 244 : 243;
      return 256 - days + '.09.' + year;
    } else {
      return '26.09.1918';
    }
}