import React, { Component } from "react";

import "./styles.css";

const styles = {
  item: {
    listStyleType: "none"
  },
  listValue: {
    padding: "15px",
    boxSizing: "border-box",
    display: "inline-block",
    width: "200px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  list: {
    padding: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
};

const Item = ({ value }) => (
  <li style={styles.item}>
    <span className="item" style={styles.listValue}>
      {value}
    </span>
  </li>
);

const List = ({ items }) => (
  <ul style={styles.list}>
    {items.map(item => <Item key={item} value={item} />)}
  </ul>
);

export default List;
