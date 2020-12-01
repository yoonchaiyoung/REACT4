// styled-components를 사용함에 있어,
// 기본적인 테마를 설정하는 방법

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// `` 안에 CSS 코드
const GlobalStyles = createGlobalStyle`
    ${reset};  // 이 코드로 인해 html의 원래 있던 style들 다 사라짐
    a {  // anchor 태그 설정
        text-decoration: none;  // anchor 태그 밑줄 제거
        color: inherit;  // 상속. 부모의 color를 그대로 가져와서 사용하겠다.

    }

    * {  // 모든 태그 설정
        box-sizing: border-box;
    }

    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:12px;
        background-color:rgba(20,20,20,1);
        color:white;
        padding-top:50px
    }
`;

export default GlobalStyles;
