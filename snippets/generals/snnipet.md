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

### Mapa de caracteres

    function mapString(string) {
      let map = {};
      
      for (let i = 0; i < string.length; i++) {
        let letter = string[i];
        if (map[letter]) {
          map[letter].push(i);
        } else {
          map[letter] = [i];
        }
      }
      return map;
    }

    console.log(mapString('banana'));   // retorna { "b": [0], "a": [1,3,5], "n": [2,4] }
    
