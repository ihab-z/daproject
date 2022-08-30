import React from 'react'
import './Summarizethedata.css'
import ImgAsset from '../public'
export default function Summarizethedata () {
	return (
		<div className='Summarizethedata_Summarizethedata'>
			<div className='othernavigationhorizontaldektop'>
				<div className='bg'/>
				<div className='circle'/>
				<div className='avatarcircledman16'><div className='circle_1' style={{backgroundImage: `url(${ImgAsset.SelectDataset_circle_1})`}}/>
				</div>
				<div className='textfieldsearchroundeddefault'>
					<div className='bg_1'/>
					<span className='Search'>Search</span>
					<div className='iconicofontwebsearchdefault'>
						<img className='Vector' src = {ImgAsset.Summarizethedata_Vector} />
					</div>
				</div>
				<div className='iconicofontwebnotificationnotification'>
					<img className='Vector_1' src = {ImgAsset.Summarizethedata_Vector_1} />
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
			<div className='Frame32'>
				<span className='_3Patients'>3   Patients</span>
			</div>
		</div>
	)
}