import React from "react";

const Booklist = () => {
  return (
      <div className="App-booklist">
        <h2>To read</h2>
        <ul className="Books-to-read">
          <li>
            Lead with Respect
            <ul>
              <li>Michael Ballé & Freddy Ballé</li>
            </ul>
          </li>
          <li>
            Book 2
            <ul>
              <li>Author 1</li>
            </ul>
          </li>
          <li>
            Book 3
            <ul>
              <li>Author 3</li>
            </ul>
          </li>
        </ul>
        <h2>Currently reading</h2>
        <ul className="Books-reading">
          <li>
            Book 1
            <ul>
              <li>Author 1</li>
            </ul>
          </li>
        </ul>
        <h2>Finished reading</h2>
        <ul className="Books-finished">
          <li>
            Book 1
            <ul>
              <li>Author 1</li>
            </ul>
          </li>
          <li>
            Book 2
            <ul>
              <li>Author 2</li>
            </ul>
          </li>
        </ul>
      </div>
  );
};

export default Booklist;
