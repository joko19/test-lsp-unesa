import { useState } from "react"
import {dbInstance } from '../../config/fire-config'
import {addDoc } from 'firebase/firestore';

export default function Segitiga() {
const [alas, setAlas] = useState(0)
const [tinggi,setTinggi] = useState(0)

const data = {
    "name": "Joko",
    "school": "smkn 1 mojokerto",
    "age": 17,
    "address": "Sidoarjo",
    "phone": "085123123123",
    "bangun": "Segitiga",
    "hasil": 1/2 * alas * tinggi
}
const onSubmit = () => {
    console.log("hello world")
    console.log(data)
    addDoc(dbInstance, {
        data
    })
}
    return (
        <div className="flex flex-col md:flex-row bg-gray-100 mt-4 p-4 rounded-lg gap-4">
            <div className="flex flex-col">
                <img className="hover:bg-gray-100 cursor-pointer md:w-36 md:h-36" src='/images/segitiga.png' />
                <div className="bg-white p-2 text-center rounded">
                L = ½ x a x t
                </div>
            </div>
            <div className="flex flex-col" >
                <div className="bg-green-200 mt-1 p-2 text-center">{1/2 * alas * tinggi} </div>
                <input type="number" className="p-1 rounded mt-2 overflow-y-auto" placeholder="Masukkan alas" onChange={(e) => setAlas(e.target.value)} />
                <input type="number" className="p-1 rounded mt-2 overflow-y-auto" placeholder="Masukkan tinggi" onChange={(e) => setTinggi(e.target.value)} />
                <div className="flex p-1 gap-4">
                    <button className="w-full text-sm bg-blue-200 rounded p-1 hover:bg-blue-300" onClick={onSubmit}>Submit</button> <button className="w-full hover:bg-green-600 text-sm p-1 rounded bg-green-500">Download csv</button>
                </div>
            </div>
        </div>
    )
}