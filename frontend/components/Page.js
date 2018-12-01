import React, { Component } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Meta from "../components/Meta";

const MyBtutton = styled.button`
  background: red;
  font-size: 100px;
  border-radius: 5px;
  box-shadow: 10px 10px 5px 5px greenyellow;
`;

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <MyBtutton>Click Me!</MyBtutton>
        {this.props.children}
      </div>
    );
  }
}

export default Page;
