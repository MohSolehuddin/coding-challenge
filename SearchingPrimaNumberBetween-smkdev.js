// jangan lupa baca README.md ya juri hehe:)
function primeNumbersBetween(startRange, endRange){
  let wadah = '';
  for(let nilaiRangeSekarang = startRange; nilaiRangeSekarang <= endRange; nilaiRangeSekarang++) {
    let array = tampung(nilaiRangeSekarang);
    if (array.indexOf(0)=== -1 && nilaiRangeSekarang>1) {
      wadah += `${nilaiRangeSekarang} <br/>`;
    }
  }
  return wadah;
}

// function tampung yang menampung array hasil modulus
function tampung (nilaiRangeSekarang){
  // membuat wadah untuk menyimpan Array
    let wadah = [];
  for (let i = Math.floor(nilaiRangeSekarang/2); i > 1; i-- ) {
    // membuah variabel value yang akan menyimpan nilai modulus dari nilai rantang tertentu yang akan kita coba apakah itu bilangan prima atau bukan
    let value = nilaiRangeSekarang%i;
    wadah.push(value);
  }
  return wadah;
}
console.log(primeNumbersBetween(1,90));

//membuat fungsi print untuk menampilkan ke html
async function print() {
  let startRange = document.getElementById("startRange").value;
  let endRange = document.getElementById("endRange").value;
  console.log(startRange, endRange);
  let value = primeNumbersBetween(startRange,endRange)
  document.getElementById("output").innerHTML = `${value}`;
}