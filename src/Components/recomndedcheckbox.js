import React from 'react'
import './recomndedcheckbox.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Recomndedcheckbox () {
	return (
		<div className='recomndedcheckbox_recomndedcheckbox'>
			<div className='othernavigationhorizontaldektop'>
				<div className='bg'/>
				<div className='circle'/>
				<div className='avatarcircledman16'><div className='circle_1' style={{backgroundImage: `url(${ImgAsset.SelectDataset_circle_1})`}}/>
				</div>
				<div className='textfieldsearchroundeddefault'>
					<div className='bg_1'/>
					<span className='Search'>Search</span>
					<div className='iconicofontwebsearchdefault'>
						<img className='Vector' src = {ImgAsset.recomndedcheckbox_Vector} />
					</div>
				</div>
				<div className='iconicofontwebnotificationnotification'>
					<img className='Vector_1' src = {ImgAsset.recomndedcheckbox_Vector_1} />
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
							<img className='Vector_2' src = {ImgAsset.recomndedcheckbox_Vector_2} />
							<img className='Vector_3' src = {ImgAsset.recomndedcheckbox_Vector_3} />
						</div>
					</div>
				</div>
				<div className='IconCircleFill'>
					<img className='Mask' src = {ImgAsset.recomndedcheckbox_Mask} />
				</div>
				<div className='ElmindaLogo'>
					<div className='Group_1'>
						<img className='Vector_4' src = {ImgAsset.recomndedcheckbox_Vector_4} />
					</div>
				</div>
				<span className='RichardMcClintock'>Richard McClintock</span>
				<span className='Elminda'>Elminda</span>
			</div>
		</div>
	)
}