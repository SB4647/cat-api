import React from "react";
import { Search } from "./Search";
import { shallow, mount } from "enzyme";

describe("Search Component Tests", () => {
  it("should render", () => {
    const wrapper = shallow(<Search />);
    expect(wrapper).toBeTruthy();
  });

  it("should call setter", () => {
    const myMock = jest.fn(); // Stateful functions, e.g aware calls,
    const wrapper = mount(<Search setSearchedBreed={myMock} />);
    const input = wrapper.find("input");
    expect(myMock.mock.calls.length).toBe(0);
    input.simulate("change");
    expect(myMock.mock.calls.length).toBe(1);
    input.simulate("change");
    input.simulate("change");
    expect(myMock.mock.calls.length).toBe(3);
  });
});
