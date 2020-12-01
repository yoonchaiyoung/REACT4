import React from "react";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";
import Profile from "./Profile";

const Container = styled.div`
  padding: 10px;
`;

const Title = styled.h1`
  font-size: 3rem;
  /* rem, em : font-size에 대한 비율
  rem : 현재 div의 크기가 10px이면 1rem.. 그렇게 2rem, 3rem.. 배수로 
  -> 장점 : 화면 크기에 따라 글씨 크기 변화. 모바일도.
  em : 14px=1em, 24px=2em.. */
  font-weight: 700;
`;

const Profiles = () => {
  return (
    <Container>
      <Title>사용자 목록</Title>
      <ul>
        <li>
          <Link to="/profiles/cy">윤채영</Link>
        </li>
        <li>
          <Link to="/profiles/hong">홍길동</Link>
        </li>
      </ul>
      <hr />
      <Route
        path="/profiles"
        exact // exact={true} 랑 동일 표현. 속성 이름만 있으면 자동으로 true.
        render={() => <div>사용자를 선택해 주세요!</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </Container>
  );
};

export default Profiles;
