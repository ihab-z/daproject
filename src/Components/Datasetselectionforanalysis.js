import './Menu.css'
import React, {Component , useState,useRef, useEffect } from 'react'
import './Datasetselectionforanalysis.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import {useMenuSettings} from './useMenuSettings'
import { min } from 'moment'

const axios = require('axios')

const Dropdown4 = ({chosenGender, chooseGender , dropdown, depthLevel, ancestorMethod }) => {  
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
	depthLevel=1
	const array=[0, 1]
 return (
  <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
   {array.map((item) => (
    <MenuItems4 gender={item}  chooseGender={chooseGender}
	chosenGender={chosenGender}  depthLevel={depthLevel} ancestorMethod={ancestorMethod} key={item} />
   ))}
  </ul>
 )
}





const MenuItems4 = ({chosenGender, chooseGender, gender,  depthLevel, ancestorMethod}) => {
    // const [dropdown, setDropdown] = useState(false);
	let genderString
	if (depthLevel===0){
		genderString="None"
		if (chosenGender===0)
		genderString="Male"
		if (chosenGender===1)
		genderString="Female"
	}
	else{
		if (gender==0)
		genderString="Male"
		else
		genderString="Female"
	}

	const {dropdown, setDropdown, ref, onMouseEnter }=useMenuSettings()
  const method=()=>{depthLevel===0 ? setDropdown(false) : ancestorMethod()}
  const chosen= ()=>{
    method()
	if (chosenGender!==gender)
	chooseGender(gender)
  }

  return (
    <li className="menu-items" ref={ref}
    onMouseEnter={onMouseEnter}
//    onMouseLeave={onMouseLeave}
      >{depthLevel==0 ? (
        <>
        <button type="button" 
        aria-haspopup="menu"
          aria-expanded={dropdown ? "true" : "false"}
          onClick={() => setDropdown((prev) => !prev)}>
            {genderString}<span className="arrow" />
        </button>
        <Dropdown4 chosenGender={chosenGender} chooseGender={chooseGender}  
		depthLevel={0} 
        ancestorMethod={method}
          dropdown={dropdown} />
        </>
      ) : (
        <button type="button"
        onClick={chosen}
        >{chosenGender===gender ? <span>&#10003;</span> : <span />}{genderString}</button>
      )}
    </li>
  );
};


const Dropdown3 = ({chosenNumber, chooseSite,	data , dropdown, depthLevel, ancestorMethod }) => {
    depthLevel =1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
 return (
  <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
   {data.map((item,index) => (
    <MenuItems3 siteNumber={index} chooseSite={chooseSite} siteName={item}
	  chosenNumber={chosenNumber}  depthLevel={depthLevel} ancestorMethod={ancestorMethod} key={index} />
   ))}
  </ul>
 )
}



const MenuItems3 = ({chosenNumber, chosenName, chooseSite, siteNumber, siteName,
	 data,  depthLevel, ancestorMethod}) => {
    // const [dropdown, setDropdown] = useState(false);
	const {dropdown, setDropdown, ref, onMouseEnter }=useMenuSettings()
  const method=()=>{depthLevel===0 ? setDropdown(false) : ancestorMethod()}
  const chosen= ()=>{
    method()
	chooseSite(siteNumber)
  }

  return (
    <li className="menu-items" ref={ref}
    onMouseEnter={onMouseEnter}
//    onMouseLeave={onMouseLeave}
      >{depthLevel==0 ? (
        <>
        <button type="button" 
        aria-haspopup="menu"
          aria-expanded={dropdown ? "true" : "false"}
          onClick={() => setDropdown((prev) => !prev)}>
            {chosenName}<span className="arrow" />
        </button>
        <Dropdown3 chosenNumber={chosenNumber} chooseSite={chooseSite}
	 data={data}  depthLevel={0} 
        ancestorMethod={method}
          dropdown={dropdown} />
        </>
      ) : (
        <button type="button"
        onClick={chosen}
        >{chosenNumber===siteNumber ? <span>&#10003;</span> : <span />}{siteName}</button>
      )}
    </li>
  );
};
//
///
const Dropdown2 = ({addConditionBox, data2Array, numberOfBoxes , dropdown, depthLevel, ancestorMethod }) => {
    depthLevel =1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
 return (
  <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
   {data2Array.map((item, index) => (
    <MenuItems2 conditionBoxPresent={item[1]} conditionName={item[0]} conditionNumber={index} addConditionBox={addConditionBox}  depthLevel={depthLevel} ancestorMethod={ancestorMethod} key={index} />
   ))}
  </ul>
 );
};





const MenuItems2 = ({addConditionBox, data2Array, numberOfConditionBoxes,  depthLevel,
	 conditionNumber, conditionName, conditionBoxPresent, ancestorMethod }) => {
    // const [dropdown, setDropdown] = useState(false);
	const {dropdown, setDropdown, ref, onMouseEnter }=useMenuSettings()
  const method=()=>{depthLevel===0 ? setDropdown(false) : ancestorMethod()}
  const chosen= ()=>{
    method()
	if (!conditionBoxPresent){
		addConditionBox(conditionNumber)
	}
  }

  return (
    <li className="menu-items" ref={ref}
    onMouseEnter={onMouseEnter}
//    onMouseLeave={onMouseLeave}
      >{depthLevel==0 ? (
        <>
        <button type="button" 
        aria-haspopup="menu"
          aria-expanded={dropdown ? "true" : "false"}
          onClick={() => setDropdown((prev) => !prev)}>
            {"Total = "}{numberOfConditionBoxes}<span className="arrow" />
        </button>
        <Dropdown2 addConditionBox={addConditionBox} data2Array={data2Array} numberOfConditionBoxes={numberOfConditionBoxes}  depthLevel={0} 
        ancestorMethod={method}
          dropdown={dropdown} />
        </>
      ) : (
        <button type="button"
        onClick={chosen}
        >{conditionBoxPresent ? <span>&#10003;</span> : <span />}{conditionName}</button>
      )}
    </li>
  );
};




const Dropdown = ({addBox, dataArray, numberOfBoxes , dropdown, depthLevel, ancestorMethod }) => {
    depthLevel =1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
 return (
  <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
   {dataArray.map((key, index) => (
    <MenuItems boxPresent={key[1]} questionnaireName={key[0]} questionnaireNumber={index} addBox={addBox}  depthLevel={depthLevel} ancestorMethod={ancestorMethod} key={index} />
   ))}
  </ul>
 );
};





const MenuItems = ({addBox, dataArray, questionnaireNumber, questionnaireName, boxPresent ,numberOfBoxes, depthLevel, ancestorMethod }) => {
	const {dropdown, setDropdown, ref, onMouseEnter }=useMenuSettings()
  const method=()=>{depthLevel===0 ? setDropdown(false) : ancestorMethod()}
  const chosen= ()=>{
    method()
	if (!boxPresent){
		addBox(questionnaireNumber)
	}
  }

   
//    const onMouseLeave = () => {
//     window.innerWidth > 960 && setDropdown(false);
//    };
  return (
    <li className="menu-items" ref={ref}
    onMouseEnter={onMouseEnter}
//    onMouseLeave={onMouseLeave}
      >{depthLevel==0 ? (
        <>
        <button type="button" 
        aria-haspopup="menu"
          aria-expanded={dropdown ? "true" : "false"}
          onClick={() => setDropdown((prev) => !prev)}>
            {"Total = "}{numberOfBoxes}<span className="arrow" />
        </button>
        <Dropdown addBox={addBox} dataArray={dataArray} numberOfBoxes={numberOfBoxes}  depthLevel={0} 
        ancestorMethod={method}
          dropdown={dropdown} />
        </>
      ) : (
        <button type="button"
        onClick={chosen}
        >{boxPresent ? <span>&#10003;</span> : <span />}{questionnaireName}</button>
      )}
    </li>
  );
};

const Condition=({removeConditionBox ,conditionNumber, conditionName})=>{
	const onXClick=()=>{ 
		removeConditionBox(conditionNumber)  //CHANGEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
	}
	return (<span><button onClick={onXClick}>X</button><input type="text" value={conditionName}/></span>)
}


const Questionnaire=({removeBox, dataArray,changeSign, greater, questionnaireNumber})=>{
	const onSignClick=()=>{
		changeSign(questionnaireNumber)
	}
	const onXClick=()=>{
		removeBox(questionnaireNumber)
	}
	return (<span><button onClick={onXClick}>X</button><input type="text" value={dataArray[questionnaireNumber][0]}/><button onClick={onSignClick}>{greater ? ">=" : "<="}</button></span>)
}

const ConditionalLink = ({ children, to, condition }) => (condition)
      ? <Link to={to}><button id='SummarizeTheDataLink'>{children}</button></Link>
      : <button id='SummarizeTheDataLink' disabled={true}>{children}</button>;

export default function Datasetselectionforanalysis () {
	// const [newTo,setNewTo]=useState({ 
	// 	pathname: "", 
	// 	groupArray: []
	//   })
	const [saveDone,setSaveDone]=useState(false)
	 const [newTo,setNewTo]=useState({ 
		pathname: "", 
		groupArray: [1]
	  })
	
	const [data, setData]=useState([])
	const [data2, setData2]=useState([])
	const [gender,setGender]=useState(-1) //-1 not chosen, 0 male, 1 female
	const [data3, setData3]=useState([])
	const [dataArray, setDataArray]=useState([])
	const [greaterThanArray, setGreaterThanArray]=useState([])
	const questionnaireScoreArray=useRef([])
	const [data2Array,setData2Array]=useState([])
	const [data3Array,setData3Array]=useState([[], -1, "None"])
	const conditionBoxesShown=useRef([])
	useEffect(()=>{
		const getData = async () => {
			const response = await axios.get("https://czp2w6uy37-vpce-0bdf8d65b826a59e3.execute-api.us-east-1.amazonaws.com/test/get_names_list?table=questionnaire");
			const theData = response.data
			setData(theData)
		}
		const getData2 = async () => {
			const response = await axios.get("https://czp2w6uy37-vpce-0bdf8d65b826a59e3.execute-api.us-east-1.amazonaws.com/test/get_names_list?table=disorder");
			const theData2 = response.data
			setData2(theData2)
		}
		const getData3 = async () => {
			const response = await axios.get("https://czp2w6uy37-vpce-0bdf8d65b826a59e3.execute-api.us-east-1.amazonaws.com/test/get_names_list?table=site");
			const theData3 = response.data
			setData3(theData3)
		}
		
		getData()
		getData2()
		getData3()
		
		// setDataArrived((a)=>(!a)) //IMPORTANT ask why changing to function parameter from true boolean parameter removes infinite renderring loop 
			// dataArrayDuplicate.current=data.map( (m,index)=>[m.questionnaire_name, false])
			// setDataArray(dataArrayDuplicate.current)
		
	}, [])

	useEffect (()=>{
		setDataArray(data.map( (m,index)=>[m.questionnaire_name, false]))
		setGreaterThanArray(data.map((e)=>true))
		questionnaireScoreArray.current=data.map((e)=>0)
	}
	,[data])

	useEffect (()=>{
		setData2Array(e=>(data2.map( (m,index)=>[m.disorder_presentation, false])))
	}
	,[data2])

	useEffect (()=>{
		setData3Array([data3.map( m=>m.name), (-1), "None"])
	}
	,[data3])
	const boxesShown=useRef([])
	const [clinicalVisits, setClinicalVisits]=useState([0, false])
	const [EEGVisits, setEEGVisits]=useState([0, false])
	const [orDependency,setOrDependency]=useState(false)
	const clinicalRef=useRef(clinicalVisits[0])
	const EEGRef=useRef(EEGVisits[0])
	const minAgeRef=useRef([0,-1])
	const maxAgeRef=useRef([130,-1])
	
	const handleAgeMinChange = (e) => {
		// if (maxAgeRef.current[1]===-1){
			if (e.target.value>130){
				e.target.value=130
			}
		// }
		// else {
		// 	if (e.target.value>maxAgeRef.current[0])
		// 	e.target.value=maxAgeRef.current[0]			
		// }
		minAgeRef.current[1]=1
		if (e.target.value<0){
			e.target.value=0
		}
		if (e.target.value===""){
			minAgeRef.current[0]=e.target.value
		}
		else
		minAgeRef.current[0]=parseInt(e.target.value)
	}
	const handleAgeMaxChange = (e) => {
		if (e.target.value<0){
			e.target.value=0
		}
		maxAgeRef.current[1]=1
		if (e.target.value>130){
			e.target.value=130
		}
		if (e.target.value===""){
			maxAgeRef.current[0]=e.target.value
		}
		else
			maxAgeRef.current[0]=parseInt(e.target.value)
	}
	// const handleKeyPress = (event) => {
	// 	if(event.key === 'Enter'){
	// 		if (ageRef.current>=1 && ageRef.current<=120 ){
	// 			setAge(ageRef.current)
	// 	}
	//   }
	// }
	const handleClinicalChange= (e) => {
		if (e.target.value>30)
		e.target.value=30
		clinicalRef.current = e.target.value
	}

	const handleEEGChange= (e) => {
		if (e.target.value>30)
		e.target.value=30
		EEGRef.current = e.target.value
	}
	const handleClinicalKeyPress = (event) => {
		if(event.key === 'Enter'){
			if (orDependency===true){
				if (EEGVisits[1]===true){
					if (clinicalVisits[1]===false){
					alert("EEG Visits number was chosen, press on key to add Clinical Visits")
					return}
				}
			}
			if (clinicalRef.current>=0 && clinicalRef.current<=30 ){
				setClinicalVisits([clinicalRef.current, true])
		}
	  }
	}

	const handleEEGKeyPress = (event) => {
		if(event.key === 'Enter'){
			if (orDependency===true){
				if (clinicalVisits[1]===true){
					if (EEGVisits[1]===false){
					alert("Clinical Visits number was chosen, press on key to add Clinical Visits")
					return}
				}
			}
			if (EEGRef.current>=0 && EEGRef.current<=30 ){
				setEEGVisits([EEGRef.current, true])
		}
	  }
	}

	const changeSign=(number)=>{
		setGreaterThanArray(greaterThanArray.map((item,index)=>{
			return number===index ? !item : item
		}))
	}

	const handleQuestionnaireNumberChange = (e) => {
		if (e.target.value>1000)
		e.target.value=1000
		questionnaireScoreArray.current[parseInt(e.target.id)]= parseInt(e.target.value)
	}

	const fillArray1WithArray2=(array1,array2)=>{
		for (let i=0; i<array2.length; i++){
			array1.push([array2[i][0], array2[i][1]])
		}

	}

	const removeBox=(number)=>{
		const array=[]
		// for (let i=0; i<dataArray.length; i++){
		// 	array.push([dataArray[i][0], dataArray[i][1]])
		// }
		fillArray1WithArray2(array,dataArray)
		boxesShown.current=boxesShown.current.filter(num=>(num!==number))
		questionnaireScoreArray.current[number]=0
		setGreaterThanArray(e=>(e.map((item,index)=>{
			if (index===number){
				return true
			}
			return item
		})))
		array[number][1]=false
		setDataArray(array)		
	}

	const addBox=(number)=>{
		const array=[]
		fillArray1WithArray2(array,dataArray)
		boxesShown.current.push(number)
		array[number][1]=true
		setDataArray(array)
	}

	const removeConditionBox= (number)=>{
		const array=[]
		fillArray1WithArray2(array,data2Array)
		conditionBoxesShown.current=conditionBoxesShown.current.filter(num=>(num!==number))
		array[number][1]=false
		setData2Array(array)	
	}

	const addConditionBox=(number)=>{
		const array=[]
		fillArray1WithArray2(array,data2Array)
		conditionBoxesShown.current.push(number)
		array[number][1]=true
		setData2Array(array)
	}

	const chooseSite=(number)=>{
		if (data3Array[0][number]!==data3Array[1]){
			setData3Array((e)=>(([e[0],number, e[0][number] ])))
		}
	}
	
	const chooseGender=(number)=>{setGender(number)}
	const save=()=>{
		// const getData4 = async (s) => {
		// 	const response = await axios.get(s);
		// 	const theData4 = response.data
		// 	setData4(theData4)
		// }
		let ageString;
		if (minAgeRef.current[0]==="" && maxAgeRef.current[0]==="" ){
			alert("age range isn't right, both have null value")
			return 0
		}
		if (minAgeRef.current[0]!=="" && maxAgeRef.current[0]!=="" && 
		((minAgeRef.current[0] )> (maxAgeRef.current[0]))){
			alert ("age range isn't right, max is not bigger than min")
			return 0
		}
		if (minAgeRef.current[0]===""){
			ageString="&age.ls="+maxAgeRef.current[0]
		}
		else {
			if  (maxAgeRef.current[0]===""){
				ageString="&age.gt="+minAgeRef.current[0]
			}
			else ageString="&age.gt="+minAgeRef.current[0]+"&age.ls="+maxAgeRef.current[0]
		}

		let string="https://czp2w6uy37-vpce-0bdf8d65b826a59e3.execute-api.us-east-1.amazonaws.com/test/Table?gender="
		let gender1=gender===0 ? "MALE" : "FEMALE";
		string=string+gender1
		for (let i=0;i<boxesShown.current.length; i++){
			string=string+"&questionnaire=('"+dataArray[boxesShown.current[i]][0]+"')"
		}
		string=string+ageString
		// setNewTo(e=>({ 
		// 	pathname: "/summarizethedata/"+string, 
		// 	questionnaires:data,
		// 	relevantQuestionnaires:boxesShown.current,
		// 	questionnaireScoreArray:questionnaireScoreArray.current,
		// 	greaterThanArray:greaterThanArray
		//   }))
		  setNewTo(e=>({
			pathname:"/summarizethedata/something",
			groupArray:(e.groupArray.map((item,index)=>{
				if (index!==e.groupArray.length-1){
					return item
				}
				return {
					link:string, 
					questionnaires:(data.map( (m,index)=>({ questionnaire_id:m.questionnaire_id ,questionnaire_name: m.questionnaire_name }))),
					relevantQuestionnaires:[...(boxesShown.current)],
					questionnaireScoreArray:[...(questionnaireScoreArray.current)],
					greaterThanArray:[...greaterThanArray]
				}
			}))
		  }))
		  setSaveDone(true)
	}

	const addGroup=()=>{
		setNewTo(e=>({
			pathname:"/summarizethedata",
			groupArray:[...(e.groupArray), 1]}))
		setSaveDone(false)
		document.getElementById('MinAgeInput').value ="0"
		document.getElementById('MaxAgeInput').value ="130"
		minAgeRef.current[0]=0
		maxAgeRef.current[0]=130
		boxesShown.current=[]
		setDataArray(data.map( (m,index)=>[m.questionnaire_name, false]))
		setGreaterThanArray(data.map((e)=>true))
		questionnaireScoreArray.current=data.map((e)=>0)
		setGender(-1)
		setData2Array(e=>(data2.map( (m,index)=>[m.disorder_presentation, false])))
		conditionBoxesShown.current=[]
		setData3Array([data3.map( m=>m.name), (-1), "None"])
				
	}
	// console.log(newTo)
	const readyToSave=(boxesShown.current.length>0 &&
	conditionBoxesShown.current.length>0 && gender!==-1 && data3Array[1]!==-1)
	return (
		<div className='Datasetselectionforanalysis_Datasetselectionforanalysis'>
			<button id='Save' disabled={!readyToSave } onClick={save}>Save</button>
			<button id='AddGroup' disabled={!saveDone} onClick={addGroup}>Add Group</button>
			<ConditionalLink to={newTo} children="Continue" condition={newTo.pathname!=="" }/>
			<div id="Age">
				<div>Age Range</div>
				<div>
					<span>Min. </span><input id='MinAgeInput' defaultValue={minAgeRef.current[0]}  type="number" min="0" max="130" 
					onChange={handleAgeMinChange} />
				</div>
				<div>
					<span>Max.</span><input id='MaxAgeInput' defaultValue={maxAgeRef.current[0]} type="number" min="0" max="130" 
					onChange={handleAgeMaxChange} />
				</div>

			</div>
			<div id='QuestionnaireBoxes'>
				{boxesShown.current.map((number, index)=>(
					<div><Questionnaire  dataArray={dataArray} changeSign={changeSign} 
					removeBox={removeBox} greater={greaterThanArray[number]} questionnaireNumber={number} key={index}
					/><input className='QuestionnaireBoxInput' id={number+""} type="number" min="0"  max="1000" defaultValue="0" onChange={handleQuestionnaireNumberChange}/></div>		//fix max later			
				))}
				<div><button>Or Dependency</button></div>
			</div>
			<div id='QuestionnaireText'>Questionnaire:</div>

			<div id='QuestionnaireMenu'><span><ul className="menus"><MenuItems addBox={addBox} dataArray={dataArray} numberOfBoxes={boxesShown.current.length}  depthLevel={0} /> </ul></span></div>

			<div id='ConditionText'>Condition:</div>

			<div id='ConditionBoxes'>
				{conditionBoxesShown.current.map((number, index)=>(
					<div><Condition conditionName={data2Array[number][0]}  data2Array={data2Array} removeConditionBox={removeConditionBox} conditionNumber={number} key={index}
					/></div>					
				))}
				<div><button>Or Dependency</button></div>
			</div>

			<div id='ConditionMenu'><span><ul className="menus"><MenuItems2 addConditionBox={addConditionBox} data2Array={data2Array} numberOfConditionBoxes={conditionBoxesShown.current.length}  depthLevel={0} /> </ul></span></div>

			<div id='SiteText'>Site:</div>
			<div id='SiteMenu'><ul className="menus"><MenuItems3 chosenNumber={data3Array[1]} chosenName={data3Array[2]} chooseSite={chooseSite} data={data3Array[0]}  depthLevel={0} /> </ul></div>

			<div id='GenderText'>Gender</div>
			<div id='GenderMenu'><ul className="menus"><MenuItems4 chosenGender={gender} chooseGender={chooseGender}   depthLevel={0} /> </ul></div>

			<div id='ClinicalVisits'>Clinical Visits: <input className="input" defaultValue={clinicalVisits[0]}  type="number" min="0" max="30" onChange={handleClinicalChange} onKeyPress={handleClinicalKeyPress}/></div>
			
			<button id='OrDependency' onClick={()=>{setOrDependency(!orDependency)}}
			>{orDependency? "'Or' Dependency" : "'And' Depencency"}</button>
			<span id='EEGVisits'>EEG Visits: <input className="input" defaultValue={EEGVisits[0]}  type="number" min="0" max="30" onChange={handleEEGChange} onKeyPress={handleEEGKeyPress}/></span>

			
			<span className='Definedesiredgroup'>Select Group</span>
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
			{/* <div className='selectsite'>
				<div className='Questionnaire_2'>
					<span className='Questionnaire_3'>Site</span>
				</div>
				<div className='iconicofontdirectionalsimpledown'>
					<img className='_' src = {ImgAsset.Datasetselectionforanalysis__} />
				</div>
			</div> */}
			{/* <div className='selectGender'>
				<span className='Gender'>Gender</span>
				<div className='iconicofontdirectionalsimpledown_1'>
					<img className='__1' src = {ImgAsset.Datasetselectionforanalysis___1} />
				</div>
			</div> */}
			{/* put up */}
			{/* <div className='Group12'>
				<div className='Questionnaire_4'>
					<span className='Questionnaire_5'>Questionnaire</span>
				</div>
				<div className='Group7'>
					<div className='Questionnaire_6'>
						<span className='Questionnaire_7'>Total = 2</span>
					</div>
					<div className='iconicofontdirectionalsimpledown_2'>
						<img className='__2' src = {ImgAsset.Datasetselectionforanalysis___2} />
					</div>
				</div>
			</div> */}
			{/* <div className='Group32'>
				<div className='Questionnaire_8'>
					<span className='Questionnaire_9'>Max # of visits</span>
				</div>
				<div className='iconicofontdirectionalsimpledown_3'>
					<img className='__3' src = {ImgAsset.Datasetselectionforanalysis___3} />
				</div>
			</div> */}
			{/* <div className='selectdisorder'>
				<div className='iconicofontdirectionalsimpledown_4'>
					<img className='__4' src = {ImgAsset.Datasetselectionforanalysis___4} />
				</div>
				<div className='selectVisit'>
					<div className='Questionnaire_10'>
						<span className='Questionnaire_11'>Condition</span>
					</div>
				</div>
			</div> */}
		</div>
	)
}