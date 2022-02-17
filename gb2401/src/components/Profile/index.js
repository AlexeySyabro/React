import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { changeName, changeShowName } from "../../store/profile/actions";
import { selectName, selectShowName } from "../../store/profile/selectors";

export const Profile = () => {

    const dispatch = useDispatch();
    const showName = useSelector(selectShowName, shallowEqual);
    const name = useSelector(selectName);

    const handleChangeShowName = () => {
        dispatch(changeShowName);
    };

    const handleChangeName = (text) => {
        dispatch(changeName(text));
    };

    return (
    <>
    <h2>Profile page</h2>
    <div>
        {showName && <span>{name}</span>}
        <input type="checkbox" onClick={handleChangeShowName} />
    </div>
    </>
    );
};