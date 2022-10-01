import { Fragment, useEffect } from "react";
import HomePage from './[submissionsId]';
import { useRouter } from 'next/router';
import { useSelector, useDispatch} from 'react-redux'
import {getPresentTable} from '../redux/slices/past-present-actions'

function Index() {
  const dispatch = useDispatch()
  const router = useRouter()
  useEffect(() => {
    dispatch(getPresentTable())
  },[])
  
  const pushToPath = (arr) => {
    for(let i = 0; i < arr.length; i++){
      router.push(arr[i])
      console.log('I equals: ' + arr[i])
    }
  }

  return (
    <Fragment>
      <HomePage />
    </Fragment>
  );
}

export default Index;
