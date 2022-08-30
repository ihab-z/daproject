import React from 'react'
import './Patients.css'
import ImgAsset from '../public'
export default function Patients () {
	return (
		<div className='Patients_Patients'>
			<span className='Patients_1'>Patients<br/></span>
			<div className='circularbuttonfloatingaccentdefault'>
				<div className='ellipsebtn'/>
				<div className='iconicofontmedicalstaffdoctor2'>
					<img className='Vector' src = {ImgAsset.Patients_Vector} />
				</div>
			</div>
			<div className='othernavigationhorizontaldektop'>
				<div className='bg'/>
				<div className='circle'/>
				<div className='avatarcircledman16'><div className='circle_1' style={{backgroundImage: `url(${ImgAsset.SelectDataset_circle_1})`}}/>
				</div>
				<div className='textfieldsearchroundeddefault'>
					<div className='bg_1'/>
					<span className='Search'>Search</span>
					<div className='iconicofontwebsearchdefault'>
						<img className='Vector_1' src = {ImgAsset.Patients_Vector_1} />
					</div>
				</div>
				<div className='iconicofontwebnotificationnotification'>
					<img className='Vector_2' src = {ImgAsset.Patients_Vector_2} />
				</div>
				<div className='notification'>
					<div className='circle_2'/>
					<span className='_9'>9</span>
				</div>
				<div className='logolong'>
					<img className='logoimage' src = {ImgAsset.SelectDataset_logoimage} />
				</div>
			</div>
			<div className='othernavigationhorizontaldektopmenu'>
				<div className='bg_2'/>
				<span className='Dashboard'>Dashboard</span>
				<span className='Appointments'>Appointments</span>
				<span className='label'>?</span>
				<span className='label_1'>Departments</span>
				<span className='label_2'>Patients</span>
				<span className='label_3'>?</span>
				<span className='label_4'>Help</span>
				<span className='label_5'>Service pages</span>
				<img className='divider' src = {ImgAsset.Patients_divider} />
				<div className='iconicofontdirectionalsimpledown'>
					<img className='_' src = {ImgAsset.Patients__} />
				</div>
			</div>
		</div>
	)
}