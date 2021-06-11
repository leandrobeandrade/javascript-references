### Achar maior número

    let list = [82, 15, 50, 35, 67];

    function larger(a,b) {
      return a > b ? a : b;
    };

    function maximum(array) {
      let max = 0;
      for (let num of array) {
        max = larger(max, num);
      }
      return max;
    };

    console.log(maximum(list));  // retorna 82
