import {useDispatch, useSelector} from 'react-redux'
import { Fragment } from "react";
import HomePage from './[submissionsId]';
function Index() {
  const textArray = useSelector((state) => state);
  console.log(textArray);
  return (
    <Fragment>
      <HomePage />
    </Fragment>
  );
}

export default Index;
