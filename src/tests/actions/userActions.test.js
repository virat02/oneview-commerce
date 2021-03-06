import mockAxios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import * as UserActions from "../../actions/UserActions";
import * as UserConstants from "../../constants/UserConstants";
import * as ErrorConstants from "../../constants/ErrorConstants";

configureMockStore([thunk, promiseMiddleware]);

describe("User Actions", () => {

  // GET USERS ACTION
  describe("getUsers action creator", () => {
    it("dispatches GET_ALL_USERS action and returns data on success", async () => {
      const mockData = [{ id: 1, name: "Leanne Graham" }];

      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
          data: mockData,
        })
      );
      
      const mockDispatch = jest.fn();
      await UserActions.getUsers(mockDispatch);
      
      expect(mockDispatch).toHaveBeenCalledWith({
        type: UserConstants.GET_ALL_USERS,
        payload: mockData,
      });
    });

    it("dispatches GET_ALL_USERS_ERROR action on error", async () => {
      mockAxios.get.mockImplementationOnce(() => Promise.reject());
  
      const mockDispatch = jest.fn();
      await UserActions.getUsers(mockDispatch);
  
      expect(mockDispatch).toHaveBeenCalledWith({
        type: ErrorConstants.GET_ALL_USERS_ERROR,
        message: "Couldn't get all users. Please try again!"
      });
    });
  });

  // SEARCH USERS ACTION
  describe("searchUsers action creator", () => {
    it("dispatches GET_ALL_SEARCHED_USERS action and returns filtered data on success", () => {
      // INITIAL DATA
      const mockData = [
        { id: 1, name: "Leanne Graham" }, 
        { id: 2, name: "Ervin Howell" }
      ];
      
      const mockDispatch = jest.fn();

      // CASE 1: ALL-LOWERCASE SEARCH
      UserActions.searchUsers(mockDispatch, 'le', mockData);
      
      let expectedData = [
        { id: 1, name: "Leanne Graham" },
      ];

      expect(mockDispatch).toHaveBeenCalledWith({
        type: UserConstants.GET_ALL_SEARCHED_USERS,
        searched_users: expectedData,
      });

      // CASE 2: ALL-UPPERCASE SEARCH
      UserActions.searchUsers(mockDispatch, 'ER', mockData);
      
      expectedData = [
        { id: 2, name: "Ervin Howell" },
      ];

      expect(mockDispatch).toHaveBeenCalledWith({
        type: UserConstants.GET_ALL_SEARCHED_USERS,
        searched_users: expectedData,
      });

      // CASE 3: UPPERCASE+LOWERCASE SEARCH
      UserActions.searchUsers(mockDispatch, 'Er', mockData);
      
      expectedData = [
        { id: 2, name: "Ervin Howell" },
      ];

      expect(mockDispatch).toHaveBeenCalledWith({
        type: UserConstants.GET_ALL_SEARCHED_USERS,
        searched_users: expectedData,
      });

      // CASE 4: EMPTY SEARCH
      UserActions.searchUsers(mockDispatch, '', mockData);

      expect(mockDispatch).toHaveBeenCalledWith({
        type: UserConstants.GET_ALL_SEARCHED_USERS,
        searched_users: mockData,
      });

      // CASE 5: SEARCH RETURNS NO DATA
      UserActions.searchUsers(mockDispatch, 'abc', mockData);

      expect(mockDispatch).toHaveBeenCalledWith({
        type: UserConstants.GET_ALL_SEARCHED_USERS,
        searched_users: [],
      });
    });
  });

  // GET USERS POSTS ACTION
  describe("getUserPosts action creator", () => {
    it("dispatches GET_USER_POSTS action and returns user's posts on success", async () => {
      // INITIAL DATA
      const mockDataUserPosts = [
        {
          userId: 1,
          id: 1,
          title: "Title 1",
          body: "Body 1"
        },
        {
          userId: 1,
          id: 2,
          title: "Title 2",
          body: "Body 2"
        }
      ];
      
      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
          data: mockDataUserPosts,
        })
      );

      const mockDispatch = jest.fn();
      await UserActions.getUserPosts(mockDispatch, 1, "Leanne Graham");
  
      expect(mockDispatch).toHaveBeenCalledWith({
        type: UserConstants.GET_USER_POSTS,
        payload: mockDataUserPosts,
        user_name: "Leanne Graham",
      });
    });

    it("dispatches GET_ALL_USERS_ERROR action on error", async () => {
      mockAxios.get.mockImplementationOnce(() => Promise.reject());
      const userId = 1;
      const mockDispatch = jest.fn();
      await UserActions.getUserPosts(mockDispatch, userId, "Leanne Graham");
  
      expect(mockDispatch).toHaveBeenCalledWith({
        type: ErrorConstants.GET_USER_POSTS_ERROR,
        message: "Couldn't get user posts. Please try again!",
      });
    });
  });
});