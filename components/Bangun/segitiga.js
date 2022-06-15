import { useState } from "react"
import { saveToDatabase } from "../../pages/api/api";
import { CSVLink} from "react-csv";

export default function Segitiga() {
const [alas, setAlas] = useState(0)
const [tinggi,setTinggi] = useState(0)
const onSubmit = () => {
    saveToDatabase("Limas", 1/2 * alas * tinggi)
}
const data = [{
    "dataCreated": Date.now(),
    "name": localStorage.getItem("name"),
    "school": localStorage.getItem("school"),
    "age": localStorage.getItem("age"),
    "address": localStorage.getItem("address"),
    "phone": localStorage.getItem("phone"),
    "bangun": "Segitiga",
    "hasil": 1/2 * alas * tinggi
}]
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
                    <button className="w-full text-sm bg-blue-200 rounded p-1 hover:bg-blue-300" onClick={onSubmit}>Submit</button> <button className="w-full hover:bg-green-600 text-sm p-1 rounded bg-green-500"><CSVLink data={data} filename={"segitiga.csv"}>Download csv</CSVLink></button>
                </div>
            </div>
        </div>
    )
}