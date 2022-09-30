import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo } from '@fortawesome/free-solid-svg-icons'
import { faRedo } from '@fortawesome/free-solid-svg-icons'


function InputComponent() {
  const router = useRouter();
  const [inputText, setInputText] = useState("");
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if(router.query.submissionsId){
      setInputText(router.query.submissionsId);
      setSubmitted(false)
    }
    
  }, [router.query.submissionsId]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    event.target[0].value = "";
    event.target[0].blur();
    setSubmitted(true)
  };
  const goBackHandler = () => {
    window.history.back();
  };
  const goForwardHandler = () => {
    window.history.forward()
  };

  return (
    <Fragment>
      <form onSubmit={onSubmitHandler}>
        <input
          onChange={(e) => {
            router.push(`/${e.target.value}`);
            setInputText(e.target.value);
          }}
          placeholder="Your Text Here!"
          value={inputText}
        ></input>
        <button type="submit"> Submit </button>
      </form>
      <button
        disabled={inputText && !submitted ? false : true}
        onClick={goBackHandler}
        type="submit"
      >
        <FontAwesomeIcon icon={faUndo} />
      </button>
      <button disabled={!submitted ? false : true} onClick={goForwardHandler} type="submit">
        <FontAwesomeIcon icon={faRedo} />
      </button>
      <p>{inputText}</p>
    </Fragment>
  );
}

export default InputComponent;
