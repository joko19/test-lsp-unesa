import Layout from "../Layout/Layout"
import { useState } from "react"
import Persegi from "../components/Bangun/persegi"
import Segitiga from "../components/Bangun/segitiga"
import Lingkaran from "../components/Bangun/lingkaran"
import Kubus from "../components/Bangun/kubus"
import Limas from "../components/Bangun/limas"
import Tabung from "../components/Bangun/tabung"

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
      <p className="text-xs">Klik Gambar bangun untuk melakukan perhitungan</p>
      {/* pilihan bangun datar dan bangun ruang */}
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
      {choose.name && (
        choose.component
      )}
    </Layout>
  )
}
