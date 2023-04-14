import {useSelector} from 'react-redux'

const Blogs = () => {
    const userList = useSelector(state => state.HomeReducer.data);
    console.log("Test");
    console.log(userList);
    console.log("Test");
    return <h1>Blog Articles</h1>;
};
  
export default Blogs;