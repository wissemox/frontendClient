import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getComments, addComment } from "../js/actions/authActions";
import CommentList from "./commentList";
import { Link } from 'react-router-dom';
import Navbar02 from "../navbar/navbar02";
const AddComments = () => {
    const userName=  useSelector((state)=> state.authReducer.user)
    const cmntForum=  useSelector((state)=> state.Forums.Forum)
  const [name, setName] = useState(userName&&userName.name);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getComments());
  }, []); 
  const add = () => {
    dispatch(addComment({ name, comment }));
    setComment("")
  };
  return (
    <>
          <div>
          <div className="BackgroundERR">
            <Navbar02 />
            <Link to='/Dashboard'  > <button style={{width: "150px",
  backgroundColor: "#2a98ff",
  border: "none",
  outline: "none",
  height: "49px"}}>
    Back to Dashboard</button> </Link>
    
          <CommentList />
        
          <Form>
            
            <FormGroup>
              <Label for="examplePassword"></Label>
              <Input
              style={{
                width: "100%",
                padding: "12px 20px",
              margin: "8px 0",
         display: "inline-block",
        border: "1px solid #ccc",
         borderRadius: "4px",
          boxSizing: "border-box"
              }}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                type="text"
                placeholder="type your comment"
              />
            </FormGroup>
            <Button onClick={add}>Add comment</Button>
          </Form>
          </div>
        </div>
    </>
  );
};

export default AddComments;