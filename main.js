// program bilangan ganjil
let ganjil = () => {
    for(let  angka = 1; angka <=50; angka++) {
        if ((angka%2)==1){
            console.log(angka);
            document.write(angka + ` adalah bilangan ganjil<br>`);
        }
    }
}
ganjil();