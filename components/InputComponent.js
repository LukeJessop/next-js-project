import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { faRedo } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useDispatch } from "react-redux";
import {
  addToPresentTable,
  addToPastTable
} from "../redux/slices/past-present-actions";
import { presentActions } from "../redux/slices/present-slice";
import { pastActions } from "../redux/slices/past-slice";
function InputComponent() {
  const [inputText, setInputText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [presentArr, setPresentArr] = useState([]);
  const [pastArr, setPastArr] = useState([]);

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addToPastTable(pastArr));
    dispatch(addToPresentTable(presentArr));
    
    if (router.query.submissionsId) {
      setInputText(router.query.submissionsId);
      setSubmitted(false);
    }
  }, [router.query.submissionsId]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    event.target[0].value = "";
    event.target[0].blur();
    // setSubmitted(true)
  };
  const goBackHandler = () => {
    let incomingItem = presentArr.pop();
    setPastArr((prevArr) => {
      console.log(incomingItem);
      return [...prevArr, incomingItem];
    });

    dispatch(presentActions.removeFromPresent());
    // add fat action here
    window.history.back();
  };
  const goForwardHandler = () => {
    // add to present Table function

    let incomingItem = pastArr.pop();
    setPresentArr((prevArr) => {
      console.log(incomingItem);
      return [...prevArr, incomingItem];
    });
    dispatch(pastActions.removeFromPast());
    window.history.forward();
  };

  return (
    <Fragment>
      <form onSubmit={onSubmitHandler}>
        <input
          onChange={(e) => {
            e.preventDefault();
            router.push(`/${e.target.value}`);
            setPresentArr(() => {
              return [...e.target.value.split("")];
            });
            setPastArr([]);
            setInputText(e.target.value);
          }}
          placeholder="Your Text Here!"
          value={inputText}
          autoFocus
        ></input>
        <button type="submit"> Submit </button>
      </form>
      <button
        disabled={presentArr.length === 0 && !submitted ? true : false}
        onClick={goBackHandler}
        type="submit"
      >
        <FontAwesomeIcon icon={faUndo} />
      </button>
      <button
        disabled={pastArr.length === 0 && !submitted ? true : false}
        onClick={goForwardHandler}
        type="submit"
      >
        <FontAwesomeIcon icon={faRedo} />
      </button>
      <p>{inputText}</p>
    </Fragment>
  );
}

export default InputComponent;
