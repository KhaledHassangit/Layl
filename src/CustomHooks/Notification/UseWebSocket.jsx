import { useEffect, useState, useRef } from 'react';
import Cookies from 'universal-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteNotification, Notifications } from '../../Redux/Actions/AuthActions';

export const useWebSocket = (baseUrl) => {
    const [messages, setMessages] = useState([]);
    const dispatch = useDispatch();
    const cookie = new Cookies();
    const token = cookie.get("Access Token");
    const wsRef = useRef(null);
    const retryRef = useRef(null);

    const getNotifications = async () => {
        await dispatch(Notifications());
    };

    useEffect(() => {
        getNotifications();
    }, [dispatch]);

    const res = useSelector(state => state.AuthReducer.Notifications);

    const handleDeleteNotification = async (id) => {
        await dispatch(DeleteNotification(id));
        getNotifications(); 
    };

    useEffect(() => {
        if (!token) {
            return;
        }

        const connectWebSocket = () => {
            const url = `${baseUrl}?token=${token}`;
            wsRef.current = new WebSocket(url);

            wsRef.current.onopen = () => {
            };

            wsRef.current.onmessage = (event) => {
                try {
                    const data = JSON.parse(event.data);

                    setMessages(prevMessages => {
                        const isDuplicate = prevMessages.some(msg => msg.id === data.id);
                        if (isDuplicate) {
                            return prevMessages;
                        }
                        return [...prevMessages, data];
                    });

                } catch (error) {
                    console.error('Failed to parse WebSocket message:', error);
                }
            }

            wsRef.current.onerror = (error) => {
            };

            wsRef.current.onclose = (event) => {
                if (!event.wasClean) {
                    retryRef.current = setTimeout(connectWebSocket, 3000);
                }
            };
        };

        connectWebSocket();

        return () => {
            clearTimeout(retryRef.current);
            if (wsRef.current) {
                wsRef.current.close();
            }
        };
    }, [baseUrl, token]);

    return [messages, res, handleDeleteNotification, getNotifications];
};
