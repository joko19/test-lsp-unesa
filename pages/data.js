import Layout from "../Layout/Layout"
import { useState } from "react"
import { dbInstance } from "../config/fire-config";
import { collection, addDoc, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { useEffect } from "react";

function dynamicSort(property) {
  var sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a, b) {
    /* next line works with strings and numbers, 
     * and you may want to customize it to your needs
     */
    var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    return result * sortOrder;
  }
}

export default function Home() {
  const [data, setData] = useState([])
  const tHead = ['Nama', 'Sekolah', 'Usia', 'Alamat', 'Telp', 'Bangun', 'Hasil']

  useEffect(() => {
    getDocs(dbInstance)
      .then((data) => {
        setData(data.docs.map((item) => {
          // console.log(item.data())
          return { ...item.data() }
        }));
      })
  }, [])

  const sorting = () => {

  }


  // var sortedObjs = _.sortBy(data, 'name');
  // console.log(sortedObjs)

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
