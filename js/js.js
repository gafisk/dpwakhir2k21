
var temp = "";
var nobrg = 1;
var nlbrg = 0;
var hrgbrg = "";
var jmlhbrg = '';


function kemetode(){
	var nama = document.getElementById('username').value;
	var tanggal = document.getElementById('tanggal').value;
	var alamat = document.getElementById('alamat').value;
	var telp = document.getElementById('telp').value;
	if (nama == ""){
		window.alert("Nama Pembeli Tidak Terisi!");
	}
	else if(tanggal == ""){
		window.alert("Tanggal Pembelian Tidak Terisi!");
	}
	else if (alamat == ""){
		window.alert("Alamat Pembeli Tidak Terisi!");
	}
	else if (telp == ""){
		window.alert("Nomor Telepon Pembeli Tidak Terisi!")
	}
	else{
		document.getElementById('tanggalpembelimandiri').innerHTML = tanggal;
		document.getElementById('namapembelimandiri').innerHTML = nama;
		document.getElementById('alamatpembelimandiri').innerHTML = alamat;
		document.getElementById('telppembelimandiri').innerHTML = telp;

		document.getElementById('tanggalpembelibri').innerHTML = tanggal;
		document.getElementById('namapembelibri').innerHTML = nama;
		document.getElementById('alamatpembelibri').innerHTML = alamat;
		document.getElementById('telppembelibri').innerHTML = telp;

		document.getElementById('tanggalpembelibca').innerHTML = tanggal;
		document.getElementById('namapembelibca').innerHTML = nama;
		document.getElementById('alamatpembelibca').innerHTML = alamat;
		document.getElementById('telppembelibca').innerHTML = telp;

		document.getElementById('tanggalpembeli').innerHTML = tanggal;
		document.getElementById('namapembeli').innerHTML = nama;
		document.getElementById('alamatpembeli').innerHTML = alamat;
		document.getElementById('telppembeli').innerHTML = telp;

		document.getElementById('datapembeli').style.display = "none";
		document.getElementById('metodepembayaran').style.display = "block";
	}
		
}
	
function kedebit(){ //untuk masuk ke tampilan debit
	document.getElementById('metodepembayaran').style.display = "none";
	document.getElementById("debit").style.display = "block";
}
function kecash(){ //untuk masuk ke tampilan cash
	document.getElementById('metodepembayaran').style.display = "none";
	document.getElementById("kasir").style.display = "block";
}

