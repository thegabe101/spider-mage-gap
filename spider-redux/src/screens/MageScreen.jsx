// import { Form } from "../components";
// import "../styles/mageSheetStyle.css";

import  MageList  from "../features/mages/MageList"

import  AddMageForm  from "../features/mages/AddMageForm"


export const MageScreen = () => {
    let marginTop = 200;
    return (
    <div style={{background: 'red', marginTop: marginTop}}>
            MageScreen
			<MageList />
			<AddMageForm />
    </div>
	)
};
