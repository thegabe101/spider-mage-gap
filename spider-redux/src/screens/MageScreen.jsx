// import { Form } from "../components";
import "../styles/mageSheetStyle.css";
import MageList from "../features/mages/MageList";
import AddMageForm from "../features/mages/AddMageForm";

export const MageScreen = () => {
	return (
		<div className="heroBody background-tint">
			<div className="mageSheetStyle">
				MageScreen
				<MageList />
				<AddMageForm />
			</div>
		</div>
	);
};
