import {useState} from 'react';
import classes from './NewPost.module.css';
function NewPost(props) {
  const[enteredText, setEnteredText] = useState('');
    const[enteredName, setEnteredName] = useState('');

    function handleChangeText(event){
        setEnteredText(event.target.value);
    }
    function handleChangeName(event){
        setEnteredName(event.target.value);
    }
    function submitHandler(event){
        event.preventDefault();
        const postData = {
            text: enteredText,
            name: enteredName
        };
        props.onAddPost(postData);
        props.onCancel();
    }

    
    
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={handleChangeText} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={handleChangeName}/>
      </p>
      <p className={classes.actions}>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;