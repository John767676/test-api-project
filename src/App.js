import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import ItemDetail from "./pages/ItemDetail";
import {useDispatch} from "react-redux";
import {getPosts} from "./Features/Posts/postsSlice";

const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getPosts())

        const intervalId = setInterval(() => {
            dispatch(getPosts())
                }, 60000);

        return () => clearInterval(intervalId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='main'>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/:id' element={<ItemDetail/>}/>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;