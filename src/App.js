import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import axios from "axios";
import ItemDetail from "./pages/ItemDetail";

const App = () => {

    const [posts,setPosts] = useState([])

        const fetchData = async () => {
            const res = await axios.get('https://hacker-news.firebaseio.com/v0/newstories.json')
            setPosts(res.data.slice(0, 100))
        }

    useEffect(() => {

        fetchData()

        const intervalId = setInterval(() => {
            fetchData();
        }, 60000);

        return () => clearInterval(intervalId);
    }, [])

    return (
        <div className='main'>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Main posts={posts} fetchData={fetchData}/>}/>
                    <Route path='/:id' element={<ItemDetail/>}/>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;