
import { useRouter } from "next/router";
import { Fragment, useEffect } from "react";
import InputComponent from "../components/InputComponent";
function HomePage() {
  const router = useRouter();
  let subId = router.query.submissionsId;
  return (
    <Fragment>
      <InputComponent />
      {subId}
    </Fragment>
  );
}

export default HomePage;
