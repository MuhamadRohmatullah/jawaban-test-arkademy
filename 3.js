// soal no 3
// function menghitung jabat tangan
// menggunakan javascript
'use strict';
function handshake(jumlah){
	var hasil = 0;
	for(let i= 0; i < jumlah; i++){
		 hasil += i;
	}
	return hasil;
}

// menampilkan ke console
console.log(handshake(6));