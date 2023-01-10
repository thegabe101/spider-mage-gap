import "../styles/mageSheetStyle.css";
import MageList from "../features/mages/MageList";
import AddMageForm from "../features/mages/AddMageForm";
import BasicTable from "../components/Table";

export const MageScreen = () => {
	return (
		<div className="heroBody background-tint">
			<div className="mageSheetStyle">
				<MageList />
				<AddMageForm />
				{/* <BasicTable /> */}
			</div>
		</div>
	);
};
