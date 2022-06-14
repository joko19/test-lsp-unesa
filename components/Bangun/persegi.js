import { useState } from "react"

export default function Persegi() {
    const [sisi, setSisi] = useState(0)

    const onSubmit = () => {
        setLuas(sisi * sisi)
    }

    return (
        <div className="flex bg-gray-100 mt-4 p-4 rounded-lg gap-4">
            <div>
                <img className="hover:bg-gray-100 cursor-pointer md:w-36 md:h-36" src='/images/persegi.png' />
                <div className="bg-white p-2 text-center rounded">
                    L = s x s
                </div>
            </div>
            <div className="flex flex-col" >
                <div className="bg-green-200 mt-1 p-2 text-center">{sisi * sisi} </div>
                <input type="number" className="p-1 rounded mt-2 overflow-y-auto" placeholder="Masukkan sisi" onChange={(e) => setSisi(e.target.value)} />
                <div className="flex p-1 gap-4">
                    <button className="w-full text-sm bg-blue-200 rounded p-1 hover:bg-blue-300">Save to Database</button> <button className="w-full hover:bg-green-600 text-sm p-1 rounded bg-green-500">Save to CSV</button>
                </div>
            </div>
        </div>
    )
}