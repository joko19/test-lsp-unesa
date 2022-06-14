import Layout from "../Layout/Layout"
import db from './api/db.json'
import { useState } from "react"
import { dbInstance } from "../config/fire-config";
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { useEffect } from "react";

export default function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    getDocs(dbInstance)
      .then((data) => {
        setData(data.docs.map((item) => {
          console.log(item.data())
          return {...item.data()}
        }));
      })
  }, [])

  console.log(data)
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
              <td className="p-3">{value.data.name}</td>
              <td className="p-3">{value.data.school}</td>
              <td className="p-3">{value.data.age}</td>
              <td className="p-3">{value.data.address}</td>
              <td className="p-3">{value.data.phone}</td>
              <td className="p-3">{value.data.bangun}</td>
              <td className="p-3">{value.data.hasil}</td>
            </tr>
          ))}
        </table>
      </div>
    </Layout>
  )
}
