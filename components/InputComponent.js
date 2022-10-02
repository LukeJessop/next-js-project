import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { faRedo } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";
import {
  addToPresentTable,
  addToPastTable
} from "../redux/slices/past-present-actions";
import { presentActions } from "../redux/slices/present-slice";
import { pastActions } from "../redux/slices/past-slice";

function InputComponent() {
  const presentState = useSelector((state) => state.present);
  const pastState = useSelector((state) => state.past);

  const [inputText, setInputText] = useState("");

  const [presentArr, setPresentArr] = useState([...presentState]);
  const [pastArr, setPastArr] = useState([...pastState]);

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (router.query.submissionsId) {
      setInputText(router.query.submissionsId);
    }
  }, [router.query.submissionsId]);

  useEffect(() => {
    setTimeout(()=>{
      pushToRoute(presentState)
    }, 100)
  }, [])

  const pushToRoute = (arr) => {
    let routeArray = []
    for (let i = 0; i < arr.length; i++) {
      if(router.query.submissionsId !== presentState.join('')){
        router.push(`/${routeArray.join('')}${arr[i]}`)
        routeArray.push(`${arr[i]}`);
      }
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(addToPastTable(pastArr));
    dispatch(addToPresentTable(presentArr));
    console.log(event)
  };

  const goBackHandler = () => {
    let incomingItem = presentArr.pop();
    setPastArr((prevArr) => {
      return [...prevArr, incomingItem];
    });

    dispatch(presentActions.removeFromPresent());
    dispatch(pastActions.addToPast(incomingItem));
    if(router.query.submissionsId.length > 1){
      router.push(`${router.query.submissionsId.slice(0, -1)}`);
    }else{
      router.push(`-`);
    }
  };
  const goForwardHandler = () => {
    let incomingItem = pastArr.pop();
    setPresentArr((prevArr) => {
      return [...prevArr, incomingItem];
    });
    dispatch(pastActions.removeFromPast());
    dispatch(presentActions.addToPresent(incomingItem));
    router.push(`${router.query.submissionsId}${incomingItem}`);
  };

  return (
    <Fragment>
      <form>
        <input
          onChange={(e) => {
            e.preventDefault();
            router.push(`/${e.target.value}`);
            console.log(e.nativeEvent.data)
            if(e.nativeEvent.data !== ' '){
              setPresentArr(() => {
                const arr = [...e.target.value.split("")].slice(1);
                return arr
              });
              dispatch(presentActions.addToPresent(e.target.value));
            }
            setInputText(e.target.value);
            setPastArr([]);
            dispatch(pastActions.removeAllFromPast());
          }}
          placeholder="Your Text Here!"
          value={inputText}
          autoFocus
        ></input>
        <button onClick={onSubmitHandler}> Save </button>
      </form>
      <button
        disabled={presentArr.length === 0 ? true : false}
        onClick={goBackHandler}
      >
        <FontAwesomeIcon icon={faUndo} />
      </button>
      <button
        disabled={pastArr.length === 0 ? true : false}
        onClick={goForwardHandler}
      >
        <FontAwesomeIcon icon={faRedo} />
      </button>
      <p>{inputText}</p>
    </Fragment>
  );
}

export default InputComponent;
