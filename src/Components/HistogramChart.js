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
const HistogramChart= ({
  // data,data2,
   patientGroups,numberOfGroups,groupArray}) =>  {
  //data is patients, data2 is questionnaires
    const [data,setData]=useState([])
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
        let zeroArray=[]
        let array=[["Questionnaire"]]
        let array2=[]
        for (let i=1;i<=numberOfGroups;i++){
          array[0].push("Group "+i)
          zeroArray.push(0)
        }
        
        for (let i=0;i<groupArray[0].questionnaires.length; i++){
              array.push([groupArray[0].questionnaires[i].questionnaire_name, ...zeroArray])
            }
        // console.log(data) 
        for (let i=0;i<numberOfGroups;i++){
        for (let j=0;j<patientGroups[i].length; j++){
          for (let k=0;k<patientGroups[i][j].questionnaire_response.length;k++){
            for (let l=0;l<groupArray[0].questionnaires.length;l++){
              if (groupArray[0].questionnaires[l].questionnaire_id===patientGroups[i][j].questionnaire_response[k].questionnaire_id){
                array[l+1][i+1]=array[l+1][i+1]+1
                break
              }
            }
          }
        }}
        array2.push(array[0])
        for (let i=1;i<groupArray[0].questionnaires.length+1;i++){
          for (let j=1; j<numberOfGroups+1;j++){
            if (array[i][j]>0){
              array2.push(array[i])
              break
            }
          }
        }
        setData(e=>array2)


    },[])

    if (data.length===0){
      return null}
    const length=((500+(data.length-1>8 ? (data.length-9) : 0)*100))
    return (
      <div className="container mt-5">
        <Chart
         chartType="BarChart"
         width="600px"
         height={length+"px"}
         data={data}
         options={options}
    />
      </div>
    )

}
export default HistogramChart