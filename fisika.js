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

// end-point "/Celcius" dengan method POST
app.post("/convert/celcius", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let c = Number(req.body.c) 

    let r = 4/5 * c
    let k = c * 273
    let f = 9/5 * c + 32

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        Celcius: c,
        Reamur: r,
        Kelvin: k,
        Fahrenheit: f
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/Reamur" dengan method POST
app.post("/convert/reamur", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let r = Number(req.body.r) 

    let c = 5/4 * r
    let k = 5/4 * r + 273
    let f = 9/4 * r + 32
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        Reamur: r,
        Celcius: c,
        Kelvin: k,
        Fahrenheit: f
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/Kelvin" dengan method POST
app.post("/convert/kelvin", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let k = Number(req.body.k) 

    let c = k - 273
    let r = 4/5 * (k - 273)
    let f = 9/5 * (k - 273) + 32
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        Kelvin: k,
        Reamur: r,
        Celcius: c,
        Fahrenheit: f
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/Fahrenheit" dengan method POST
app.post("/convert/fahrenheit", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let f = Number(req.body.f) 

    let c = 5/9 * (f - 32)
    let r = 4/9 * (f - 32)
    let k = 5/9 * (f - 32) + 273
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        Fahrenheit: f,
        Kelvin: k,
        Reamur: r,
        Celcius: c
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})
