import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
function InputComponent() {
  const router = useRouter();
  const [inputText, setInputText] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    //clear input field here on submit
  };

  const goBackHandler = () => {
    router.back()
    setInputText(router.query.submissionsId);
  }
  const goForwardHandler = () => {
  }

  return (
    <Fragment>
      <form onSubmit={onSubmitHandler}>
        <textarea
          onChange={(e) => {
            setInputText(e.target.value);
            router.push(`/${e.target.value}`)
          }}
          placeholder="Your Text Here!"
        ></textarea>
        <button type="submit"> Submit </button>
      </form>
        <button onClick={goBackHandler} type="submit"> Back </button>
        <button onClick={goForwardHandler} type="submit"> Forward </button>
    </Fragment>
  );
}

export default InputComponent;
