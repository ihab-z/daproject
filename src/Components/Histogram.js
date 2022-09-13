import React,{useState,useEffect, useRef} from 'react'
import './Histogram.css'
import ImgAsset from '../public'
import HistogramChart from './HistogramChart'

const axios = require('axios')

export default function Histogram () {
	const [data,setData]=useState([])
	const[data2,setData2]=useState([])
	const getData = async (s) => {
			const response = await axios.get(s);
			const theData = response.data
			setData(e=>theData)
		}
	const getData2 = async (s) => {
			const response = await axios.get(s);
			const theData2 = response.data
			setData2(e=>theData2)
		}
	const dataInitialized=useRef(0)
	console.log(toString([])===toString([]))
	const string="https://czp2w6uy37-vpce-0bdf8d65b826a59e3.execute-api.us-east-1.amazonaws.com/test/Table?age.gt=0"
	const string2="https://czp2w6uy37-vpce-0bdf8d65b826a59e3.execute-api.us-east-1.amazonaws.com/test/get_names_list?table=questionnaire"
	useEffect(()=>{
		getData(string)
		getData2(string2)
	},[])
	useEffect(()=>{
		if (Object.keys(data)[0]!=="message")
		dataInitialized.current++},[data])
	useEffect(()=>{dataInitialized.current++},[data2])
	const chart=(dataInitialized.current===2 ? (<div id="Chart" >
	<HistogramChart data={data} data2={data2} />
</div>) : null)
	
	return (
		<div className='Datasetselectionforanalysis_Datasetselectionforanalysis'>
			{chart}
			<span className='Definedesiredgroup'>Select dataset for analysis</span>
			<div className='Header'>
				<div className='Rectangle'/>
				<div className='IconLogOut'>
					<div className='Frame'>
						<div className='Group'>
							<img className='Vector' src = {ImgAsset.Datasetselectionforanalysis_Vector} />
							<img className='Vector_1' src = {ImgAsset.Datasetselectionforanalysis_Vector_1} />
						</div>
					</div>
				</div>
				<div className='IconCircleFill'>
					<img className='Mask' src = {ImgAsset.Datasetselectionforanalysis_Mask} />
				</div>
				<div className='ElmindaLogo'>
					<div className='Group_1'>
						<img className='Vector_2' src = {ImgAsset.Datasetselectionforanalysis_Vector_2} />
					</div>
				</div>
				<span className='RichardMcClintock'>Richard McClintock</span>
				<span className='Elminda'>Elminda</span>
			</div>
			
		</div>
	)
	
}