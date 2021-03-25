
export function replaceAt(array, index, value) {
    const ret = array.slice(0);
    ret[index] = value;
    return ret;
  }
  
  //shuffle array
  export function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  