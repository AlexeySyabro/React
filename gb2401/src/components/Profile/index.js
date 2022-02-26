import { onValue, set } from "firebase/database";
import { useEffect, useState } from "react";
import { logout, profileNameRef, profileShowNameRef } from "../../servise/firebase";
import { FormMui } from "../FormMui";

export const Profile = () => {

    const [name, setName] = useState('');
    const [showName, setShowName] = useState(false);

    const handleChangeShowName = () => {
        set(profileShowNameRef, !showName);
    };

    const handleChangeName = (text) => {
        set(profileNameRef, text)
    };

    useEffect(() => {
        const unsubscribeName = onValue(profileNameRef, (snapshot) => {
            setName(snapshot.val())
        });
        const unsubscribeShowName = onValue(profileShowNameRef, (snapshot) => {
            setShowName(snapshot.val())
        });

        return () => {
            unsubscribeName();
            unsubscribeShowName();
        };
    }, []);

    const handleLogout = async () => {
        try {
            await logout();
        } catch (e) {
            console.warn(e);
        }
    };

    return (
    <>
    <h2>Profile page</h2>
    <div>
        <button onClick={handleLogout}>LOGOUT</button>
    </div>
    <div>
        {showName && <h3>{name}</h3>}
        <input type="checkbox" onClick={handleChangeShowName} />
    </div>
    <FormMui onSubmit={handleChangeName} />
    </>
    );
};