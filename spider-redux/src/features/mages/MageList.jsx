import { useSelector, useDispatch } from "react-redux";
import { selectAllMages, fetchMages } from "./magesSlice";
// import PostsExcerpt from "./PostsExcerpt";
import { useState, useEffect } from "react";

const MageList = () => {
    const dispatch = useDispatch()
    const mages = useSelector(selectAllMages);
    useEffect(() => {    
        if (mages === undefined || mages.length == 0) {
            dispatch(fetchMages())
        }
    }, [])
    let content = [];
    if (mages.length != 0) {
        content =mages
        console.log(content)
    }

    return (
        <div>
            {content.map(mage => <div>{mage.name} </div>)}
        </div>
    )
}
export default MageList
