/*Exercise
1. Buat conditional IF .. ELSE IF yang menggambarkan divisi dan tugas divisi pada STARTUP.
Contoh: Jika saya sebagai HR maka tugas saya adalah melakukan rekrutmen untuk calon pegawai baru
*/
let divisi = "HR";
if(divisi === "HR") {
    console.log("tugas saya adalah melakukan rekrutmen untuk calon pegawai baru");
} else if (divisi === "Finance"){
    console.log("tugas saya adalah mengelola keuangan");
} else {
    console.log("Saya error");
}

/*
2. Buat conditional untuk membandingkan 2 buah nilai. Tampilkan apakah salah satu nilai misal a lebih besar dari b, a lebih kecil dari b, dan a sama dengan b.
*/
let a = 4;
let b = 8;

if (a > b) {
    console.log(a, "lebih besar dari", b);
} else if (a < b) {
    console.log(a, "lebih kecil dari", b);
} else {
    console.log(a, "sama dengan", b);
}

/*
3. Gunakan switch case untuk mengetahui nama day berdasarkan angka.
day minggu dimulai dari angka 1 dan seterusnya
*/
let day = 6;

switch (day) {
    case 1:
        day = "Sunday";
    break;
    case 2:
        day = "Monday";
    break;
    case 3:
        day = "Tuesday";
    break;
    case 4:
        day = "Wednesday";
    break;
    case 5:
        day = "Thrusday";
    break;
    case 6:
        day = "Friday";
    break;
    case 6:
        day = "Saturday";
    break

}
console.log("Today is + "day"");

/*
4. Gunakan switch case untuk membuat sebuah game sederhana.
UP -> Karakter berjalan keatas
RIGHT -> Karakter berjalan kekanan
BOTTOM -> Karakter berjalan kebawah
LEFT -> Karakter berjalan kekiri
*/
switch(userInput) {

  case 'LEFT':

    x -= 1;

    break;

  case 'RIGHT':

    x += 1;

    break;

  case 'UP':

    y += 1;

    break;

  default:

    y -= 1;

}

