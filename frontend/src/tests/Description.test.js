import React from "react";
import Description from "../components/Description";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const selectedBook = {
    title: "Book One",
    synopsis: "synopsis goes here..."
  };
  const tree = renderer.create(<Description selectedBook={selectedBook} />).toJSON();
  expect(tree).toMatchSnapshot();
});
