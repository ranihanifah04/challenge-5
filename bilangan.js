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

// end-point "/Biner" dengan method POST
app.post("/convert/biner", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let b = Number(req.body.b) 

    let d = parseInt(b, 2).toString(10)
    let o = parseInt(b, 2).toString(8)
    let h = parseInt(b, 2).toString(16)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        Biner: b,
        Desimal: d,
        Oktal: o,
        HexaDsimal: h
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/oktal" dengan method POST
app.post("/convert/oktal", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let o = Number(req.body.o) 

    let b = parseInt(o, 8).toString(2)
    let d = parseInt(o, 8).toString(10)
    let h = parseInt(o, 8).toString(16)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        Oktal: o,
        Biner: b,
        Desimal: d,
        HexaDsimal: h
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/desimal" dengan method POST
app.post("/convert/desimal", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let d = Number(req.body.d) 

    let b = parseInt(d, 10).toString(2)
    let o = parseInt(d, 10).toString(8)
    let h = parseInt(d, 10).toString(16)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        Desimal: d,
        Biner: b,
        Oktal: o,
        HexaDsimal: h
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/hexa" dengan method POST
app.post("/convert/hexa", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let h = req.body.h

    let b = parseInt(h, 16).toString(2)
    let o = parseInt(h, 16).toString(8)
    let d = parseInt(h, 16).toString(10)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        HexaDsimal: h,
        Biner: b,
        Desimal: d,
        Oktal: o
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})
