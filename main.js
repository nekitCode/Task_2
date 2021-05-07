const calculate = () => {

    const val1 = prompt('add value 1');
    let a;
    let b;
    
    if (isNaN(val1) || !val1?.trim()) return console.log("Некорректный ввод!");
    
    const val2 = prompt('add value 2');
  
    if (isNaN(val2) || !val2?.trim()) {
     return  console.log("Некорректный ввод!");
    }else {
      a = (+val1) + (+val2);
      b = val1 / val2;
    }
    
   return console.log(`Ответ: ${a}, ${b}`);
  }
  
console.log(calculate());