function savedebit(){
	var barang = document.getElementById('barangdebit').value;
	var jumlah = document.getElementById('jumlahdebit').value;
	if (barang == ""){
		window.alert("barang kosong");
	}
	else if (barang == "kemeja"){
		temp = temp + nobrg + ". Kemeja" + "<br>";
		nlbrg = nlbrg + (50000 * jumlah);
		hrgbrg = hrgbrg + "Rp 50.000" + "<br>";
		jmlhbrg = jmlhbrg + jumlah + "<br>";
		nobrg = nobrg + 1;
		document.getElementById('barang').value = "";
	}
	else if (barang == "celana panjang"){
		temp = temp + nobrg + ". Celana panjang" + "<br>";
		nlbrg = nlbrg + (40000 * jumlah);
		jmlhbrg = jmlhbrg + jumlah + "<br>";
		hrgbrg = hrgbrg + "Rp 40.000" + "<br>";
		nobrg = nobrg + 1;
		document.getElementById('barang').value = "";
	}
    else if (barang == "jaket"){
	temp = temp + nobrg + ". Jaket" + "<br>";
		nlbrg = nlbrg + (50000 * jumlah);
		jmlhbrg = jmlhbrg + jumlah + "<br>";
		hrgbrg = hrgbrg + "Rp 50.000" + "<br>";
		nobrg = nobrg + 1;
		document.getElementById('barang').value = "";
	}
    else if (barang == "gaun"){
		temp = temp + nobrg + ". Gaun" + "<br>";
		nlbrg = nlbrg + (100000 * jumlah);
		jmlhbrg = jmlhbrg + jumlah + "<br>";
		hrgbrg = hrgbrg + "Rp 100.000" + "<br>";
		nobrg = nobrg + 1;
		document.getElementById('barang').value = "";
	}
    else if (barang == "celana pendek"){
		temp = temp + nobrg + ". Celana pendek" + "<br>";
		nlbrg = nlbrg + (30000 * jumlah);
		jmlhbrg = jmlhbrg + jumlah + "<br>";
		hrgbrg = hrgbrg + "Rp 30.000" + "<br>";
		nobrg = nobrg + 1;
		document.getElementById('barang').value = "";
	}
	else{
		window.alert("barang tidak ditemukan!");
	}
	document.getElementById('namabarangdebit').innerHTML = temp;
	document.getElementById('jumlahbarangdebit').innerHTML = jmlhbrg;
	document.getElementById('hargabarangdebit').innerHTML = hrgbrg;
	document.getElementById('totalbarangdebit').innerHTML = "Rp. " + nlbrg;

	document.getElementById('notanamabarangkartumandiri').innerHTML = temp;
	document.getElementById('notajumlahbarangkartumandiri').innerHTML = jmlhbrg;
	document.getElementById('notahargabarangkartumandiri').innerHTML = hrgbrg;
	document.getElementById('notatotalbarangkartumandiri').innerHTML = "Rp. " + nlbrg;

	document.getElementById('notanamabarangbri').innerHTML = temp;
	document.getElementById('notajumlahbarangbri').innerHTML = jmlhbrg;
	document.getElementById('notahargabarangbri').innerHTML = hrgbrg;
	document.getElementById('notatotalbarangbri').innerHTML = "Rp. " + nlbrg;

	document.getElementById('notanamabarangbca').innerHTML = temp;
	document.getElementById('notajumlahbarangbca').innerHTML = jmlhbrg;
	document.getElementById('notahargabarangbca').innerHTML = hrgbrg;
	document.getElementById('notatotalbarangbca').innerHTML = "Rp. " + nlbrg;

	document.getElementById('barangdebit').value = " ";
}

function totaldebit(){
	diskondebit = document.getElementById("diskondebit").value;
	total = nlbrg - (nlbrg - (nlbrg * (diskondebit/100)));
	nlbrgdbt = nlbrg - total;
	document.getElementById("diskonbarangdebit").innerHTML = "Rp. " +total;
	document.getElementById("sisabarangdebit").innerHTML = "Rp. " + (nlbrg - total);

}

function kartubca(){
	document.getElementById('pajakbca').innerHTML = "Rp. " + (nlbrg * 10/100);
	document.getElementById('notatotalbca').innerHTML = "Rp. " + (nlbrgdbt + (nlbrg * 10/100));
	document.getElementById("diskonbca").innerHTML = diskondebit + "%"
	document.getElementById("notabca").style.display = "block";
	document.getElementById('debit').style.display = "none";
}

function kartubri(){
	document.getElementById('pajakbri').innerHTML = "Rp. " + (nlbrg * 10/100);
	document.getElementById('notatotalbri').innerHTML = "Rp. " + (nlbrgdbt + (nlbrg * 10/100));
	document.getElementById("diskonbri").innerHTML = diskondebit + "%"
	document.getElementById("notabri").style.display = "block";
	document.getElementById('debit').style.display = "none";
}

function kartumandiri(){
	document.getElementById('pajakmandiri').innerHTML = "Rp. " + (nlbrg * 10/100);
	document.getElementById('notatotalmandiri').innerHTML = "Rp. " + (nlbrgdbt + (nlbrg * 10/100));
	document.getElementById("diskonmandiri").innerHTML = diskondebit + "%"
	document.getElementById("notamandiri").style.display = "block";
	document.getElementById('debit').style.display = "none";
}

