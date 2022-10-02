import { Fragment, useEffect, useState } from "react";
import HomePage from './[submissionsId]';
import { useRouter } from 'next/router';
import { useSelector, useDispatch} from 'react-redux'
import { getPresentTable } from "../redux/slices/past-present-actions";

function Index(props) {
  const presentState = useSelector((state) => state.present);
  
  const dispatch = useDispatch()
  const router = useRouter()
  useEffect(() => {
    dispatch(getPresentTable())
    if(props.stateIsSet === false){
      props.setStateIsSet(true)
      console.log(presentState)
      router.push(`-`)
    }
  },[presentState])


  
  return (
    <Fragment>
      <HomePage />
    </Fragment>
  );
}

export default Index;
