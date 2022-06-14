import Layout from "../Layout/Layout"
import db from '../db/db.json'
import { useState } from "react"

export default function Home() {
  const [data, setData] = useState(db)
  const tHead = ['Nama', 'Sekolah', 'Usia', 'Alamat', 'Telp', 'Bangun', 'Hasil']
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-center">
        History
      </h1>
      <div className="overflow-auto mt-8">
        <table className="border mx-auto" >
          <tr className="border">
            {tHead.map((value, index) => (
              <th className="w-48 p-3" key={index}>{value}</th>
            ))}
          </tr>
          {data.map((value, index) => (
            <tr className="text-center text-gray-500" key={index}>
              <td className="p-3">{value.name}</td>
              <td className="p-3">{value.school}</td>
              <td className="p-3">{value.age}</td>
              <td className="p-3">{value.address}</td>
              <td className="p-3">{value.phone}</td>
              <td className="p-3">{value.bangun}</td>
              <td className="p-3">{value.hasil}</td>
            </tr>
          ))}
        </table>
      </div>
    </Layout>
  )
}
