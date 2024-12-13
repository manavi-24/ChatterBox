import classes from './Post.module.css';
import {Link} from 'react-router-dom';
function Post(props) {
  return (
    <li className={classes.post}>
      <Link to={`/posts/${props.id}`}>
      <p className={classes.name}>{props.name}</p>
      <p className={classes.text}>{props.text}</p>
      </Link>
    </li>
  );
}
export default Post;
