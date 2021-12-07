const hitungVoucher = (code, amount) =>{
  if (code === 'DumbWaysJos'){
    if(amount < 50_000){
      return console.log('Minimal pembelanjaan 50,000');
    }
    let diskon = 211 /1000 * amount;
    if(diskon > 20_000){
      diskon = 20_000;
    }
    return (console.log('Uang yang harus dibayar : ', amount - diskon), console.log('diskon : ', diskon), console.log('kembalian : ', diskon));
  }
  if (code === 'DumbWaysMantap'){
    if(amount < 80_000){
      return console.log('Minimal pembelanjaan 50,000');
    }
    let diskon = 30 /100 * amount;
    if(diskon > 40_000){
      diskon = 40_000;
    }
    return (console.log('Uang yang harus dibayar : ', amount - diskon), console.log('diskon : ', diskon), console.log('kembalian : ', diskon));
  }
  return console.log('Kode voucher tidak ditemukan');
}

hitungVoucher('DumbWaysMantap', 100000);
