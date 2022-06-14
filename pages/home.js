import Layout from "../Layout/Layout"

export default function Home() {
  return (
    <Layout>
      <h1 className="text-2xl ">Selamat Datang</h1>
      <div className="flex gap-4 bg-gray-200 p-4 rounded-lg">
        <div className="w-full">
          <img className="hover:bg-gray-100 cursor-pointer w-24 h-24" src="/images/persegi.png" />
        </div>
        <div className="w-full">
          <img className="hover:bg-gray-100 cursor-pointer w-24 h-24" src="/images/segitiga.png" />
        </div>
        <div className="w-full">
          <img className="hover:bg-gray-100 cursor-pointer w-24 h-24" src="/images/lingkaran.png" />
        </div>
        <div className="w-full">
          <img className="hover:bg-gray-100 cursor-pointer w-24 h-24" src="/images/kubus.png" />
        </div>
        <div className="w-full">
          <img className="hover:bg-gray-100 cursor-pointer w-24 h-24" src="/images/limas.png" />
        </div>
        <div className="w-full">
          <img className="hover:bg-gray-100 cursor-pointer w-24 h-24" src="/images/tabung.png" />
        </div>
      </div>
    </Layout>
  )
}