function hasil(){ //dibagian pembayaran cash
	var barang = document.getElementById('barang').value;
	var jumlah = document.getElementById('jumlah').value;
	if (barang == ""){
		window.alert("barang kosong");
	}
	else if (barang == "kemeja"){
		temp = temp + nobrg + ". Kemeja" + "<br>";
		nlbrg = nlbrg + (50000 * jumlah);
		hrgbrg = hrgbrg + "Rp 50.000" + "<br>";
		jmlhbrg = jmlhbrg + jumlah + "<br>";
		nobrg = nobrg + 1;
		document.getElementById('barang').value = "";
	}
	else if (barang == "celana panjang"){
		temp = temp + nobrg + ". Celana panjang" + "<br>";
		nlbrg = nlbrg + (40000 * jumlah);
		jmlhbrg = jmlhbrg + jumlah + "<br>";
		hrgbrg = hrgbrg + "Rp 40.000" + "<br>";
		nobrg = nobrg + 1;
		document.getElementById('barang').value = "";
	}
    else if (barang == "jaket"){
		temp = temp + nobrg + ". Jaket" + "<br>";
		nlbrg = nlbrg + (50000 * jumlah);
		jmlhbrg = jmlhbrg + jumlah + "<br>";
		hrgbrg = hrgbrg + "Rp 50.000" + "<br>";
		nobrg = nobrg + 1;
		document.getElementById('barang').value = "";
	}
    else if (barang == "gaun"){
		temp = temp + nobrg + ". Gaun" + "<br>";
		nlbrg = nlbrg + (100000 * jumlah);
		jmlhbrg = jmlhbrg + jumlah + "<br>";
		hrgbrg = hrgbrg + "Rp 100.000" + "<br>";
		nobrg = nobrg + 1;
		document.getElementById('barang').value = "";
	}
    else if (barang == "celana pendek"){
		temp = temp + nobrg + ". Celana pendek" + "<br>";
		nlbrg = nlbrg + (30000 * jumlah);
		jmlhbrg = jmlhbrg + jumlah + "<br>";
		hrgbrg = hrgbrg + "Rp 30.000" + "<br>";
		nobrg = nobrg + 1;
		document.getElementById('barang').value = "";
	}
	else{
		window.alert("barang tidak ditemukan!");
	}
	document.getElementById('namabarang').innerHTML = temp;
	document.getElementById('jumlahbarang').innerHTML = jmlhbrg;
	document.getElementById('hargabarang').innerHTML = hrgbrg;
	document.getElementById('totalbarang').innerHTML = "Rp. " + nlbrg;
}

function total(){//dibagian pembayaran cash
	var diskon = document.getElementById('diskon').value;
	var uang = document.getElementById('uang').value;
	document.getElementById('uangplg').innerHTML = "Rp. " + uang;
	var sisa = uang - (nlbrg - (nlbrg * (diskon/100)));
	document.getElementById('diskonh').innerHTML = "Rp. " + nlbrg * (diskon/100);
	document.getElementById("kembalian").innerHTML = "Rp. " + sisa;
		
	// kenota
	document.getElementById('diskonp').innerHTML = diskon + " %"
	document.getElementById('notanamabarang').innerHTML = temp;
	document.getElementById('notajumlahbarang').innerHTML = jmlhbrg;
	document.getElementById('notahargabarang').innerHTML = hrgbrg;
	document.getElementById('notatotalbarang').innerHTML = "Rp. " + nlbrg;
	document.getElementById('notauangplg').innerHTML = "Rp. " + uang;
	document.getElementById("notakembalian").innerHTML = "Rp. " + sisa;

}

function cetaknota(){ //dibagian cash
	document.getElementById('kasir').style.display = 'none';
	document.getElementById('nota').style.display = "block";
}
	
function cetak(){
	window.print();
}