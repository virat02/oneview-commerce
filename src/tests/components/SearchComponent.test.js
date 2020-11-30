import React from 'react';

import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

import TableComponent from '../../components/TableComponent';
import SearchComponent from '../../components/SearchComponent';

configure({adapter: new Adapter()});

const mockData = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496"
            }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
        }
    }
];

describe('<SearchComponent>', () => {
    let props;
    beforeEach(() => {
        props = {
            users: mockData,
            searched_users: mockData,
            user_posts: [],
            user_name: null,
        };
    });

    // TEST searchUsers IS CALLED ON USER INPUT IN SEARCH BOX
    it('Filters results in table', () => {
        // SETUP MOCKS
        props.searchUsers = jest.fn();
        const wrapper = shallow(<SearchComponent { ...props }/>);

        const instance = wrapper.instance();
        const spy = jest.spyOn(instance.props, 'searchUsers');

        // WHEN
        wrapper.find('#user-search').simulate('change', { 
            target: { value: 'le' } 
        });

        // THEN
        expect(spy).toHaveBeenCalledTimes(1);
    });
});