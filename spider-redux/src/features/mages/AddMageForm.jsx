import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addNewMage } from "./magesSlice";

const AddMageForm = () => {
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')
    const canSave = [name].every(Boolean) && addRequestStatus === 'idle';
    const onNameChanged = e => setName(e.target.value)
    const onSaveMageClicked = () => {
        if (canSave) {
            try {
                setAddRequestStatus('pending')
                dispatch(addNewMage({ name })).unwrap()

                setName('')

            } catch (err) {
                console.error('Failed to save the post', err)
            } finally {
                setAddRequestStatus('idle')
            }
        }

    }
    return (
        <section>
            <h2>Add a New Mage</h2>
            <form>
                <label htmlFor="mageName">Mage Name:</label>
                <input
                    type="text"
                    id="mageName"
                    name="mageName"
                    value={name}
                    onChange={onNameChanged}
                />
                <button
                    type="button"
                    onClick={onSaveMageClicked}
                    disabled={!canSave}
                >Save Mage</button>
            </form>
        </section>
    )
}
export default AddMageForm