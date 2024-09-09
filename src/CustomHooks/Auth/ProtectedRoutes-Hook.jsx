import { useEffect, useState } from "react"
import Cookie from 'universal-cookie';

const ProtectedRoutesHook = () => {
    const cookie = new Cookie();
    const [isAdmin, setIsAdmin] = useState();
    const [isUser, setIsUser] = useState();

    useEffect(() => {
        const data = cookie.get('UserData');
        if (data) {
            if (data.is_superuser) {
                setIsAdmin(true);
                setIsUser(false);
            } else {
                setIsAdmin(false);
                setIsUser(true);
            }
        } else {
            setIsAdmin(false);
            setIsUser(false);
        }
    }, []);

    return [isAdmin, isUser];
}

export default ProtectedRoutesHook;
