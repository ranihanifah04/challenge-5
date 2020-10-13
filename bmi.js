const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

// endpoint "/test" dengan method GET
app.get("/test", (req,res) => {
    // req merupakan variabel yang berisi data request
    // res merupakan variabel yang berisi data response dari end-point
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        message: "Ini end-point pertama ku",
        method: req.method,
        code: res.statusCode
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// menjalankan server pada port 8000
app.listen(8000, () =>{
    console.log("Server run on port 8000");
})

// end-point "/BMI" dengan method POST
app.post("/BMI", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let berat = Number(req.body.berat) 
    let tinggi = Number(req.body.tinggi)

    let hasil = berat / (tinggi*tinggi);
    if(hasil < 18.5){
        status = "Kategori : Kekurangan Berat Badan"
    }else if(hasil >= 18.5 && hasil <=24.9){
        status = "Kategori : Normal(Ideal)"
    }else if(hasil >= 25 && hasil <=29.9){
        status = "Kategori : Kelebihan Berat Badan"
    }else{
        status = "Kategori : Obesitas"
    }

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        Tinggi: tinggi,
        Berat: berat,
        Hasil: hasil,
        Status: status
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})
