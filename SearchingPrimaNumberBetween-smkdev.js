// jangan lupa baca README.md ya juri hehe:)
function primeNumbersBetween(startRange, endRange){
  let wadah = `<h3>Bilangan prima antara ${startRange} dan ${endRange} adalah :</h3>`;
  for(let nilaiRangeSekarang = startRange; nilaiRangeSekarang <= endRange; nilaiRangeSekarang++) {
    if (tampung(nilaiRangeSekarang).indexOf(0)=== -1 && nilaiRangeSekarang>1) {
      wadah += `
      <div id="primeNumber">
        ${nilaiRangeSekarang}
      </div>`;
    }
  }
  return wadah;
}

// function tampung yang menampung array hasil modulus
function tampung (nilaiRangeSekarang){
  // membuat wadah untuk menyimpan Array
    let wadah = [];
  for (let i = Math.floor(Math.sqrt(nilaiRangeSekarang)); i > 1; i-- ) {
    // membuah variabel value yang akan menyimpan nilai modulus dari nilai rantang tertentu yang akan kita coba apakah itu bilangan prima atau bukan
    let value = nilaiRangeSekarang%i;
    wadah.push(value);
  }
  return wadah;
}

//membuat fungsi print untuk menampilkan ke html
function print() {
  let startRange = document.getElementById("startRange").value;
  if (startRange==="") {
    startRange = 0;
  }
  let endRange = document.getElementById("endRange").value;
  if (endRange==="") {
    endRange = 0;
  }
  let value = primeNumbersBetween(startRange,endRange)
  document.getElementById("output").innerHTML = `${value}`;
}