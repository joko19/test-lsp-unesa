import Layout from "../Layout/Layout"
import { useState } from "react";
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function Home() {
  const [productSoldDonut, setproductSoldDonut] = useState({
    options: {
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
            //   name: {
            //     ...
            // },
            //   value: {
            //     ...
            // }
            }
          }
        }
      }
    },
    series: [44, 55, 41],
    labels: ['Persegi', 'Segitiga', 'Lingkaran'],
    chartOptions: {
      labels: ['Apple', 'Mango', 'Orange', 'Watermelon']
    }
  })
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-center underline">
        Statistic
      </h1>
      <div className="flex">
        <div>
          <Chart options={productSoldDonut.options} series={productSoldDonut.series} type="donut" width="100%" />
        </div>
        <div>

        </div>
      </div>
    </Layout>
  )
}
