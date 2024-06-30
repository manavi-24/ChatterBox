import NewPost from "./NewPost";
import Post from "./Post";
import classes from './PostList.module.css';
import {useState} from 'react';
import Modal from './Modal';
function PostList(){
    const[enteredText, setEnteredText] = useState('');
    const[enteredName, setEnteredName] = useState('');
    const[modalIsVisible, setModalIsVisible] = useState(true);
    function handleChangeText(event){
        setEnteredText(event.target.value);
    }
    function handleChangeName(event){
        setEnteredName(event.target.value);
    }
    function handleOnClose(){
        setModalIsVisible(false);
    }
    return (
        <>
        {modalIsVisible &&
        (<Modal onClose={handleOnClose}>
        <NewPost changeText={handleChangeText} changeName={handleChangeName}/>
        </Modal>)}
        <ul className={classes.posts}>
        <Post name="Manavi" body="Hi, I am a writer" />
        <Post name={enteredName} body={enteredText} />
        </ul>
        </>
    );
}
export default PostList;