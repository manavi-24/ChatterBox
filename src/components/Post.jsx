import classes from './Post.module.css';
function Post(props) {
  return (
    <li className={classes.post}>
      <p className={classes.name}>{props.name}</p>
      <p className={classes.text}>{props.text}</p>
    </li>
  );
}
export default Post;
