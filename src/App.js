import React, {useState} from "react";
import Form from "./Components/Form/Form";
import PostList from "./Components/Postlist/PostList";
import appStyles from './app.css'
function App() {

    const [posts, setPosts] = useState(
        [
            {id: 1, title: 'Sanek', descr: 'Sanek pidor'},
            {id: 2, title: 'Tema', descr: 'Tema pidor'},
            {id: 3, title: 'Pepa', descr: 'Pepa pidor'},
            {id: 4, title: 'Til', descr: 'Til pidor'}
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
