function meetAt(year, month, day) {
  if (year && !month && !day) {

    return year + "년";
  } else if (year && month && !day) {

    return year + "년 " + month + "월";
  } else if (year && month && day) {

    return year + "/" + month + "/" + day;
  }
}

console.log(meetAt(1992,11,5))