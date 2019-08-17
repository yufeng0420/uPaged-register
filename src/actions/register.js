import { REGISTER_SUCCESS, REGISTER_FAIL } from "./types";

export const register = (
  firstname,
  lastname,
  email,
  skills,
  status
) => dispatch => {
  try {
    dispatch({
      type: REGISTER_SUCCESS,
      payload: { firstname, lastname, email, skills, status }
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL
    });
  }
};
