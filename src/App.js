import React, {useState} from "react";
import Form from "./Components/Form/Form";
import PostList from "./Components/Postlist/PostList";
import appStyles from './app.css'
function App() {

    const [posts, setPosts] = useState(
        [
            {id: 1, title: 'Sanek', descr: 'Sanek molodec'},
            {id: 2, title: 'Tema', descr: 'Tema molodec'},
            {id: 3, title: 'Pepa', descr: 'Pepa molodec'},
            {id: 4, title: 'Til', descr: 'Til molodec'}
        ]
    )

  return (
    <div className="App">
        <Form posts={posts} setPosts={setPosts}/>
        <PostList posts={posts} setPosts={setPosts}/>
    </div>
  );
}

export default App;
