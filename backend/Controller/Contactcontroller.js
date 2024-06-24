const express = require("express")
const Contact = require("../Model/Contact")

const Contactform = async (req,res)=>{
const {name, email, textarea} = req.body.data;
    // console.log(req.body)
const data = Contact({
    name:name,
    email:email,
    textarea:textarea
})

try {
    const result = await data.save()
    res.json("Request sent successfully")
} catch (error) {
    console.log(error)
}
}

module.exports = {Contactform}