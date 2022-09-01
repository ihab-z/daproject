import './Menu.css'
import React, { useState,useRef, useEffect } from 'react'
import './Datasetselectionforanalysis.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Datasetselectionforanalysis () {
	const [minimumAge, setMinimumAge]=useState([0, false])
	const pickMinimumAge=(number)=>{
		setMinimumAge([number, true])
		alert("Pick Age Now")
	}
	const [age, setAge]=useState(0)
	const pickAge= (number)=>{setAge(number)}
	const method= ()=> 0
	let depthLevel=0
	const numberRef = useRef(1)
	const handleChange = (e) => {
		console.log("handleChange was called")
		numberRef.current = e.target.value
	}
	const handleKeyPress = (event) => {
		if(event.key === 'Enter'){
		  console.log('enter press here! ')
		}
	  }
	const [product, setProduct]=useState(1)
	return (
		<div className='Datasetselectionforanalysis_Datasetselectionforanalysis'>
			<input className="input" defaultValue={product} 
			type="number" min="1" max="120" 
			onChange={handleChange}/>	
			<div id='bar'>
				Minimum Age:<span>
					<ul className="menus">
						<MenuItems func={pickMinimumAge}
						age={minimumAge[0]}
						minimalAge={1}
						ancestorMethod={method} depthLevel={depthLevel} />;
					</ul>
				</span>Age:<span>
					<ul className={`${minimumAge[1] ? "menus" : "hide"}`}>
						<MenuItems
						age={age}
						func={pickAge} minimalAge={minimumAge[0]} 
						ancestorMethod={method} depthLevel={depthLevel} />;
					</ul>
				</span>
			</div>
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
			<div className='selectsite'>
				<div className='Questionnaire_2'>
					<span className='Questionnaire_3'>Site</span>
				</div>
				<div className='iconicofontdirectionalsimpledown'>
					<img className='_' src = {ImgAsset.Datasetselectionforanalysis__} />
				</div>
			</div>
			<div className='selectGender'>
				<span className='Gender'>Gender</span>
				<div className='iconicofontdirectionalsimpledown_1'>
					<img className='__1' src = {ImgAsset.Datasetselectionforanalysis___1} />
				</div>
			</div>
			{/* put up */}
			<div className='Group12'>
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
			</div>
			<div className='Group32'>
				<div className='Questionnaire_8'>
					<span className='Questionnaire_9'>Max # of visits</span>
				</div>
				<div className='iconicofontdirectionalsimpledown_3'>
					<img className='__3' src = {ImgAsset.Datasetselectionforanalysis___3} />
				</div>
			</div>
			<div className='selectdisorder'>
				<div className='iconicofontdirectionalsimpledown_4'>
					<img className='__4' src = {ImgAsset.Datasetselectionforanalysis___4} />
				</div>
				<div className='selectVisit'>
					<div className='Questionnaire_10'>
						<span className='Questionnaire_11'>Condition</span>
					</div>
				</div>
			</div>
		</div>
	)
}


const MenuItems = ({age, value, minimalAge, func, depthLevel, ancestorMethod }) => {
	const [dropdown, setDropdown] = useState(false);
	let valueChosen=0
	const method=()=>{
		if (depthLevel===0)
			setDropdown(false)
		else 
		ancestorMethod()
	}
  const chosen= ()=>{
	func(value)
    method()
  }
  let ref = useRef();
  useEffect(() => {
    const handler = (event) => {
     if (dropdown && ref.current && !ref.current.contains(event.target)) {
      setDropdown(false);
     }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
     // Cleanup the event listener
     document.removeEventListener("mousedown", handler);
     document.removeEventListener("touchstart", handler);
    };
   }, [dropdown]);
  return (
    <li className="menu-items" ref={ref}
	>
      {depthLevel===0 ? (
        <>
        <button type="button" 
        aria-haspopup="menu"
          aria-expanded={dropdown ? "true" : "false"}
          onClick={() => {setDropdown((prev) => !prev)}}>
            {age===0 ? "--" : age}{' '}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
        </button>
        <Dropdown  depthLevel={depthLevel}
        func={func} minimalAge={minimalAge}
        ancestorMethod={method}
          dropdown={dropdown} />
        </>
      ) : (
        // <a href={items.url}>{items.title}</a>
        <button type="button"
        onClick={chosen}
        >{value}</button>
      )}
    </li>
  );
};


const Dropdown = ({ minimalAge, func, dropdown, depthLevel, ancestorMethod }) => {
    depthLevel = depthLevel + 1;
	const agesArray = [];
	for (let i = minimalAge; i <= 120; i++) {
		agesArray.push(i);
	}
	return (
		<ul className={`dropdown ${dropdown ? "show" : ""}`}>
			{agesArray.map((key) => (
			<MenuItems value={key} func={func} depthLevel={depthLevel} ancestorMethod={ancestorMethod} key={key} />
			))}
		</ul>
		);
	};