const promptSync = require("prompt-sync");
const { luasPersegi, kelilingPersegi, luasSegitiga, kelilingSegitiga, luasLingkaran, kelilingLingkaran } = require('./src/shape');
const Student = require('./src/student');

const prompt = promptSync();
const s = new Student();

function main() {
    console.log("Pilih Aplikasi");
    console.log("1. Aplikasi Geometri");
    console.log("2. Aplikasi Mahasiswa");
    pilih = parseInt(prompt("Pilih Aplikasi: "))
    switch (pilih) {
        case 1:
            console.log("Aplikasi Geometri");
            console.log("1. Hitung Luas Persegi");
            console.log("2. Hitung Keliling Persegi")
            console.log("3. Hitung Luas Segitiga");
            console.log("4. Hitung Keliling Segitiga");
            console.log("5. Hitung Luas Lingkaran")
            console.log("6. Hitung Keliling Lingkaran");
            pilihAplikasi = parseInt(prompt("Pilih Aplikasi: "))
            switch (pilihAplikasi) {
                case 1:
                    p = prompt("Masukan Panjang ")
                    console.log(luasPersegi(p));
                    main();
                case 2:
                    p = prompt("Masukan Panjang ")
                    console.log(kelilingPersegi(p));
                    main()
                case 3:
                    p = prompt("Masukan Panjang ")
                    console.log(luasSegitiga(p));
                    main()
                case 4:
                    p = prompt("Masukan Panjang ")
                    console.log(kelilingSegitiga(p));
                    main()
                case 5:
                    p = prompt("Masukan Panjang ")
                    console.log(luasLingkaran(p));
                    main()
                case 6:
                    p = prompt("Masukan Panjang ")
                    console.log(kelilingLingkaran(p));
                    main()
                default:
                    main();
            }
        case 2:
            console.log("Aplikasi Mahasiswa");
            nama = prompt("Input Nama ")
            kelas = prompt("Input Kelas ")
            nim = prompt("Input NIM ")
            s.setName(nama)
            s.setKelas(kelas)
            s.setNim(nim)
            console.log(`Nama : ${s.getName()} NIM : ${s.getNim()} Kelas : ${s.getKelas()}`)
            main()
        default:
            main();
    }
}
main()