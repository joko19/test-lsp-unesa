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
      <p className="text-xs">Klik Gambar bangun datar atau bangun ruang untuk melakukan perhitungan</p>
      {/* pilihan bangun datar dan bangun ruang */}
      <div className="flex gap-4 bg-gray-200 p-4 rounded-lg">
        {listBangun.map((value, index) => (
          <div className="w-full" key={index} onClick={() => setChoose(value)}>
            <img className="hover:bg-gray-100 cursor-pointer md:w-24 md:h-24" src={value.image} alt={value.name} />
          </div>
        ))}
      </div>
      {choose.name && (
        choose.component
      )}
    </Layout>
  )
}
