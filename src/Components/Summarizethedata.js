import React,{useEffect,useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import './Summarizethedata.css'
import ImgAsset from '../public'
import { max } from 'moment'

const axios = require('axios')

const ConditionalLink = ({ children, to, condition }) => (condition)
      ? <Link to={to}><button id='LinkToGraphs'>{children}</button></Link>
      : <button id='LinkToGraphs' disabled={true}>{children}</button>;



export default function Summarizethedata (props) {
	const [data,setData]=useState([])
	const maxQuestionnaires=useRef(0)
	const [to,setTo]=useState({})

	// const getData = async (number,s) => { //important: have to check why this wont work
	// 		const response = await axios.get(s);
	// 		const theData = response.data
	// 		setData(e=>(e.map((item,index)=>{
	// 			if (index===number){
	// 				return theData
	// 			}
	// 			return item
	// 		})))
	// 		// array.push(theData)
	// 		return 1
		// }
		// const getData = async (arr,s,number) => {
		// 	if (number>numberOfValidGroups-1){
		// 		return}
		// 	const response = await axios.get(s);
		// 	const theData = response.data
		// 	// array[number]=theData
		// 	arr.current = [...theData];
		// }

	if (props.location===undefined)
	return (<div>Should only access this page through "data select for analysis"</div>)
	if (props.location.groupArray===undefined)
	return (<div>Should only access this page through "data select for analysis"</div>)
	const numberOfValidGroups=useRef(0)
	const [dataInitialized, setDataInitialized]=useState(false)
	// let string="https://czp2w6uy37-vpce-0bdf8d65b826a59e3.execute-api.us-east-1.amazonaws.com/test/Table?"
	// if (props.match.params.searchdetail!==""){
	// 	string="https://czp2w6uy37-vpce-0bdf8d65b826a59e3.execute-api.us-east-1.amazonaws.com/test/Table?"+props.match.params.searchdetail
	// }
	useEffect(()=>{

		if (props.location!==undefined && props.location.groupArray!==undefined){
			if (props.location.groupArray[props.location.groupArray.length-1]===1){
				numberOfValidGroups.current=props.location.groupArray.length-1
			}
			else {
				numberOfValidGroups.current=props.location.groupArray.length
			}
			maxQuestionnaires.current=[]
			let promisesArray=[]
			for (let i=0;i<numberOfValidGroups.current; i++){
				maxQuestionnaires.current.push(0)
				promisesArray.push(0)
				// promisesArray[i]=getData(i, props.location.groupArray[i].link)
				promisesArray[i]=axios.get(props.location.groupArray[i].link)
			}
			Promise.all(promisesArray).then((results)=>{
				for (let i=0;i<results.length;i++){
					results[i]=results[i].data
					
				}
				// console.log(results)
				// console.log(results[0])
				setData(results)
				})
			
		// 	const biggerOrSmaller=(questionnaireScore,bool, score)=>{
		// 		if (bool===true){
		// 			return (questionnaireScore>=score)
		// 		}
		// 		else return (questionnaireScore<=score)
		// 	}
		// 	let toAddPatient=true
		// 	for (let group=0;group<numberOfValidGroups.current;group++){ //     
		// 		console.log("1st loop group="+group)
		// 		// console.log(array[group].length)
		// 	for (let index=0 ;index<(array[group]).length;index++){
		// 		console.log("2nd loop index="+index)
		// 		toAddPatient=true
		// 		for (let index2=0;index2<array[group][index].questionnaire_response.length;index2++){
		// 			console.log("3rd loop index2="+index2)
		// 			let index3=0
		// 			for (index3=0;index3<props.location.groupArray[group].relevantQuestionnaires.length;index3++){
		// 				console.log("4th loop index3="+index3)
		// 				if (props.location.groupArray[group].questionnaires[props.location.groupArray[group].relevantQuestionnaires[index3]].questionnaire_id
		// 					===array[group][index].questionnaire_response[index2].questionnaire_id){
		// 						break
		// 					}
		// 			}
		// 			let filter=biggerOrSmaller(array[group][index].questionnaire_response[index2].score,
		// 				props.location.groupArray[group].greaterThanArray[props.location.groupArray[group].relevantQuestionnaires[index3]],
		// 				props.location.groupArray[group].questionnaireScoreArray[props.location.groupArray[group].relevantQuestionnaires[index3]])
		// 			if (filter===false){
		// 				toAddPatient=false
		// 				break
		// 			}
					
		// 		}
		// 		if (toAddPatient===true){
		// 			array2[group].push(0)
		// 			console.log(array2[group])
		// 			array2[group][array2[group].length-1]=array[group][index]
		// 		}


		// 	}
		// 	array[group]=1
		// }
		// 	// for (let i=0;i<data.length;i++){
		// 	// 	questionnairePresenceArray=[...zeroArray]
		// 	// 	obj={
		// 	// 		patient_id:data[i].patient_id,
		// 	// 		gender:data[i].gender,
		// 	// 		age:data[i].age,
		// 	// 		questionnaire_response:[]
		// 	// 	}
		// 	// 	array.push(obj)
		// 	// 	for (let j=0;j<data[i].questionnaire_response.length;i++){
		// 	// 		for (let k=0;k<props.location.questionnaires.length;k++){
		// 	// 			if (props.location.questionnaires[k].questionnaire_id===
		// 	// 				data[i].questionnaire_response[j].questionnaire_id){
		// 	// 					if (questionnairePresenceArray[k]===0){
		// 	// 						questionnairePresenceArray[k]=1}
		// 	// 					break
		// 	// 			}
		// 	// 		}
		// 	// 	}
		// 	// }
		// 	for (let i=0;i<numberOfValidGroups.current.length;i++){
		// 	for (let l=0;l<array2[i].length;l++){ //fix this
		// 		for (let m=0;m<array2[i][l].questionnaire_response.length;m++){
		// 			if (m+1>maxQuestionnaires.current[i]){
		// 				maxQuestionnaires.current[i]=m+1
		// 			}
		// 		}
		// 	}}
			// setData(e=>array)			
		}

	},[])

	useEffect(()=>{
		let array2=[]
		if (props.location!==undefined && props.location.groupArray!==undefined && data.length>0 && dataInitialized===false){
			console.log(data[0])
			const biggerOrSmaller=(questionnaireScore,bool, score)=>{
				if (bool===true){
					return (questionnaireScore>=score)
				}
				else return (questionnaireScore<=score)
			}
			for (let m=0;m<numberOfValidGroups.current;m++){
				array2.push(0)
				array2[m]=[]
			}
			let toAddPatient=true
			for (let group=0;group<numberOfValidGroups.current;group++){ //     
			for (let index=0 ;index<(data[group]).length;index++){
				toAddPatient=true
				for (let index2=0;index2<data[group][index].questionnaire_response.length;index2++){
					let index3=0
					for (index3=0;index3<props.location.groupArray[group].relevantQuestionnaires.length;index3++){
						if (props.location.groupArray[group].questionnaires[props.location.groupArray[group].relevantQuestionnaires[index3]].questionnaire_id
							===data[group][index].questionnaire_response[index2].questionnaire_id){
								break
							}
					}
					let filter=biggerOrSmaller(data[group][index].questionnaire_response[index2].score,
						props.location.groupArray[group].greaterThanArray[props.location.groupArray[group].relevantQuestionnaires[index3]],
						props.location.groupArray[group].questionnaireScoreArray[props.location.groupArray[group].relevantQuestionnaires[index3]])
					if (filter===false){
						toAddPatient=false
						break
					}
					
				}
				if (toAddPatient===true){
					array2[group].push(0)
					array2[group][array2[group].length-1]=data[group][index]
				}


			}
		}
			for (let i=0;i<numberOfValidGroups.current;i++){
			for (let l=0;l<array2[i].length;l++){ //fix this
				for (let m=0;m<array2[i][l].questionnaire_response.length;m++){
					if (m+1>maxQuestionnaires.current[i]){
						maxQuestionnaires.current[i]=m+1
					}
				}
			}}
			setData(e=>array2)
			setTo({pathname: "/histogram/something",
			groupArray:props.location.groupArray,
			numberOfGroups:numberOfValidGroups.current,
			patientGroups:array2 //patientGroups numberOfGroups groupArray
		})
			setDataInitialized(true)
			
			// console.log(array2)
		}
	},[data])

	// useEffect(()=>{
	// 	if (props.location!==undefined && props.location.groupArray!==undefined ){
	// 		let array2=[[],[],[],[],[]]
	// 		const biggerOrSmaller=(questionnaireScore,bool, score)=>{
	// 			if (bool===true){
	// 				return (questionnaireScore>=score)
	// 			}
	// 			else return (questionnaireScore<=score)
	// 		}
	// 		let toAddPatient=true
	// 		console.log(array.current)
	// 		console.log(array.current[0])
	// 		for (let group=0;group<numberOfValidGroups.current;group++){ //     
	// 			console.log("1st loop group="+group)
	// 			// console.log(array[group].length)
	// 		for (let index=0 ;index<(array.current[group]).length;index++){
	// 			console.log("2nd loop index="+index)
	// 			toAddPatient=true
	// 			for (let index2=0;index2<array.current[group][index].questionnaire_response.length;index2++){
	// 				console.log("3rd loop index2="+index2)
	// 				let index3=0
	// 				for (index3=0;index3<props.location.groupArray[group].relevantQuestionnaires.length;index3++){
	// 					console.log("4th loop index3="+index3)
	// 					if (props.location.groupArray[group].questionnaires[props.location.groupArray[group].relevantQuestionnaires[index3]].questionnaire_id
	// 						===array.current[group][index].questionnaire_response[index2].questionnaire_id){
	// 							break
	// 						}
	// 				}
	// 				let filter=biggerOrSmaller(array.current[group][index].questionnaire_response[index2].score,
	// 					props.location.groupArray[group].greaterThanArray[props.location.groupArray[group].relevantQuestionnaires[index3]],
	// 					props.location.groupArray[group].questionnaireScoreArray[props.location.groupArray[group].relevantQuestionnaires[index3]])
	// 				if (filter===false){
	// 					toAddPatient=false
	// 					break
	// 				}
					
	// 			}
	// 			if (toAddPatient===true){
	// 				array2[group].push(0)
	// 				console.log(array2[group])
	// 				array2[group][array2[group].length-1]=array.current[group][index]
	// 			}


	// 		}
	// 		array.current[group]=1
	// 	}
	// 		// for (let i=0;i<data.length;i++){
	// 		// 	questionnairePresenceArray=[...zeroArray]
	// 		// 	obj={
	// 		// 		patient_id:data[i].patient_id,
	// 		// 		gender:data[i].gender,
	// 		// 		age:data[i].age,
	// 		// 		questionnaire_response:[]
	// 		// 	}
	// 		// 	array.push(obj)
	// 		// 	for (let j=0;j<data[i].questionnaire_response.length;i++){
	// 		// 		for (let k=0;k<props.location.questionnaires.length;k++){
	// 		// 			if (props.location.questionnaires[k].questionnaire_id===
	// 		// 				data[i].questionnaire_response[j].questionnaire_id){
	// 		// 					if (questionnairePresenceArray[k]===0){
	// 		// 						questionnairePresenceArray[k]=1}
	// 		// 					break
	// 		// 			}
	// 		// 		}
	// 		// 	}
	// 		// }
	// 		for (let i=0;i<numberOfValidGroups.current.length;i++){
	// 		for (let l=0;l<array2[i].length;l++){ //fix this
	// 			for (let m=0;m<array2[i][l].questionnaire_response.length;m++){
	// 				if (m+1>maxQuestionnaires.current[i]){
	// 					maxQuestionnaires.current[i]=m+1
	// 				}
	// 			}
	// 		}}
	// 		// console.log(array2)
	// 		setData(e=>array2)
	// 		setDataInitialized(true)
	// 	}

	// }, [data])
	// let maxArray=[]
	// 	for (let index=0;index<maxQuestionnaires.current; index++){
	// 		maxArray.push(0)
	// 	}
	const createQuestionnaireThTags=(group)=>{
		let Tags=[]
		if (maxQuestionnaires.current[group]>0){
			Tags.push(<th>Questionnaire</th>)
		}
		for (let index=1;index<maxQuestionnaires.current[group];index++){
			Tags.push(<th>{"Questionnaire "+(index+1)}</th>)
		}
		return Tags
	}
	const createQuestionnaireTdTags=(responses)=>{
		let Tags=[]
		let index;
		for (index=0;index<responses.length;index++){
			Tags.push(<td>{responses[index].questionnaire_name}</td>)
		}
		for (;index<maxQuestionnaires.current;index++){
			Tags.push(<td>{"--"}</td>)
		}
		return Tags

	}
	// useEffect(()=>{
	// 	let array=[]
	// 	let zeroArray=[]
	// 	let obj;
	// 	for (let a=0;a<props.location.questionnaires.length;a++){
	// 		zeroArray.push(0)
	// 	}
	// 	let questionnairePresenceArray=[]
	// 	if ( Array.isArray(data) && data.length>0 && dataInitialized===false)
	// 	{
	// 		const biggerOrSmaller=(questionnaireScore,bool, score)=>{
	// 			if (bool===true){
	// 				return (questionnaireScore>=score)
	// 			}
	// 			else return (questionnaireScore<=score)
	// 		}
	// 		let toAddPatient=true
	// 		for (let index=0;index<data.length;index++){
	// 			toAddPatient=true
	// 			for (let index2=0;index2<data[index].questionnaire_response.length;index2++){
	// 				let index3=0
	// 				for (index3=0;index3<props.location.relevantQuestionnaires.length;index3++){
	// 					if (props.location.questionnaires[props.location.relevantQuestionnaires[index3]].questionnaire_id
	// 						===data[index].questionnaire_response[index2].questionnaire_id){
	// 							break
	// 						}
	// 				}
	// 				let filter=biggerOrSmaller(data[index].questionnaire_response[index2].score,
	// 					props.location.greaterThanArray[props.location.relevantQuestionnaires[index3]],
	// 					props.location.questionnaireScoreArray[props.location.relevantQuestionnaires[index3]])
	// 				if (filter===false){
	// 					toAddPatient=false
	// 					break
	// 				}
					
	// 			}
	// 			if (toAddPatient===true){
	// 				array.push(data[index])
	// 			}


	// 		}
	// 		setData(e=>array)
	// 		// for (let i=0;i<data.length;i++){
	// 		// 	questionnairePresenceArray=[...zeroArray]
	// 		// 	obj={
	// 		// 		patient_id:data[i].patient_id,
	// 		// 		gender:data[i].gender,
	// 		// 		age:data[i].age,
	// 		// 		questionnaire_response:[]
	// 		// 	}
	// 		// 	array.push(obj)
	// 		// 	for (let j=0;j<data[i].questionnaire_response.length;i++){
	// 		// 		for (let k=0;k<props.location.questionnaires.length;k++){
	// 		// 			if (props.location.questionnaires[k].questionnaire_id===
	// 		// 				data[i].questionnaire_response[j].questionnaire_id){
	// 		// 					if (questionnairePresenceArray[k]===0){
	// 		// 						questionnairePresenceArray[k]=1}
	// 		// 					break
	// 		// 			}
	// 		// 		}
	// 		// 	}
	// 		// }
	// 		for (let l=0;l<data.length;l++){
	// 			for (let m=0;m<data[l].questionnaire_response.length;m++){
	// 				if (m+1>maxQuestionnaires.current){
	// 					maxQuestionnaires.current=m+1
	// 				}
	// 			}
	// 		}
	// 		setDataInitialized(true)
	// 	}
	// 	},[data])
	return (
		<div className='Datasetselectionforanalysis_Datasetselectionforanalysis'>
			<ConditionalLink  to={to} condition={dataInitialized && Object.keys(to).length!==0} children={"Graphs Display"} />
			<div className="Tables">
				{data.map((array,index)=>
				(dataInitialized===true ? (<div key={index}><div>{data[index].length+" Patients"}</div><table style={{width:(800+250*(maxQuestionnaires.current[index]-1))}}>
					<tr>
						<th>Id</th>
						<th>Gender</th>
						<th>Age</th>
						{createQuestionnaireThTags(index)}
					</tr>
					{data[index].map((val, key) => 
					{return (
					<tr key={key}>
						<td>{val.patient_id}</td>
						<td>{val.gender}</td>
						<td>{val.age}</td>
						{createQuestionnaireTdTags(val.questionnaire_response)}
					</tr>)}
		
					)

				}
				</table></div>) : (<div><div>LoadingTable</div><div id="LoadingTable">Loading...</div></div>)))}
			</div>
			{/* <span className='Definedesiredgroup'>{dataInitialized===true ? (data.length+" Patients") : "Loading"}</span> */}
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