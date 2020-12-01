import React from "react";

const data = {
  cy: {
    name: "윤채영",
    desc: "행복합니다😁",
  },
  hong: {
    name: "홍길동",
    desc: "점심 메뉴 추천받습니다😏",
  },
};

const Profile = ({ match }) => {
  // 원래 그냥 (props) 해서
  // console.log(props); 콘솔가서 봤더니
  // match -> params -> {username: "hong"} 이렇게 담겨져 잇음.
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <p>
        {username} ({profile.name})
      </p>
      <p>{profile.desc}</p>
    </div>
  );
};

export default Profile;
