import {useEffect, useState, useRef, useReducer} from 'react'

// const dataFetchReducer = (state, action) => {
//     switch (action.type) {
//         case 'FETCH_INIT':
//             return {
//                 ...state,
//                 isLoading: true,
//                 isError: false
//             };
//         case 'FETCH_SUCCESS':
//             return {
//                 ...state,
//                 isLoading: false,
//                 isError: false,
//                 data: action.payload,
//             };
//         case 'FETCH_FAILURE':
//             return {
//                 ...state,
//                 isLoading: false,
//                 isError: true,
//             };
//         default:
//             throw new Error();
//     }
// };

const setupSocket = (url) => {
    const socket = new WebSocket(url)

    socket.open = false;
    socket.onopen = (e) => {
        socket.open = true;
        socket.subscribeBlock();
    }

    socket.onclose = (e) => {
        socket.open = false;
    }

    socket.onerror = (e) => {
        socket.open = false;
    }

    socket.ping = () => {
        if (socket.open)
            return socket.send('{"op":"ping"}')
        else
            return false;
    }
    socket.subscribeBlock = () => {
        if (socket.open)
            return socket.send('{"op":"blocks_sub"}')
        else
            return false;
    }
    socket.unsubscribeBlock = () => {
        if (socket.open)
            return socket.send('{"op":"blocks_unsub"}')
        else
            return false;
    }

    socket.getBlock = () => {
        if (socket.open)
            return socket.send('{"op":"ping_block"}')
        else
            return false;
    }

    socket.getTx = () => {
        if (socket.open)
            return socket.send('{"op":"ping_tx"}')
        else
            return false;
    }

    socket.subscribeTx = () => {
        if (socket.open)
            return socket.send('{"op":"unconfirmed_sub"}')
        else
            return false;
    }
    socket.unsubscribeTx = () => {
        if (socket.open)
            return socket.send('{"op":"unconfirmed_unsub"}')
        else
            return false;
    }
    socket.onmessage = (event) => {
        // switch (data.type) {
        //     case types.PING:
        //         dispatch(messageReceived(data.message, data.author))
        //         break
        //     case types.SUBSCRIBE:
        //         dispatch(messageReceived(data.message, data.author))
        //         break
        //     case types.UNSUBSCRIBE:
        //         dispatch(addUser(data.name))
        //         break
        //     case types.TX_LIST:
        //         dispatch(populateUsersList(data.users))
        //         break
        //     default:
        //         break
        // }
    }
    return socket
}

const useWssApi = (initialUrl, initialData) => {
    const [{data, isLoading , isError}] = useState({
        data: initialData,
        isLoading: true,
        isError: false
    });
    const [url, setUrl] = useState(initialUrl);
    const mySocket = setupSocket(url)
    mySocket.addEventListener('open', function (event) {
        mySocket.ping();
        mySocket.subscribeBlock();
        mySocket.subscribeTx();
    });

    mySocket.addEventListener('message', function (event) {
    });

    // const [state, dispatch] = useReducer(dataFetchReducer, {
    useEffect(() => {
        let didCancel = false;

        const fetchData = async () => {
            try {
        //         await mySocket.subscribeBlock()
                mySocket.addEventListener('message', (e) => mySocket.onmessage(e.data));
        //         setData({
        //             ...data,
        //             isLoading: false,
        //             isError: false
        //         });
            } catch (error) {
                console.log(error)
        //         setData({
        //             data: [],
        //             isLoading: false,
        //             isError: true
        //         });
            }
        };
        //
        fetchData();
        return () => {
            didCancel = true;
            mySocket.removeEventListener('message', (e) => mySocket.onmessage(e.data));
        };
    }, [url]);

    return [{ data, isLoading, isError }, setUrl];
}

export default useWssApi