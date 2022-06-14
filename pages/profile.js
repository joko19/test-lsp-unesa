import Layout from "../Layout/Layout"

export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Biodata
      </h1>
      <div className="w-full md:w-96 bg-gray-100 p-2 rounded mx-auto mt-8">
        <div className="flex flex-col">
          <label className="text-sm text-gray-700">
            Nama
          </label>
          <input type="text" className="border rounded p-1" placeholder="Input your name" />
        </div>
        <div className="flex flex-col mt-2">
          <label className="text-sm text-gray-700">
            Sekolah
          </label>
          <input type="text" className="border rounded p-1" placeholder="Input your school" />
        </div>
        <div className="flex flex-col mt-2">
          <label className="text-sm text-gray-700">
            Usia
          </label>
          <input type="text" className="border rounded p-1" placeholder="Input your age" />
        </div>
        <div className="flex flex-col mt-2">
          <label className="text-sm text-gray-700">
            Alamat rumah
          </label>
          <input type="text" className="border rounded p-1" placeholder="Input your address" />
        </div>
        <div className="flex flex-col mt-2">
          <label className="text-sm text-gray-700">
            Nomor Telepon
          </label>
          <input type="text" className="border rounded p-1" placeholder="Input your phone number" />
        </div>
        <div className="flex flex-row-reverse">
          <button className="bg-green-500 p-1 rounded mt-2 hover:bg-green-400">Save</button>
        </div>
      </div>
    </Layout>
  )
}
