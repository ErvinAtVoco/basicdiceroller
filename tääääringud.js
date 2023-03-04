
function taringuVise() {
    const taringud = ['täring1.png', 'täring2.png', 'täring3.png', 'täring4.png', 'täring5.png', 'täring6.png']
    let mituViset = Number(document.getElementById("mituViset").value);
    let tulemus = [];
    let kokku = 0;
    if (mituViset <= 50) {
        while (mituViset > 0) {
            let random = Math.floor(((Math.random() * 6)));
            kokku = (kokku + random + 1);
            tulemus.push(document.getElementById("siiaViska").innerHTML = `<img id="taaaring" src="${taringud[random]}">`);
            mituViset--;
        }
        document.getElementById("siiaViska").innerHTML = `${tulemus.join("\r\n")}`;
        if (kokku > 0) {
        document.getElementById("kokku").innerHTML = `<h1>Kokku: ${kokku}</h1>`
        }
    } else {
        document.getElementById("siiaViska").innerHTML = `<h1>Paljuks ei lähe natukene vää?</h1>`;
        document.getElementById("kokku").innerHTML = `<h1></h1>`
    }
    
    
}