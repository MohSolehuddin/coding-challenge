// jangan lupa baca README.md ya juri hehe:)
// maaf ya juri tidak fasih bahasa inggris jadinya campur campur

function primeNumbersBetween(startRange, endRange){
  // membuat variabel wadah untuk menampung nilai yang akan di keluarkan ke html
  let wadah = `<h3>Bilangan prima antara ${startRange.toLocaleString()} dan ${endRange.toLocaleString()} adalah :</h3>`;
  //mengecek apakah nilai nilaiRangeSekarang adalah prima atau bukan,jika ya maka tampilkan
  for(let nilaiRangeSekarang = startRange; nilaiRangeSekarang <= endRange; nilaiRangeSekarang++) {
    if (tampung(nilaiRangeSekarang).indexOf(0)=== -1 && nilaiRangeSekarang>1) {
      wadah += `
      <div id="primeNumber">
        ${nilaiRangeSekarang.toLocaleString("in-ID")}
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
  // mengambil nilai input rentang awal
  let startRange = document.getElementById("startRange").value;
  let endRange = document.getElementById("endRange").value;
  //jika pengguna memasukan "." maka hapus "." , karena pengguna hanya paham kalau "adalah pembatas angka ribuan atau lebih ,sedangkang javascript mengira itu nilai desimal"
  if (startRange.indexOf(".") !== -1) {
    startRange = startRange.replace(".","")
  }
  if (endRange.indexOf(".") !== -1) {
    endRange = endRange.replace(".","")
  }
    // jika pengguna tidak memberi nilai maka default nya 0
  if (startRange==="") {
    startRange = 0;
  }
  if (endRange==="") {
    endRange = 0;
  }
  let value = primeNumbersBetween(Number(startRange),Number(endRange))
  document.getElementById("output").innerHTML = `${value}`;
}