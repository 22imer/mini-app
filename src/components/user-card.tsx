import React from "react";
import { useRecoilValue } from "recoil";
import { userState } from "state";
import { Avatar, Box, Text } from "zmp-ui";

const UserCard: React.FunctionComponent = () => {
  const { userInfo } = useRecoilValue(userState);

  return (
    <Box flex>
      <Avatar
        story="default"
        online
        
      >
        {userInfo.avatar}
      </Avatar>
      <Box ml={4}>
        <Text.Title>Chào, {userInfo.name}</Text.Title>
        <Text>{userInfo.id}</Text>
      </Box>
      <Text>
        {userInfo.name}
      </Text>
    </Box>
  );
};

export default UserCard;
