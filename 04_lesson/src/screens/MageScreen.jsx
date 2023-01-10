// import { useSelector, useDispatch } from 'react-redux';
// import { setMage } from '../redux/slices/mageSlice';

// import { useState } from 'react';

import MageList from '../components/mages/MageList'



const initialMages = [
    {
        name: 'Jui',
        power: 32
    },
    {
        name: 'Deab',
        cost: 36
    }
]


export const MageScreen = () => {
    let marginTop = 50;
    // setMage()
    // const [mages] = useState(initialMages);

    // const mage = useSelector(
    //     (state) => state.selectedMage.mage
    // );
    // const dispatch = useDispatch();
    return (
        <div style={{background: 'blue', marginTop: marginTop}}>
            
            {/* <TutorialsList />
            <Tutorial />
            <AddTutorial /> */}
            
            <MageList />
            MageScreen
    </div>
    )
}


