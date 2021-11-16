const createContador = () => {
    let number = 0;
    return () => {
      number += 1;
      console.log(number);
    };
  };
  
  const contar = createContador();
  contar(); // 1
  contar(); // 2
  contar(); // 3