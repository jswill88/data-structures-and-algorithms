module.exports = function (str1, str2) {

  let ind1 = str1.length - 1;
  let ind2 = str2.length - 1;
  while (ind1 >= 0 && ind2 >= 0) {
    let delete1 = 0;
    let delete2 = 0;
    while (str1[ind1] === '#') {
      delete1++;
      ind1--
    }
    ind1 -= delete1;
    while (str2[ind2] === '#') {
      delete2++;
      ind2--
    }
    ind2 -= delete2;
    if(str1[ind1] !== str2[ind2]) {
      return false;
    }
    ind1--;
    ind2--;
  }


  return !(ind1 > 0 || ind2 > 0);
};
