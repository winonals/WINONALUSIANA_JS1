//if, else & nested if
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {
  console.log("Anda berhasil masuk ke akun Anda.");

  if (isAdmin) {
    console.log("Anda adalah admin.");
  } else {
    console.log("Anda bukan admin.");
  }
} else {
  console.log("Anda belum masuk ke akun Anda.");
}

// Switch case
let buah = "apel";

switch (buah) {
  case "apel":
    console.log("Buah ini berwarna merah.");
    break;
  case "pisang":
    console.log("Buah ini berwarna kuning.");
    break;
  case "jeruk":
    console.log("Buah ini berwarna oranye.");
    break;
  case "anggur":
    console.log("Buah ini berwarna ungu.");
    break;
  case "nanas":
    console.log("Buah ini berwarna kuning.");
    break;
  default:
    console.log("Buah tidak dikenali.");
}


//For Statement
const colors = ['red', 'green', 'blue', 'yellow'];

for (let i = 0; i < colors.length; i++) {
  console.log(`Color: ${colors[i]}`);
}


//While Statement
let angka = 1;

while (angka <= 5) {
  console.log(`Iterasi ke-${angka}`);
  angka++;
}

console.log("Perulangan selesai.");


//Do While Statement
let counter = 0;

do {
  console.log(`Counter: ${counter}`);
  counter += 2; // Menambahkan 2 ke nilai counter setiap kali iterasi
} while (counter <= 10);


// Function
function hitungFaktorial(angka) {
    let faktorial = 1;
    for (let i = 1; i <= angka; i++) {
      faktorial *= i;
    }
    return faktorial;
  }
  
  // Memanggil fungsi hitungFaktorial
  const hasilFaktorial = hitungFaktorial(5);
  console.log("Hasil faktorial dari 5 adalah: " + hasilFaktorial);
  