// import { Form } from "../components";
// import "../styles/mageSheetStyle.css";

import  MageList  from "../features/mages/MageList"

import  AddMageForm  from "../features/mages/AddMageForm"
import BasicTable from '../components/table'

export const MageScreen = () => {
    let marginTop = 200;
    return (
    <div style={{background: 'red', marginTop: marginTop}}>
            MageScreen
			<MageList />
			<AddMageForm />
			{/* <BasicTable /> */}
    </div>
	)
};
