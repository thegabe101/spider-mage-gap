import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { add } from "./mageSlice";
import { selectAllMages, fetchMages } from "./magesSlice";
import { useNavigate } from "react-router-dom";

// import "../../styles/mageSheetStyle.css";

const AddMageFormForm = () => {
    // const dispatch = useDispatch()
    // const navigate = useNavigate()
    // const [name, setTitle] = useState('')
    // const [addRequestStatus, setAddRequestStatus] = useState('idle')
    // const mages = useSelector(selectAllMages)
    // useEffect(() => {
    //     // dispatch(fetchMages())        
    //     if (mages === undefined || mages.length == 0) {
    //         dispatch(fetchMages())
    //     }
    // }, [])

    // console.log("mages ", mages)

    return (
        <section>
            <h2>Add a New Mage</h2>
        </section>
    )
}
