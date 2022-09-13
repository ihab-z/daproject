import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Histogram from '../Components/Histogram';
import HomePage from '../Components/index';
import Thumbnail from '../Components/Thumbnail';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Other from '../Components/Other';
import Core from '../Components/Core';
import Navigationmenuvertical from '../Components/Navigationmenuvertical';
import SelectDataset from '../Components/SelectDataset';
// import SelectDataset_1 from '../Components/SelectDataset_1';
// import SelectDataset_2 from '../Components/SelectDataset_2';
// import SelectDataset_3 from '../Components/SelectDataset_3';
// import SelectDataset_4 from '../Components/SelectDataset_4';
// import SelectDataset_5 from '../Components/SelectDataset_5';
// import SelectDataset_6 from '../Components/SelectDataset_6';
// import SelectDataset_7 from '../Components/SelectDataset_7';
// import SelectDataset_8 from '../Components/SelectDataset_8';
// import SelectDataset_9 from '../Components/SelectDataset_9';
// import SelectDataset_10 from '../Components/SelectDataset_10';
// import SelectDataset_11 from '../Components/SelectDataset_11';
// import SelectDataset_12 from '../Components/SelectDataset_12';
// import SelectDataset_13 from '../Components/SelectDataset_13';
// import SelectDataset_14 from '../Components/SelectDataset_14';
// import SelectDataset_15 from '../Components/SelectDataset_15';
// import SelectDataset_16 from '../Components/SelectDataset_16';
// import SelectDataset_17 from '../Components/SelectDataset_17';
// import SelectDataset_18 from '../Components/SelectDataset_18';
// import SelectDataset_19 from '../Components/SelectDataset_19';
// import SelectDataset_20 from '../Components/SelectDataset_20';
// import SelectDataset_21 from '../Components/SelectDataset_21';
// import SelectDataset_22 from '../Components/SelectDataset_22';
// import SelectDataset_23 from '../Components/SelectDataset_23';
import Recomndedcheckbox from '../Components/recomndedcheckbox';
import Definegroup from '../Components/Definegroup';
import Summarizethedata from '../Components/Summarizethedata';
import Resultofselectesddataset from '../Components/Resultofselectesddataset';
import Resultofselectesddataset_1 from '../Components/Resultofselectesddataset_1';
import Resultofsummarizationofthedata from '../Components/Resultofsummarizationofthedata';
import Patients from '../Components/Patients';
import Visits from '../Components/Visits';
import Disorders from '../Components/Disorders';
import AnalysisType from '../Components/AnalysisType';
import CorrelationType from '../Components/CorrelationType';
import Onegroup from '../Components/Onegroup';
import Datasetselectionforanalysis from '../Components/Datasetselectionforanalysis';
import Addgroup from '../Components/Addgroup';
import Frame34 from '../Components/Frame34';
import Exporttocodeerrorsdeletemeanytime from '../Components/Exporttocodeerrorsdeletemeanytime'

const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><HomePage /></Route>
				<Route exact path="/thumbnail"><Thumbnail /></Route>
				<Route exact path="/other"><Other /></Route>
				<Route exact path="/core"><Core /></Route>
				<Route exact path="/navigationmenuvertical"><Navigationmenuvertical /></Route>
				<Route exact path="/selectdataset"><SelectDataset /></Route>
				<Route exact path="/histogram"><Histogram /></Route>
				{/* <Route exact path="/selectdataset_1"><SelectDataset_1 /></Route>
				<Route exact path="/selectdataset_2"><SelectDataset_2 /></Route>
				<Route exact path="/selectdataset_3"><SelectDataset_3 /></Route>
				<Route exact path="/selectdataset_4"><SelectDataset_4 /></Route>
				<Route exact path="/selectdataset_5"><SelectDataset_5 /></Route>
				<Route exact path="/selectdataset_6"><SelectDataset_6 /></Route>
				<Route exact path="/selectdataset_7"><SelectDataset_7 /></Route>
				<Route exact path="/selectdataset_8"><SelectDataset_8 /></Route>
				<Route exact path="/selectdataset_9"><SelectDataset_9 /></Route>
				<Route exact path="/selectdataset_10"><SelectDataset_10 /></Route>
				<Route exact path="/selectdataset_11"><SelectDataset_11 /></Route>
				<Route exact path="/selectdataset_12"><SelectDataset_12 /></Route>
				<Route exact path="/selectdataset_13"><SelectDataset_13 /></Route>
				<Route exact path="/selectdataset_14"><SelectDataset_14 /></Route>
				<Route exact path="/selectdataset_15"><SelectDataset_15 /></Route>
				<Route exact path="/selectdataset_16"><SelectDataset_16 /></Route>
				<Route exact path="/selectdataset_17"><SelectDataset_17 /></Route>
				<Route exact path="/selectdataset_18"><SelectDataset_18 /></Route>
				<Route exact path="/selectdataset_19"><SelectDataset_19 /></Route>
				<Route exact path="/selectdataset_20"><SelectDataset_20 /></Route>
				<Route exact path="/selectdataset_21"><SelectDataset_21 /></Route>
				<Route exact path="/selectdataset_22"><SelectDataset_22 /></Route>
				<Route exact path="/selectdataset_23"><SelectDataset_23 /></Route> */}
				<Route exact path="/recomndedcheckbox"><Recomndedcheckbox /></Route>
				<Route exact path="/definegroup"><Definegroup /></Route>
				<Route exact path="/summarizethedata"><Summarizethedata /></Route>
				<Route exact path="/resultofselectesddataset"><Resultofselectesddataset /></Route>
				<Route exact path="/resultofselectesddataset_1"><Resultofselectesddataset_1 /></Route>
				<Route exact path="/resultofsummarizationofthedata"><Resultofsummarizationofthedata /></Route>
				<Route exact path="/patients"><Patients /></Route>
				<Route exact path="/visits"><Visits /></Route>
				<Route exact path="/disorders"><Disorders /></Route>
				<Route exact path="/analysistype"><AnalysisType /></Route>
				<Route exact path="/correlationtype"><CorrelationType /></Route>
				<Route exact path="/onegroup"><Onegroup /></Route>
				<Route exact path="/datasetselectionforanalysis"><Datasetselectionforanalysis /></Route>
				<Route exact path="/addgroup"><Addgroup /></Route>
				<Route exact path="/frame34"><Frame34 /></Route>
				<Route path="/summarizethedata/:searchdetail" component={Summarizethedata} />
				<Route exact path="/exporttocodeerrorsdeletemeanytime"><Exporttocodeerrorsdeletemeanytime /></Route>
			</Switch>
		</Router>
	);
}
export default RouterDOM;