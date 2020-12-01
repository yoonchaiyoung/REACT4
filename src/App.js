import { Route, Link, Switch, withRouter } from "react-router-dom";
import styled from "styled-components";
import About from "./Components/About";
import Home from "./Components/Home";
import Profiles from "./Components/Profiles";
import GlobalStyles from "./GlobalStyles";

const Header = styled.header`
  color: white;
  position: fixed; // scroll 내려도 그대로 떠있는 것
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  z-index: 10;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  text-align: center;
  height: 50px;

  border-bottom: 3px solid
    ${(props) => (props.current ? "#3498db" : "transparent")};
  // current 가 true면 밑줄
  // false면 아무 효과 없음
  transition: border-bottom 0.5s ease-in-out;
  // 애니메이션 : 0.5초만에 변화를 시키겠다.
`;

// styled-components를 이용해서 스타일링 시 기존 컴포넌트를 상속한 형태로 스타일링
// 스타일링도 상속 가능
// 기존에 있던 Link를 상속받아서 새롭게 스타일링
const StyledLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  // console.log(window.location.pathname);
  return (
    <>
      <GlobalStyles />
      <Header>
        <List>
          <Item current={window.location.pathname === "/"}>
            {/* 현재 path가 / 이면
            즉, 지금이 홈페이지이면,
            true가 되서 밑줄이 그어지게 할 것임. */}
            <StyledLink to="/">홈</StyledLink>
          </Item>
          <Item current={window.location.pathname === "/about"}>
            <StyledLink to="/about">소개</StyledLink>
          </Item>
          <Item current={window.location.pathname === "/profile"}>
            <StyledLink to="/profiles">프로필</StyledLink>
          </Item>
        </List>
      </Header>

      {/* Switch : 여러 개의 component 중 하나의 component만 화면에 띄워주는 역할을 하는 공간 */}
      <Switch>
        {/* component 들어감 */}
        <Route path="/" component={Home} exact={true} />
        {/* 위쪽에 적어놓은 링크 그대로 path */}
        {/* exact={true}를 하지 않으면 앞에서부터 path를 읽을 때 이미 등록된
        home 의 / 링크가 있으니까 소개 버튼을 눌러도 home 페이지로 간다.
        그래서 exact={true}를 해줘야 한다. */}
        <Route path="/about" component={About} />

        <Route path="/profiles" component={Profiles} />
      </Switch>

      <div>페이지</div>
      {/* 링크에 대한 페이지(component)를 여기에 만듦 */}
    </>
  );
}

export default withRouter(App);
// 이렇게 쓰면 router가 바뀔 때마다 다시 렌더링이 일어남.
// 콘솔에 클릭한 URL 주소가 뜸. (원래는 홈(/) 만 떴었음.)
