import React from 'react'
import './Visits.css'
import ImgAsset from '../public'
export default function Visits () {
	return (
		<div className='Visits_Visits'>
			<span className='Visits_1'>Visits</span>
			<div className='circularbuttonfloatingaccentdefault'>
				<div className='ellipsebtn'/>
				<div className='iconicofontmedicalstaffdoctor2'>
					<img className='Vector' src = {ImgAsset.Visits_Vector} />
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
						<img className='Vector_1' src = {ImgAsset.Visits_Vector_1} />
					</div>
				</div>
				<div className='iconicofontwebnotificationnotification'>
					<img className='Vector_2' src = {ImgAsset.Visits_Vector_2} />
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
				<span className='Appointments'>Visits</span>
				<span className='label'>Doctors</span>
				<span className='label_1'>Departments</span>
				<span className='label_2'>Patients</span>
				<span className='label_3'>?</span>
				<span className='label_4'>Help</span>
				<span className='label_5'>Service pages</span>
				<img className='divider' src = {ImgAsset.Visits_divider} />
				<div className='iconicofontdirectionalsimpledown'>
					<img className='_' src = {ImgAsset.Visits__} />
				</div>
			</div>
			<div className='Frame1'>
			</div>
		</div>
	)
}