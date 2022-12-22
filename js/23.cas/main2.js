// 3 argumenta vraca najveci od njih

function vracanajevci(par1,par2,par3) {
   if (par1 > par2 && par1 >par3) {
    return par1;
   } else if(par2 > par1 && par2 > par3) {
    return par2;
   } 
   return par3;
}
console.log(vracanajevci(5,15,55));

// dva argumenta koji je blizi 100;

// 32. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

function blizi100(x, y) {
      if (isNaN(x) || isNaN(y)) {
         return `Uneti argumenti moarju biti brojevi`
      } 
      if (x != y) {
         x1 = Math.abs(x - 100);
         y1 = Math.abs(y - 100);
      if (x1 < y1) {
         return `Broj ${x} je blizi broju 100 nego broj ${y}`;
      } else if (y1 < x1) {
      return `Broj ${y} je blizi broju 100 nego broj ${x}`;
      }
      }
   return `Brojevi su jednako udaljeni od broja 100`;
 }
 console.log(blizi100(5,15))
 

// 33. Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

const ispisi = function(a,b) {
   if (a >= 40 && a <= 60 && b >= 40 && b <= 60 ) {
      return `Brojevi su u opsegu od 40 do 60`
   } else if (a >= 70 && a <= 100 && b >= 70 && b <= 100) {
      return `Brojevi su u opsegu od 70 do 100`
   } else {
      return `Uneti brojevi nisu u opsegu od 40 do 60 ili od 70 do 100`
   }
}
console.log(ispisi(40,58));

// 34. Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.


function nadji(c,d) {
   if(c >= 40 && c <= 60 && d >= 40 && d <= 60) {
      if (c > d) {
         return `Broj ${c} je veci od broja ${d}`;
      } else if (c < d){
         return `Broj ${d} je veci od broja ${c}`;
      } else if (c === d) {
         return `Brojevi su jednaki`
      }
   } return `Brojevi moraju biti u opsegu od 40 do 60`
}
console.log(nadji(60,50));
console.log(nadji(20,50));
console.log(nadji(50,50));
