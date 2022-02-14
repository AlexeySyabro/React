import { useDispatch, useSelector } from "react-redux";
import { changeShowName } from "../../store/profile/actions";

export const Profile = () => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state);
    const handleChangeShowName = () => {
        dispatch(changeShowName);
    };

    return (
    <>
    <h2>Profile page</h2>
    <div>
        {data.showName && <span>{data.name}</span>}
        <input type="checkbox" onClick={handleChangeShowName} />
    </div>
    </>
    );
};