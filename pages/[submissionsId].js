
import { useRouter } from "next/router";
import { Fragment, useEffect } from "react";
import InputComponent from "../components/InputComponent";
function HomePage() {
  const router = useRouter();
  return (
    <Fragment>
      <InputComponent />
    </Fragment>
  );
}

export default HomePage;
