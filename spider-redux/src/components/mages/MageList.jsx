import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  retrieveMages,

} from "../../redux/slices/mages";
import { Link } from "react-router-dom";

const MagesList = () => {
  const [currentMage, setCurrentMage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  const mages = useSelector(state => state.mages);
  const dispatch = useDispatch();

  // const onChangeSearchTitle = e => {
  //   const searchTitle = e.target.value;
  //   setSearchTitle(searchTitle);
  // };

  const initFetch = useCallback(() => {
    dispatch(retrieveMages());
  }, [dispatch])

  useEffect(() => {
    initFetch()
  }, [initFetch])

  const refreshData = () => {
    setCurrentMage(null);
    setCurrentIndex(-1);
  };

  const setActiveMage = (mage, index) => {
    setCurrentMage(mage);
    setCurrentIndex(index);
  };
  const TITLE = 'Mages List'

  return (
<div className="list row">
      <div className="col-md-6">
        <h4> {TITLE} </h4>

        <ul className="list-group">
          {mages &&
            mages.map((mage, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveMage(mage, index)}
                key={index}
              >
                {mage.name}
              </li>
            ))}
        </ul>

      </div>
      <div className="col-md-6">
        {currentMage ? (
          <div>
            <h4>Mage</h4>
            <div>
              <label>
                <strong>Name:</strong>
              </label>{" "}
              {currentMage.name}
            </div>
 
            <Link
              to={"/mages/" + currentMage.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a mage...</p>
          </div>
        )}
      </div>
    </div>

  );
};

export default MagesList;