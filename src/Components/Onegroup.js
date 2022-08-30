import React from 'react'
import './Onegroup.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Onegroup () {
	return (
		<div className='Onegroup_Onegroup'>
			<div className='othernavigationhorizontaldektop'>
				<div className='bg'/>
				<div className='circle'/>
				<div className='avatarcircledman16'><div className='circle_1' style={{backgroundImage: `url(${ImgAsset.SelectDataset_circle_1})`}}/>
				</div>
				<div className='textfieldsearchroundeddefault'>
					<div className='bg_1'/>
					<span className='Search'>Search</span>
					<div className='iconicofontwebsearchdefault'>
						<img className='Vector' src = {ImgAsset.Onegroup_Vector} />
					</div>
				</div>
				<div className='iconicofontwebnotificationnotification'>
					<img className='Vector_1' src = {ImgAsset.Onegroup_Vector_1} />
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
			<div className='Group18'>
				<div className='Group2'>
					<span className='Size'>Size:</span>
					<div className='Frame28'>
						<div className='Frame25'>
							<span className='_40'>40</span>
							<div className='chevrondown'>
								<img className='Vector_2' src = {ImgAsset.Onegroup_Vector_2} />
							</div>
						</div>
						<div className='Frame26'>
							<div className='Frame27'>
								<div className='_14'>
									<span className='Barcharts'>Bar charts</span>
									<div className='check'>
										<img className='Vector_3' src = {ImgAsset.Onegroup_Vector_3} />
									</div>
								</div>
								<div className='_15'>
									<span className='Boxplots'>Box plots</span>
									<div className='check_1'>
										<img className='Vector_4' src = {ImgAsset.Onegroup_Vector_4} />
									</div>
								</div>
								<div className='_17'>
									<div className='check_2'>
										<img className='Vector_5' src = {ImgAsset.Onegroup_Vector_5} />
									</div>
									<span className='Topoplot'>Topoplot</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='Group30'>
				<div className='Group2_1'>
					<span className='Size_1'>Size:</span>
					<div className='Frame28_1'>
						<div className='Frame25_1'>
							<span className='_40_1'>40</span>
							<div className='chevrondown_1'>
								<img className='Vector_6' src = {ImgAsset.Onegroup_Vector_6} />
							</div>
						</div>
						<div className='Frame26_1'>
							<div className='Frame27_1'>
								<div className='_14_1'>
									<span className='Ztest'>Z-test</span>
									<div className='check_3'>
										<img className='Vector_7' src = {ImgAsset.Onegroup_Vector_7} />
									</div>
								</div>
								<div className='_15_1'>
									<span className='Binomialtest'>Binomial test</span>
									<div className='check_4'>
										<img className='Vector_8' src = {ImgAsset.Onegroup_Vector_8} />
									</div>
								</div>
								<div className='_17_1'>
									<div className='check_5'>
										<img className='Vector_9' src = {ImgAsset.Onegroup_Vector_9} />
									</div>
									<span className='Anovatest'>Anova test  </span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='Group16'>
				<div className='Group2_2'>
					<span className='Size_2'>Size:</span>
				</div>
			</div>
			<div className='Group29'>
				<div className='iconicofontdirectionalsimpledown'>
					<Link to='/selectdataset'>
						<img className='_' src = {ImgAsset.Onegroup__} />
					</Link>
				</div>
				<div className='selectVisit'>
					<div className='Questionnaire_2'>
						<span className='Questionnaire_3'>Variables</span>
					</div>
					<div className='iconicofontdirectionalsimpledown_1'>
						<img className='__1' src = {ImgAsset.Onegroup___1} />
					</div>
				</div>
			</div>
			<div className='Group27'>
				<div className='Group12'>
					<div className='Questionnaire_4'>
						<span className='Questionnaire_5'>statistics test</span>
					</div>
				</div>
				<div className='iconicofontdirectionalsimpledown_2'>
					<img className='__2' src = {ImgAsset.Onegroup___2} />
				</div>
			</div>
			<div className='Group28'>
				<div className='iconicofontdirectionalsimpledown_3'>
					<img className='__3' src = {ImgAsset.Onegroup___3} />
				</div>
				<div className='selectVisit_1'>
					<div className='Questionnaire_6'>
						<span className='Questionnaire_7'>Graphs</span>
					</div>
					<div className='iconicofontdirectionalsimpledown_4'>
						<img className='__4' src = {ImgAsset.Onegroup___4} />
					</div>
				</div>
			</div>
			<span className='choosedesiredgraph'>choose desired graph</span>
		</div>
	)
}