const zbir = (a, b) => {
  console.log(a + b);
};

const num = 55;

// JS moduli nam dozvoljavaju da podelimo nas kod u odvojene fajlove.
// Oni se oslanjaju na 2 naredbe (statments) :
// 1. import
// 2. export

// Postoje dva nacina exportovanja neke f-je,promenljive:

// 1. default export (mozemo jednoim iskoristiti)
// 2. export (vise puta)

export default zbir;
export { num };

