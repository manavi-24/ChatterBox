import {Link,Form,redirect} from 'react-router-dom';
import classes from './NewPost.module.css';
import Modal from '../components/Modal';


function NewPost() {


    
    
  return (
    <Modal>
    <Form method='post' className={classes.form} >
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" name='text' required rows={3} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" name='name' required />
      </p>
      <p className={classes.actions}>
        <Link className={classes.btn} type='button' to='/'>Cancel</Link>
        <button type='submit'>Submit</button>
      </p>
    </Form>
    </Modal>
  );
}

export default NewPost;

/*export async function action({request}){
  const formData=await request.formData();
  const postData=Object.fromEntries(formData);
  await fetch('http://localhost:8080/posts',{
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json'
    },
  });
  return redirect('/');
}*/

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  console.log('Post Data:', postData); // Add this line to log the form data to the console

  // Ensure the data is being sent in the correct format
  const response = await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Check if the request was successful
  if (!response.ok) {
    console.error('Failed to submit the post');
    return redirect('/'); // Redirect back to the main page, if necessary
  }

  return redirect('/'); // Redirect after successful submission
}
