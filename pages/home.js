import Layout from "../Layout/Layout"
import { useState } from "react"
import Persegi from "../components/Bangun/persegi"
import Segitiga from "../components/Bangun/segitiga"
import Lingkaran from "../components/Bangun/lingkaran"
import Kubus from "../components/Bangun/kubus"
import Limas from "../components/Bangun/limas"
import Tabung from "../components/Bangun/tabung"
import { CSVLink, CSVDownload } from "react-csv";

const ISSERVER = typeof window === "undefined";
export default function Home() {

  const [choose, setChoose] = useState({
    name: '',
    image: '',
  })
  const listBangun = [{
    name: 'Persegi',
    image: '/images/persegi.png',
    component: <Persegi />
  }, {
    name: 'Segitiga',
    image: '/images/segitiga.png',
    component: <Segitiga />
  }, {
    name: 'Lingkaran',
    image: '/images/lingkaran.png',
    component: <Lingkaran />
  }, {
    name: 'Kubus',
    image: '/images/kubus.png',
    component: <Kubus />
  }, {
    name: 'Limas',
    image: '/images/limas.png',
    component: <Limas />
  }, {
    name: 'Tabung',
    image: '/images/tabung.png',
    component: <Tabung />
  },
  ]

  return (
    <Layout>
      <h1 className="text-2xl ">Selamat Datang</h1>
      <div className="flex flex-row bg-gray-100">
        <div className="flex w-full flex-col gap-2 w-full  p-2 rounded mx-auto">
          <span className="text-xs  text-gray-700">Silahkan Mengisi Biodata terlebih dahulu</span>
          <div className="flex flex-col md:flex-row gap-2">
            <input type="text" defaultValue={!ISSERVER && localStorage.getItem("name")} className="border rounded p-1" placeholder="Input your name" onChange={(e) => localStorage.setItem("name", e.target.value)} />
            <input type="text" defaultValue={!ISSERVER && localStorage.getItem("school")} className="border rounded p-1" placeholder="Input your school" onChange={(e) => localStorage.setItem("school", e.target.value)} />
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <input type="text" defaultValue={!ISSERVER && localStorage.getItem("age")} className="border rounded p-1" placeholder="Input your age" onChange={(e) => localStorage.setItem("age", e.target.value)} />
            <input type="text" defaultValue={!ISSERVER && localStorage.getItem("address")} className="border rounded p-1" placeholder="Input your address" onChange={(e) => localStorage.setItem("address", e.target.value)} />
          </div>
          <div className="flex flex-col md:flex-row">
            <input type="text" defaultValue={!ISSERVER && localStorage.getItem("phone")} className="border rounded p-1" placeholder="Input your phone number" onChange={(e) => localStorage.setItem("phone", e.target.value)} />
            <div className="w-full" />
          </div>
        </div>
        <div className="w-full">
          {choose.name && (
            choose.component
          )}
        </div>
      </div>
      {/* pilihan bangun datar dan bangun ruang */}
      <p className="text-xs mt-4">Klik Gambar bangun untuk melakukan perhitungan</p>
      <div className="flex gap-4 bg-gray-200 p-4 rounded-lg">
        {listBangun.map((value, index) => (
          <div className={`w-full ${value.name === choose.name && 'bg-white rounded-lg '} p-2`} key={index} onClick={() => setChoose(value)}>
            <img className="hover:bg-gray-100 mx-auto cursor-pointer md:w-24 md:h-24" src={value.image} alt={value.name} />
            <div className="hidden md:flex ">
              <p className="text-center m-auto text-gray-600">
                {value.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
