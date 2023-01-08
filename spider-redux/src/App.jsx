// import PostsList from "./features/posts/PostsList";
// import AddPostForm from "./features/posts/AddPostForm";
// import SinglePostPage from "./features/posts/SinglePostPage";
// import EditPostForm from "./features/posts/EditPostForm";
// import Layout from "./components/Layout";
// import { Routes, Route } from 'react-router-dom';


import { BrowserRouter} from 'react-router-dom'
import Router from './Router'


function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}


export default App;