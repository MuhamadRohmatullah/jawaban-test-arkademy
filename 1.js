// jawaban no 1
// fungsi biodata dengan parameter nama dan umur dan mengembalikan biodata lengkap
// menggunakan javascript
'use strict';
function biodata(nama, umur){
	// data dimasukan kedalam sebuah objek
	var data = {
		nama : nama,
		umur : umur,
		alamat : 'Kp. Girijaya, rt 08/04, Desa Girijaya, Kecamatan Cidahu, Kabupaten Sukabumi',
		hoby : ['sepakbola, ngoding'],
		is_married : false,
		list_school : [{
			name : 'SDN 2 GIRIJAYA',
			years_in : 2006,
			years_out : 2013
		},
		{
			name : 'SMP PGRI 2 CIDAHU',
			years_in : 2013,
			years_out : 2016
		},
		{
			name : 'SMK INFORMATIKA CBI',
			years_in : 2016,
			years_out : 2019
		}],
		skills : [{
			skill_name : 'html, css',
			level : 'advanced',
		},
		{
			skill_name : 'javascript',
			level : 'beginner',
		}],
		interest_in_coding : true
	}
	// parsing mengunakan methode JSON.stringify dan mengembalikan data JSON
	return JSON.stringify(data);
}

console.log(biodata('Muhamad Rohmatullah', 18))
