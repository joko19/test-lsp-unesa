import { useState } from "react"
import { saveToDatabase } from "../../pages/api/api"
import { CSVLink} from "react-csv";
import { useToast } from '@chakra-ui/react'

export default function Kubus() {
    const toast = useToast()
    const [sisi, setSisi] = useState(0)
    const onSubmit = () => {
        saveToDatabase("Kubus", sisi * sisi * sisi)
        toast({
            title: 'Data saved',
            status: 'success',
            position: 'top-right',
            duration: 1000,
            isClosable: true,
          })
    }
    const data = [{
        "dataCreated": Date.now(),
        "name": localStorage.getItem("name"),
        "school": localStorage.getItem("school"),
        "age": localStorage.getItem("age"),
        "address": localStorage.getItem("address"),
        "phone": localStorage.getItem("phone"),
        "bangun": "Kubus",
        "hasil": sisi * sisi * sisi
    }]
    return (
        <div className="flex flex-col md:flex-row bg-gray-100 mt-4 p-4 rounded-lg gap-4">
            <div className="flex flex-col">
                <img className="hover:bg-gray-100 cursor-pointer md:w-36 md:h-36" src='/images/kubus.png' />
                <div className="bg-white p-2 text-center rounded">
                    L = s x s x s
                </div>
            </div>
            <div className="flex flex-col" >
                <div className="bg-green-200 mt-1 p-2 text-center">{sisi * sisi * sisi} </div>
                <input type="number" className="p-1 rounded mt-2 overflow-y-auto" placeholder="Masukkan sisi" onChange={(e) => setSisi(e.target.value)} />
                <div className="flex p-1 gap-4">
                    <button className="w-full text-sm bg-blue-200 rounded p-1 hover:bg-blue-300" onClick={onSubmit}>Submit</button> <button className="w-full hover:bg-green-600 text-sm p-1 rounded bg-green-500">
                        <CSVLink data={data} filename={"kubus.csv"}>Download csv</CSVLink></button>
                </div>
            </div>
        </div>
    )
}