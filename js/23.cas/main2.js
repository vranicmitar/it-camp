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
