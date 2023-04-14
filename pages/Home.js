import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import allActions from '../store/actions';

const Home = () => {
    const [homeData, setHomeData] = useState([]);
    const dispatch = useDispatch()

    const fetchUserList = async () => {
        const res = await fetch("https://reqres.in/api/users/");
        const json = await res.json();
        setHomeData(json.data);
        dispatch(allActions.homeActions.getHomeData(json.data))
    };

    useEffect(()=>{
        fetchUserList();
    }, [])

    console.log(homeData)
    return (<h1>Home</h1>);
};
  
export default Home;