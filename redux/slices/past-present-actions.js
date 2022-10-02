import { pastActions } from "./past-slice";
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
      if (presentData) {
        dispatch(presentActions.addToPresent(presentArr));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPresentTable = () => {
  return async (dispatch) => {
    const presentResponse = async () => {
      const response = await fetch(
        "https://next-js-da535-default-rtdb.firebaseio.com/present/array.json"
      );
      const data = await response.json();
      return data;
    };

    const pastResponse = async () => {
      const response = await fetch(
        "https://next-js-da535-default-rtdb.firebaseio.com/past/array.json"
      );
      const data = await response.json();
      return data;
    };
    try {
      const presentData = await presentResponse();
      const pastData = await pastResponse();
      if (presentData) {
        dispatch(presentActions.addToPresent(presentData));
      }
      if (pastData) {
        dispatch(pastActions.addToPast(pastData));
      }
    } catch (error) {
      console.log(error);
    }
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
      if (presentData) {
        dispatch(pastActions.addToPast(presentData));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
