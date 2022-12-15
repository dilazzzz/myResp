import React, {useState} from 'react';
import Button from "./Button/Button";
import Input from "./Inputs/input";
import formStyles from './form.module.css'

const Form = ({posts, setPosts}) => {

    const[title, setTitle] = useState('')
    const[descr, setDescr] = useState('')
    const addNewPost = (e) => {
        e.preventDefault()
        const newPost ={
            id:Date.now(),
            title,
            descr
        }
        setPosts([newPost, ...posts])
        setTitle('')
        setDescr('')
    }

    return (
        <div>
            <form action="myResp/src/Components/Form" className={formStyles.form}>
                <Input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type='text'
                    placeholder='Post title'
                />
                <Input
                    value={descr}
                    onChange={e => setDescr(e.target.value)}
                    type='text'
                    placeholder='Post description'
                />
                <Button onClick={addNewPost} disabled={!title || !descr}>Create post</Button>
            </form>
        </div>
    );
};

export default Form;