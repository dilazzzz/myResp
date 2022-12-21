import React, {useState} from "react";
import Form from "./Components/Form/Form";
import PostList from "./Components/Postlist/PostList";
import Counter from "./Components/useState/Counter";
import appStyles from './app.css'
import Data from "./Components/useEffect/Data";
import UseRef from "./Components/useRef/useRef";
import UseMemo from "./Components/useMemo/UseMemo";
import Sort from "./Components/Sort/Sort";
function App() {

    const [counter, setCounter] = useState(0)
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
        {/*<Form posts={posts} setPosts={setPosts} />*/}
        {/*<PostList posts={posts} setPosts={setPosts}/>*/}
        {/*<Counter counter={counter} setCounter={setCounter}  />*/}
        {/*<Data counter={counter} />*/}
        {/*<UseRef />*/}
        {/*<UseMemo />*/}
        <Sort/>
    </div>
  );
}

export default App;
