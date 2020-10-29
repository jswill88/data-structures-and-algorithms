
module.exports = (A, B) => {
  let helper = [...A];
  console.log(helper)
  let aIndex = 0;
  let helperIndex = 0;
  let bIndex = 0;
  while(B[bIndex] && helper[helperIndex]) {
    if(B[bIndex] <= helper[helperIndex]) {
      A[aIndex] = B[bIndex];
      bIndex++;
    }
    else {
      A[aIndex] = helper[helperIndex];
      helperIndex++;
    }
    aIndex++;
  }
  if(B[bIndex]) {
    for(bIndex; bIndex < B.length; bIndex++) {
      A[aIndex] = B[bIndex];
      aIndex++;
    }
  }
  else {
    for(helperIndex; helperIndex < helper.length; helperIndex++) {
      A[aIndex] = helper[helperIndex];
      aIndex++;
    }
  }
}
