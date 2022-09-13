import React,{useEffect,useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import './Summarizethedata.css'
import ImgAsset from '../public'

const axios = require('axios')

// const ConditionalLink = ({ children, to, condition }) => (condition)
//       ? <Link to={to}><button id='LinkToGraphs'>{children}</button></Link>
//       : <button id='LinkToGraphs' disabled={true}>{children}</button>;

export default function Summarizethedata (props) {
	const [data,setData]=useState([])
	const getData = async (s) => {
			const response = await axios.get(s);
			const theData = response.data
			setData(e=>theData)
		}
	const dataInitialized=useRef(0)
	const string="https://czp2w6uy37-vpce-0bdf8d65b826a59e3.execute-api.us-east-1.amazonaws.com/test/Table?"+props.match.params.searchdetail
	useEffect(()=>{
		getData(string)
	},[])
	useEffect(()=>{
		if (toString({})!==toString(props)&& Object.keys(data)[0]!=="message")
		dataInitialized.current=1},[data])
	
	
	
	return (
		<div className='Datasetselectionforanalysis_Datasetselectionforanalysis'>
			{/* <ConditionalLink /> */}
			<div className="Table">
				{dataInitialized.current===1 ? (<table>
					<tr>
						<th>Gender</th>
						<th>Age</th>
						<th>Questionnaire</th>
					</tr>
					{data.map((val, key) => 
					{return (<>
					<tr key={key}>
						 <td>{val.gender}</td>
						 <td>{val.age}</td>
						 <td>{val.questionnaire_response.filter((item, index)=>(index<1)).map(e=>e.questionnaire_id)}</td>
					</tr>
					{val.questionnaire_response.filter((item, index)=>(index>0)).map((item1, index1)=>{
						return (<tr key={index1}>
						<td>{""}</td>
						<td>{""}</td>
						<td>{item1.questionnaire_id}</td>
				   </tr>)
					})}
					<tr className='Lasttr'><td>{""}</td>
						<td>{""}</td>
						<td>{"_"}</td></tr></>)}
		
					)

				}
				</table>) : (<div id="LoadingTable">Loading...</div>)}
			</div>
			<span className='Definedesiredgroup'>{dataInitialized.current===1 ? (data.length+" Patients") : "Loading"}</span>
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