import { remove } from "firebase/database";
import { getChatsRefById } from "../../servise/firebase";

export const DeleteButton = ({ id }) => {

    const handleDeleteChat = () => {
        remove(getChatsRefById(id));
    };
    
    return <div onClick={handleDeleteChat}>x</div>
}