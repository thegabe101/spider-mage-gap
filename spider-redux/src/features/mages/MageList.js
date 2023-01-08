import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectAllMages, getMagesError, getMagesStatus, fetchMages } from './mageSlice'

const MageList = () => {
    const dispatch = useDispatch();

    const mages = useSelector(selectAllMages);
    const mageStatus = useSelector(getMagesStatus);
    const error = useSelector(getMagesError);
    useEffect(() => {
        console.log("mageStatus ", mageStatus)
        // dispatch(fetchMages())        
        if (mageStatus === 'idle') {
            console.log("dfd")
            dispatch(fetchMages())

        }
    }, [mageStatus, dispatch])
    let content;
    if(mageStatus == 'succeeded'){
        content = mages
        console.log("mages ", mages)
    }

    return (
        <section>
            {mageStatus}
            {/* {content} */}
        </section>
    )
}
export default MageList