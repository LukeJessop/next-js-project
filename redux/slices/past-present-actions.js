import { pastActions } from "./past-slice";
import axios from "axios";
import { presentActions } from "./present-slice";

export const addToPresentTable = (presentArr) => {
  return async (dispatch) => {
    const uploadData = async () => {
      const response = await fetch(
        "https://next-js-da535-default-rtdb.firebaseio.com/present.json",
        {
          method: "PUT",
          body: JSON.stringify({ array: presentArr })
        }
      );
      const data = await response.json();

      return data.array;
    };

    try {
      const presentData = await uploadData();
      console.log(presentData);
      dispatch(presentActions.addToPresent(presentArr));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPresentTable = () => {
  return async (dispatch) => {
    const response = async () => {
      axios
        .get(
          "https://next-js-da535-default-rtdb.firebaseio.com/present/array.json"
        )
        .then((res) => {
            if(res.data){
                dispatch(presentActions.addToPresent(res.data));
            }
        })
        .catch((err) => console.log(err));
    };

    await response();
  };
};

// get from presentTable function

export const addToPastTable = (pastArr) => {
  return async (dispatch) => {
    const uploadData = async () => {
      const response = await fetch(
        "https://next-js-da535-default-rtdb.firebaseio.com/past.json",
        {
          method: "PUT",
          body: JSON.stringify({ array: pastArr })
        }
      );
      const data = await response.json();

      return data.array;
    };

    try {
      const presentData = await uploadData();
      console.log(presentData);
      dispatch(pastActions.addToPast(presentData));
    } catch (error) {
      console.log(error);
    }
  };
};
