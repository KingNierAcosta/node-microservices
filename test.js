function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Ejemplo de uso:
// Cambia el valor de 'n' para obtener el número de Fibonacci en esa posición.
// const n = 4;
// const resultado = fibonacci(n);
// console.log(`El número de Fibonacci en la posición ${n} es: ${resultado}`);

function test() {
  //   let count = 0;
  //   for (let i = 1; i <= 1536; i++) {
  //     let str = i.toString();
  //     count += (str.match(/6/g) || []).length;
  //   }

  //   console.log(count);
  // }

  let azules = 0;
  let r = 0;
  let v = 0;
  console.log("sds");
  for (let i = 1; i <= 100; i++) {
    azules++;
    r += 2;
    v += 3;
    i = 6;
  }

  console.log(azules, r, v);
}

// test();

function esNumeroSinRepetir(num) {
  const digitos = num.toString().split("").map(Number);
  return new Set(digitos).size === digitos.length;
}

/* 
  Usando todos o algunos de los digitos 2; 3; 4; 5 Edu escribe numeros mayores que 500
   que no tienen cifras repetidas por ejemplo 543. Cuantos numeros escribe Edu?
*/
function generarNumeros() {
  const digitosPermitidos = [2, 3, 4, 5];
  const numeros = [];

  for (let d1 of digitosPermitidos) {
    for (let d2 of digitosPermitidos) {
      for (let d3 of digitosPermitidos) {
        // Números de tres dígitos
        const numeroTresDigitos = d1 * 100 + d2 * 10 + d3;
        if (numeroTresDigitos > 500 && esNumeroSinRepetir(numeroTresDigitos)) {
          numeros.push(numeroTresDigitos);
        }

        for (let d4 of digitosPermitidos) {
          // Números de cuatro dígitos
          const numeroCuatroDigitos = d1 * 1000 + d2 * 100 + d3 * 10 + d4;
          if (
            numeroCuatroDigitos > 500 &&
            esNumeroSinRepetir(numeroCuatroDigitos)
          ) {
            numeros.push(numeroCuatroDigitos);
          }
        }
      }
    }
  }

  return numeros;
}

// const resultado = generarNumeros();
// console.log(resultado);
// console.log("Cantidad de números:", resultado.length);


function contarTomadasEnDias(diasTotales) {
  let lunesYMartesTomado = 0;

  let diaTomado = 1;
  for (let dia = 1; dia <= diasTotales; dia++) {
    if (diaTomado % 7 === 1 && (diaTomado + 1) % 7 === 2 && (diaTomado + 1 <= diasTotales)) {
        lunesYMartesTomado++;
    }

    diaTomado += 3;
  }

  return lunesYMartesTomado;
}

// const diasTotales = 180;
// console.log('Lunes y martes tomado ', contarTomadasEnDias(diasTotales))
