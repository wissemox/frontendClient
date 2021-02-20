import React from 'react'
import {useDispatch} from 'react-redux'
import {DeltedUser02} from '../../js/actions/authActions'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
const AlluserMap = ({el}) => {
    const dispatch = useDispatch()
    const DeletedUser = () =>{
      dispatch(DeltedUser02(el.email))
    }
    return (
        <div >
          <Card>
        <CardBody>
          <CardTitle tag="h5"></CardTitle>
          <CardSubtitle tag="h6" className="mb-2">{`Name: ${el.name}`}</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{`Last name: ${el.lastName}`}</CardSubtitle>
          <CardText>{el.email}</CardText>
          <Button onClick={DeletedUser}>Ban</Button>
        </CardBody>
      </Card>
        </div>
    )
}

export default AlluserMap
