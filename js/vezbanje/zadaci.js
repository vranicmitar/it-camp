// Domaci zadatak.
// Napraviti funkciju koja trazi od korisnika da unese neku recenicu, zatim funkcija vraca,
//  datu recenicu u vise oblika (spojenu u jedan string).
// 1. recenicu ispisanu velikim slovima,
// 2. recenicu ispisanu malim slovima,
// 3. pola recenice ispisano velikim slovima, pola recenice ispisano malim slovima
// 4. Ako se u recenici nadje rec 'skola' neka bude zamenjena recju fakultet,
// 5. Neka bude ispisano prvih 10 karaktera unete recenice,
// 6. Neka bude ispisano poslednjih 10 karaktera unete recenice.

const zadatak = (recenica) => {
  const prva = recenica.toUpperCase();
  const druga = recenica.toLowerCase();
  let duzina = recenica.length;
  let polaDuzine;
  polaDuzine =
    duzina % 2 === 0 ? (polaDuzine = duzina / 2) : Math.round(duzina / 2);

  let prvaPol = recenica.slice(0, polaDuzine).toUpperCase();
  let drugaPol = recenica.slice(polaDuzine, duzina).toLowerCase();
  const treca = prvaPol.concat(drugaPol);
  const cetvrta = recenica.replace(/skola/g, "fakultet");
  const peta = recenica.substr(0, 10);
  const sesta = recenica.slice(-10);
  return prva.concat(
    "\n",
    druga,
    "\n",
    treca,
    "\n",
    cetvrta,
    "\n",
    peta,
    "\n",
    sesta
  );
};
console.log(zadatak("Ja sam isao u skola neko vreme a sada radim"));
