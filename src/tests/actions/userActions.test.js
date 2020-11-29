import mockAxios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import { getUsers } from "../../actions/UserActions";
import * as UserConstants from "../../constants/UserConstants";
import * as ErrorConstants from "../../constants/ErrorConstants";

configureMockStore([thunk, promiseMiddleware]);

describe("User Actions", () => {

  describe("getUsers action creator", () => {
    it("dispatches GET_ALL_USERS action and returns data on success", async () => {
      const mockData = [{ id: 1, name: "Leanne Graham" }];

      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
          data: mockData,
        })
      );
      
      const mockDispatch = jest.fn();
      await getUsers(mockDispatch);
      
      expect(mockDispatch).toHaveBeenCalledWith({
        type: UserConstants.GET_ALL_USERS,
        payload: mockData,
      });
    });

    it("dispatches GET_ALL_USERS_ERROR action on error", async () => {
      mockAxios.get.mockImplementationOnce(() => Promise.reject());
  
      const mockDispatch = jest.fn();
      await getUsers(mockDispatch);
  
      expect(mockDispatch).toHaveBeenCalledWith({
        type: ErrorConstants.GET_ALL_USERS_ERROR,
        message: "Couldn't get all users. Please try again!"
      });
    });
  });
});