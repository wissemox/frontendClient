import React, { useEffect } from "react";
import { Card, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';
  import './comment.css'
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../js/actions/authActions";
const CommentList = ({}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getComments());
  }, []);
  
  const comments = useSelector((state) => state.Forums.forum.findCmnt);
  return (
      
    <div >
        {console.log(getComments)}
      {comments && comments.map((el)=>
      <div className="row1">
      <div className="column1" >
        <h4>{el.name}</h4>
        <p>{el.comment}</p>
      </div>


    </div>
)}
      
    </div>
  );
};

export default CommentList;