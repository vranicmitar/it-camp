// 1.zadatak - Ispisati neparne brojeve od 1 do 20 -->

for (let i = 1; i<=20; i += 2) {
    console.log(i);
}

// 2.zadatak - Ispisati sve brojeve od 50 do 100 koji su deljivi sa 50 -->

for (let i = 50; i<=100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}
// 3.zadatak - Ispisati dvostruku vrednost brojeva od 6 do 14 -->

for (let i = 6; i<=28; i*=2) {
    console.log( i );
}

// 4.zadatak - Suma neparnih prirodnih brojeva od 10 do 20 -->

let sum = 0; 
for (let i = 10; i < 20; i++){ 
  if (i % 2 !== 0) {
  sum+=i; 
  } 
} 
console.log(sum);