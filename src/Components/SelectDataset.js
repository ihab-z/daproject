import React, { useState } from 'react'
import './SelectDataset.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import Selectionbar from './Selectionbar'
export default function SelectDataset () {
	const [clinicalChoice, setClinicalChoice] = useState(["", false])
	const [cognitiveChoice, setCognitiveChoice] = useState(["", false])
	const [EEGChoice, setEEGChoice] = useState(["", false])
	const chooseClinical= (string) => {setClinicalChoice([string, true])}
	const chooseCognitive= (string) => {setCognitiveChoice([string, true])}
	const chooseEEG= (string) => {setEEGChoice([string, true])}
	const deleteClinicalChoice=()=>{setClinicalChoice(["", false])}
	const deleteCognitiveChoice=()=>{setCognitiveChoice(["", false])}
	const deleteEEGChoice=()=>{setEEGChoice(["", false])}
	const method=()=>{return 0}
	const deleteFunctions=[deleteClinicalChoice,deleteCognitiveChoice, deleteEEGChoice]
	const chooseFunctions=[chooseClinical, chooseCognitive, chooseEEG]
	return (
		<div className='SelectDataset_SelectDataset'>
			<div className='othernavigationhorizontaldektop'>
				<div className='bg'/>
				<div className='circle'/>
				<div className='avatarcircledman16'><div className='circle_1' style={{backgroundImage: `url(${ImgAsset.SelectDataset_circle_1})`}}/>
				</div>
				<div className='textfieldsearchroundeddefault'>
					<div className='bg_1'/>
					<span className='Search'>Search</span>
					<div className='iconicofontwebsearchdefault'>
						<img className='Vector' src = {ImgAsset.SelectDataset_Vector} />
					</div>
				</div>
				<div className='iconicofontwebnotificationnotification'>
					<img className='Vector_1' src = {ImgAsset.SelectDataset_Vector_1} />
				</div>
				<div className='notification'>
					<div className='circle_2'/>
					<span className='_9'>9</span>
				</div>
				<div className='logolong'>
					<img className='logoimage' src = {ImgAsset.SelectDataset_logoimage} />
				</div>
			</div>
			<div className='Questionnaire'>
				<span className='Questionnaire_1'>Range</span>
			</div>
			<div className='Header'>
				<div className='Rectangle'/>
				<div className='IconLogOut'>
					<div className='Frame'>
						<div className='Group'>
							<img className='Vector_2' src = {ImgAsset.SelectDataset_Vector_2} />
							<img className='Vector_3' src = {ImgAsset.SelectDataset_Vector_3} />
						</div>
					</div>
				</div>
				<div className='IconCircleFill'>
					<img className='Mask' src = {ImgAsset.SelectDataset_Mask} />
				</div>
				<div className='ElmindaLogo'>
					<div className='Group_1'>
						<img className='Vector_4' src = {ImgAsset.SelectDataset_Vector_4} />
					</div>
				</div>
				<span className='RichardMcClintock'>Richard McClintock</span>
				<span className='Elminda'>Elminda</span>
			</div>
			{/* <div className='item'>
				<div className='_iconparent'>
					<span className='_'></span>
				</div>
				<Link to='/undefined'>
					<div className='_checkbox'>
						<span className='__1'></span>
					</div>
				</Link>
				<div className='_text'>
					<span className='text'>BNA</span>
				</div>
			</div> */}
			{/* <Link to='/undefined'>
				<div className='item_1'>
					<div className='_iconparent_1'>
						<span className='__2'></span>
					</div>
					<Link to='/undefined'>
						<div className='_checkbox_1'>
							<span className='__3'></span>
						</div>
					</Link>
					<div className='_text_1'>
						<span className='text_1'>BNA</span>
					</div>
				</div>
			</Link> */}
			{/* <Link to='/selectdataset_17'>
				<div className='item_2'>
					<div className='_iconparent_2'>
						<span className='__4'></span>
					</div>
					<Link to='/undefined'>
						<div className='_checkbox_2'>
							<span className='__5'></span>
						</div>
					</Link>
					<div className='_text_2'>
						<span className='text_2'>Cognitive</span>
					</div>
				</div>
			</Link>
			<Link to='/selectdataset_1'>
				<div className='item_3'>
					<div className='_iconparent_3'>
						<span className='__6'></span>
					</div>
					<Link to='/undefined'>
						<div className='_checkbox_3'>
							<span className='__7'></span>
						</div>
					</Link>
					<div className='_text_3'>
						<span className='text_3'>EEG</span>
					</div>
				</div>
			</Link> */}
			<SelectedItems array={deleteFunctions} clinicalChoice={clinicalChoice[0]} 
			cognitiveChoice={cognitiveChoice[0]} EEGChoice={EEGChoice[0]}/>
			<span className='Selectvariable'>Select variable</span>
			<Selectionbar chooseFunctions={chooseFunctions}/>
		</div>
	)
}


