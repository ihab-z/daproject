import React, {useState,useEffect,useRef } from 'react'
import Chart from 'react-google-charts'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


// const HistogramData = [
//   ['Quarks', 'Leptons', 'Gauge Bosons', 'Scalar Bosons'],
//   [2 / 3, -1, 0, 0],
//   [2 / 3, -1, 0, null],
//   [2 / 3, -1, 0, null],
//   [-1 / 3, 0, 1, null],
//   [-1 / 3, 0, -1, null],
//   [-1 / 3, 0, null, null],
//   [-1 / 3, 0, null, null],
// ]
// const chartOptions = {
//   title: 'Charges of subatomic particles',
//   legend: { position: 'top', maxLines: 2 },
//   colors: ['#5C3292', '#1A8763', '#871B47', '#999999'],
//   interpolateNulls: false,
// }
const HistogramChart= ({data,data2}) =>  {
    const [data3,setData3]=useState([])
    const options = {
        title: "Questionnaires filled",
        chartArea: { width: "50%" },
        hAxis: {
          title: "Patients",
          minValue: 0,
        },
        vAxis: {
          title: "Questionnaire",
        },
      };
          
    useEffect(()=>{
        // let array=[[]]
        // for (let i=0;i<data2.length; i++){
        //     array[0].push(data2[i].questionnaire_name)
        // }
        // for (let arr=[], k=0; k<data.length;k++){
            
        // }
        let array=[["Questionnaire" , "Patients"]]
        for (let i=0;i<data2.length; i++){
              array.push(data2[i].questionnaire_name)
            }
        for (let j=0;j<data.length; j++){
          for (let k=0;k<data[j].questionnaire_response.length;k++){
            for (let l=0;l<data2.length;l++){
              if (data2[l].questionnaire_id===data[j].questionnaire_response[k]){
                array[l+1][1]=array[l+1][1]+1
                break
              }
            }
          }
        }
        setData3(e=>array)


    },[])

    if (data3.length===0){
      return null}
    const length=((500+(data3.length-1>8 ? (data3.length-9) : 0)*100))
    return (
      <div className="container mt-5">
        <h2>React Histogram Chart Example</h2>
        <Chart
         chartType="BarChart"
         width="100%"
         height={length+"px"}
         data={data3}
         options={options}
    />
      </div>
    )

}
export default HistogramChart