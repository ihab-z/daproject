import React from 'react'
import './Datasetselectionforanalysis.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
//this is where addition starts
import clinical from "../arrayclinical.json";
import a from "../a.json";
import { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';

const Me = () => {
    const [popup, setPopup] = useState(false);
	const setOnClick= () => setPopup(true);
    return (
		<div>
        {/* The option to open the popup */}
        <button onClick={setOnClick}>Click Me</button>
        {/* The popup itself */}
        {popup && (
            <ClickAwayListener onClickAway={() => setPopup(false)}>
                    <div className={'popup'}>
                        <li>Items of the Popup</li>
                        <li>Items of the Popup</li>
                        <li>Items of the Popup</li>
                    </div>
            </ClickAwayListener>
        )}</div>
    );
};
//this is where addition ends

export default function Datasetselectionforanalysis () {
	let ccc="I cant";
	let bbb={"I cant":"do this"}
	console.log(a)
	console.log(bbb[ccc])
	console .log(clinical[0]["clinical"]["ASRS"]["Total score"])
	return (
		<div className='Datasetselectionforanalysis_Datasetselectionforanalysis'>
			<div className='Questionnaire'>
				<span className='Questionnaire_1'>Range</span>
			</div>
			<span className='Definedesiredgroup'>Select dataset for analysis</span>
			<div className='Header'>
				<div className='Rectangle'/>
				<div className='IconLogOut'>
					<div className='Frame'>
					<div className='Group'>
					<img className='Vector' src = {ImgAsset.Datasetselectionforanalysis_Vector} />
					<Link to='/Patients'><img className='Vector_1' src = {ImgAsset.Datasetselectionforanalysis_Vector_1} /></Link>
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
			<div className='Group31'>
				<div className='Frame26'>
				</div>
				<div className='Frame27'>
					<div className='_23'>
						<div className='check'>
							<img className='Vector_3' src = {ImgAsset.Datasetselectionforanalysis_Vector_3} />
						</div>
						<span className='Healthy'>Healthy</span>
					</div>
					<div className='_22'>
						<span className='ADHDKids'>ADHD Kids</span>
					</div>
					<div className='_18'>
						<span className='ASD'>ASD</span>
					</div>
					<div className='_19'>
						<span className='Alzheimer'>Alzheimer</span>
					</div>
					<div className='_20'>
						<span className='ALS'>ALS</span>
					</div>
					<div className='_21'>
						<span className='Dyslexia'>Dyslexia</span>
					</div>
					<div className='_17'>
						<div className='check_1'>
							<img className='Vector_4' src = {ImgAsset.Datasetselectionforanalysis_Vector_4} />
						</div>
						<span className='BipolarDisorder'>Bipolar Disorder</span>
					</div>
				</div>
			</div>
			<div className='Group33'>
				<div className='Frame26_1'>
				</div>
				<div className='Frame27_1'>
					<div className='_23_1'>
						<div className='check_2'>
							<img className='Vector_5' src = {ImgAsset.Datasetselectionforanalysis_Vector_5} />
						</div>
						<span className='ASRS'>ASRS
</span>
					</div>
					<div className='_22_1'>
						<span className='MADRS'>MADRS</span>
					</div>
					<div className='_18_1'>
						<span className='HDRS17'>HDRS-17</span>
					</div>
					<div className='_24'>
						<span className='QIDSSR16'>QIDS-SR-16</span>
					</div>
					<div className='_25'>
						<span className='PHQ9'>PHQ-9</span>
					</div>
					<div className='_26'>
						<span className='BDI'>BDI</span>
					</div>
					<div className='_19_1'>
						<span className='DASS'>DASS</span>
					</div>
					<div className='_20_1'>
						<span className='CGIS'>CGI-S</span>
					</div>
					<div className='_21_1'>
						<span className='CGII'>CGI-I</span>
					</div>
					<div className='_17_1'>
						<div className='check_3'>
							<img className='Vector_6' src = {ImgAsset.Datasetselectionforanalysis_Vector_6} />
						</div>
						<span className='GAF'>GAF</span>
					</div>
				</div>
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
					<div className='iconicofontdirectionalsimpledown_5'>
						<img className='__5' src = {ImgAsset.Datasetselectionforanalysis___5} />
					</div>
				</div>
			</div>
			<div className='Group13'>
				<div className='Group2'>
					<span className='Size'>Size:</span>
					<div className='Frame28'>
						<div className='Frame25'>
							<span className='_40'>40</span>
							<div className='chevrondown'>
								<img className='Vector_7' src = {ImgAsset.Datasetselectionforanalysis_Vector_7} />
							</div>
						</div>
						<div className='Frame26_2'>
							<div className='Frame27_2'>
								<div className='_12'>
									<div className='check_4'>
										<img className='Vector_8' src = {ImgAsset.Datasetselectionforanalysis_Vector_8} />
									</div>
									<span className='_1'>1</span>
								</div>
								<div className='_13'>
									<div className='check_5'>
										<img className='Vector_9' src = {ImgAsset.Datasetselectionforanalysis_Vector_9} />
									</div>
									<span className='_2'>2</span>
								</div>
								<div className='_14'>
									<div className='check_6'>
										<img className='Vector_10' src = {ImgAsset.Datasetselectionforanalysis_Vector_10} />
									</div>
									<span className='_3'>3</span>
								</div>
								<div className='_15'>
									<div className='check_7'>
										<img className='Vector_11' src = {ImgAsset.Datasetselectionforanalysis_Vector_11} />
									</div>
									<span className='_4'>4</span>
								</div>
								<div className='_16'>
									<div className='check_8'>
										<img className='Vector_12' src = {ImgAsset.Datasetselectionforanalysis_Vector_12} />
									</div>
									<span className='_5'>5</span>
								</div>
								<div className='_17_2'>
									<div className='check_9'>
										<img className='Vector_13' src = {ImgAsset.Datasetselectionforanalysis_Vector_13} />
									</div>
									<span className='_6'>6</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='Group14'>
				<div className='Group2_1'>
					<span className='Size_1'>Size:</span>
					<div className='Frame28_1'>
						<div className='Frame25_1'>
							<span className='_40_1'>40</span>
							<div className='chevrondown_1'>
								<img className='Vector_14' src = {ImgAsset.Datasetselectionforanalysis_Vector_14} />
							</div>
						</div>
						<div className='Frame26_3'>
							<div className='Frame27_3'>
								<div className='_12_1'>
									<div className='check_10'>
										<img className='Vector_15' src = {ImgAsset.Datasetselectionforanalysis_Vector_15} />
									</div>
									<span className='_1_1'>22</span>
								</div>
								<div className='_13_1'>
									<div className='check_11'>
										<img className='Vector_16' src = {ImgAsset.Datasetselectionforanalysis_Vector_16} />
									</div>
									<span className='_23_2'>23</span>
								</div>
								<div className='_14_1'>
									<div className='check_12'>
										<img className='Vector_17' src = {ImgAsset.Datasetselectionforanalysis_Vector_17} />
									</div>
									<span className='_24_1'>24</span>
								</div>
								<div className='_15_1'>
									<div className='check_13'>
										<img className='Vector_18' src = {ImgAsset.Datasetselectionforanalysis_Vector_18} />
									</div>
									<span className='_25_1'>25</span>
								</div>
								<div className='_16_1'>
									<div className='check_14'>
										<img className='Vector_19' src = {ImgAsset.Datasetselectionforanalysis_Vector_19} />
									</div>
									<span className='_26_1'>26</span>
								</div>
								<div className='_20_2'>
									<div className='check_15'>
										<img className='Vector_20' src = {ImgAsset.Datasetselectionforanalysis_Vector_20} />
									</div>
									<span className='_27'>27</span>
								</div>
								<div className='_18_2'>
									<div className='check_16'>
										<img className='Vector_21' src = {ImgAsset.Datasetselectionforanalysis_Vector_21} />
									</div>
									<span className='_28'>28</span>
								</div>
								<div className='_19_2'>
									<div className='check_17'>
										<img className='Vector_22' src = {ImgAsset.Datasetselectionforanalysis_Vector_22} />
									</div>
									<span className='_29'>29</span>
								</div>
								<div className='_21_2'>
									<div className='check_18'>
										<img className='Vector_23' src = {ImgAsset.Datasetselectionforanalysis_Vector_23} />
									</div>
									<span className='_30'>30</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='Group15'>
				<div className='Frame28_2'>
					<div className='Frame25_2'>
						<span className='_40_2'>40</span>
						<div className='chevrondown_2'>
							<img className='Vector_24' src = {ImgAsset.Datasetselectionforanalysis_Vector_24} />
						</div>
					</div>
					<div className='Frame26_4'>
						<div className='Frame27_4'>
							<div className='_15_2'>
								<div className='check_19'>
									<img className='Vector_25' src = {ImgAsset.Datasetselectionforanalysis_Vector_25} />
								</div>
								<span className='__6'>=</span>
							</div>
							<div className='_16_2'>
								<div className='check_20'>
									<img className='Vector_26' src = {ImgAsset.Datasetselectionforanalysis_Vector_26} />
								</div>
								<span className='__7'></span>
							</div>
							<div className='_17_3'>
								<div className='check_21'>
									<img className='Vector_27' src = {ImgAsset.Datasetselectionforanalysis_Vector_27} />
								</div>
								<span className='__8'></span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='Group16'>
				<div className='Group2_2'>
					<div className='Frame28_3'>
						<div className='Frame25_3'>
							<span className='_40_3'>40</span>
							<div className='chevrondown_3'>
								<img className='Vector_28' src = {ImgAsset.Datasetselectionforanalysis_Vector_28} />
							</div>
						</div>
						<div className='Frame26_5'>
							<div className='Frame27_5'>
								<div className='_16_3'>
									<span className='Female'>Female</span>
								</div>
								<div className='_17_4'>
									<div className='check_22'>
										<img className='Vector_29' src = {ImgAsset.Datasetselectionforanalysis_Vector_29} />
									</div>
									<span className='Male'>Male</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='Group17'>
				<span className='Size_2'>Size:</span>
				<div className='Frame28_4'>
					<div className='Frame25_4'>
						<span className='_40_4'>40</span>
						<div className='chevrondown_4'>
							<img className='Vector_30' src = {ImgAsset.Datasetselectionforanalysis_Vector_30} />
						</div>
					</div>
					<div className='Frame26_6'>
						<div className='Frame27_6'>
							<div className='_12_2'>
								<div className='check_23'>
									<img className='Vector_31' src = {ImgAsset.Datasetselectionforanalysis_Vector_31} />
								</div>
								<span className='_1_2'>1</span>
							</div>
							<div className='_13_2'>
								<div className='check_24'>
									<img className='Vector_32' src = {ImgAsset.Datasetselectionforanalysis_Vector_32} />
								</div>
								<span className='_2_1'>2</span>
							</div>
							<div className='_14_2'>
								<div className='check_25'>
									<img className='Vector_33' src = {ImgAsset.Datasetselectionforanalysis_Vector_33} />
								</div>
								<span className='_3_1'>3</span>
							</div>
							<div className='_15_3'>
								<div className='check_26'>
									<img className='Vector_34' src = {ImgAsset.Datasetselectionforanalysis_Vector_34} />
								</div>
								<span className='_4_1'>4</span>
							</div>
							<div className='_16_4'>
								<div className='check_27'>
									<img className='Vector_35' src = {ImgAsset.Datasetselectionforanalysis_Vector_35} />
								</div>
								<span className='_5_1'>5</span>
							</div>
							<div className='_17_5'>
								<div className='check_28'>
									<img className='Vector_36' src = {ImgAsset.Datasetselectionforanalysis_Vector_36} />
								</div>
								<span className='_6_1'>6</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	)
}