function SelectedItems ({array,clinicalChoice,cognitiveChoice,EEGChoice }) {
	return (
		//made a change to SelectDataset.css
		<div id='SelectedItems'>
			<span onClick={array[0]}>&#9746;</span>
			<input  type="text" value={clinicalChoice} size="15"/>
			<span onClick={array[1]}> &#9746;</span>
			<input type="text" value={cognitiveChoice} size="15"/>
			<span onClick={array[2]}> &#9746;</span>
			<input type="text" value={EEGChoice} size="12"/>
		</div>
	)
	
}


// export default function SelectDataset () {
// 	return (
// 		<div className='SelectDataset_SelectDataset'>
// 			<div className='othernavigationhorizontaldektop'>
// 				<div className='bg'/>
// 				<div className='circle'/>
// 				<div className='avatarcircledman16'><div className='circle_1' style={{backgroundImage: `url(${ImgAsset.SelectDataset_circle_1})`}}/>
// 				</div>
// 				<div className='textfieldsearchroundeddefault'>
// 					<div className='bg_1'/>
// 					<span className='Search'>Search</span>
// 					<div className='iconicofontwebsearchdefault'>
// 						<img className='Vector' src = {ImgAsset.SelectDataset_Vector} />
// 					</div>
// 				</div>
// 				<div className='iconicofontwebnotificationnotification'>
// 					<img className='Vector_1' src = {ImgAsset.SelectDataset_Vector_1} />
// 				</div>
// 				<div className='notification'>
// 					<div className='circle_2'/>
// 					<span className='_9'>9</span>
// 				</div>
// 				<div className='logolong'>
// 					<img className='logoimage' src = {ImgAsset.SelectDataset_logoimage} />
// 				</div>
// 			</div>
// 			<div className='Questionnaire'>
// 				<span className='Questionnaire_1'>Range</span>
// 			</div>
// 			<div className='Header'>
// 				<div className='Rectangle'/>
// 				<div className='IconLogOut'>
// 					<div className='Frame'>
// 						<div className='Group'>
// 							<img className='Vector_2' src = {ImgAsset.SelectDataset_Vector_2} />
// 							<img className='Vector_3' src = {ImgAsset.SelectDataset_Vector_3} />
// 						</div>
// 					</div>
// 				</div>
// 				<div className='IconCircleFill'>
// 					<img className='Mask' src = {ImgAsset.SelectDataset_Mask} />
// 				</div>
// 				<div className='ElmindaLogo'>
// 					<div className='Group_1'>
// 						<img className='Vector_4' src = {ImgAsset.SelectDataset_Vector_4} />
// 					</div>
// 				</div>
// 				<span className='RichardMcClintock'>Richard McClintock</span>
// 				<span className='Elminda'>Elminda</span>
// 			</div>
// 			<div className='item'>
// 				<div className='_iconparent'>
// 					<span className='_'></span>
// 				</div>
// 				<Link to='/undefined'>
// 					<div className='_checkbox'>
// 						<span className='__1'></span>
// 					</div>
// 				</Link>
// 				<div className='_text'>
// 					<span className='text'>BNA</span>
// 				</div>
// 			</div>
// 			<Link to='/undefined'>
// 				<div className='item_1'>
// 					<div className='_iconparent_1'>
// 						<span className='__2'></span>
// 					</div>
// 					<Link to='/undefined'>
// 						<div className='_checkbox_1'>
// 							<span className='__3'></span>
// 						</div>
// 					</Link>
// 					<div className='_text_1'>
// 						<span className='text_1'>BNA</span>
// 					</div>
// 				</div>
// 			</Link>
// 			<Link to='/selectdataset_17'>
// 				<div className='item_2'>
// 					<div className='_iconparent_2'>
// 						<span className='__4'></span>
// 					</div>
// 					<Link to='/undefined'>
// 						<div className='_checkbox_2'>
// 							<span className='__5'></span>
// 						</div>
// 					</Link>
// 					<div className='_text_2'>
// 						<span className='text_2'>Cognitive</span>
// 					</div>
// 				</div>
// 			</Link>
// 			<Link to='/selectdataset_1'>
// 				<div className='item_3'>
// 					<div className='_iconparent_3'>
// 						<span className='__6'></span>
// 					</div>
// 					<Link to='/undefined'>
// 						<div className='_checkbox_3'>
// 							<span className='__7'></span>
// 						</div>
// 					</Link>
// 					<div className='_text_3'>
// 						<span className='text_3'>EEG</span>
// 					</div>
// 				</div>
// 			</Link>
// 			<span className='Selectvariable'>Select variable</span>
// 		</div>
// 	)
// }