import UserReducer from '../../reducers/UserReducer';

describe('users Reducer', () => {
    const initialState = {
        users: [],
        searched_users: [],
        user_posts: [],
        user_name: null,
    };

    // TEST DEFAULT STATE USER REDUCER
    it('Returns the initial state when an action type is not passed', () => {
        const reducer = UserReducer(undefined, {});

        expect(reducer).toEqual(initialState);
    });

    // TEST USER REDUCER FOR ALL USERS
    it('handles GET_ALL_USERS as expected', () => {
        const mockData = [{ id: 1, name: "Leanne Graham" }];
        const reducer = UserReducer(initialState, { 
            type: "GET_ALL_USERS",
            payload: mockData,
        });

        expect(reducer).toEqual({
            users: mockData,
            searched_users: mockData,
            user_posts: [],
            user_name: null,
        });
    });

    // TEST USER REDUCER FOR SEARCHED USERS
    it('handles GET_ALL_SEARCHED_USERS as expected', () => {
        const mockData = [{ id: 1, name: "Leanne Graham" }];
        const reducer = UserReducer(initialState, { 
            type: "GET_ALL_SEARCHED_USERS",
            searched_users: mockData,
        });

        expect(reducer).toEqual({
            users: [],
            searched_users: mockData,
            user_posts: [],
            user_name: null,
        });
    });

    // TEST USER REDUCER FOR USER POSTS
    it('handles GET_USER_POSTS as expected', () => {
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

        const reducer = UserReducer(initialState, { 
            type: "GET_USER_POSTS",
            payload: mockDataUserPosts,
            user_name: "Leanne Graham",
        });

        expect(reducer).toEqual({
            users: [],
            searched_users: [],
            user_posts: mockDataUserPosts,
            user_name: "Leanne Graham",
        });
    });
});