// jangan lupa baca README.md ya juri hehe:)
primaNumberBetween startRange
  for(let i = startRange; i <= endRange; i++) {
  // perulangan ke 2 untuk menangani nilai di rentang tertentu
  
  }
}

// function tampung yang menampung array hasil modulus
function tampung (nilaiRangeSekarang){
  // membuat wadah untuk menyimpan Array
    let wadah = [];
  for (let i = Math.floor(nilaiRangeSekarang/2); i > startRange; i-- ) {
    // membuah variabel value yang akan menyimpan nilai modulus dari nilai rantang tertentu yang akan kita coba apakah itu bilangan prima atau bukan
    let value = nilaiRangeSekarang%i;
    wadah.push(value);
  }
  return wadah;
}
