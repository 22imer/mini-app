import React, { Suspense , useEffect} from "react";
import { List, Page, Icon, useNavigate, Box, Text , Grid, Button} from "zmp-ui";
import UserCard from "components/user-card";
import ProfilePage from "pages/profile";
import { openCallScreen } from "components/Contact";
import { openChatScreen } from "components/openchat";
import FollowOAButton from "components/follow";
// import {follow} from "components/follow";
const HomePage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <Page className="page">
      <Suspense>
        <div className="section-container">
          <UserCard />
        </div>
      </Suspense>
      <Suspense fallback={<Text>Dang tai</Text>}>

      </Suspense>
      <Suspense>
      <Grid columnCount={2} columnSpace="20px" >
      <div
            style={{
              border: "solid 2px",
              height: "50px"

            }}
          >
            <Button fullWidth={true}> Uu dai</Button>
            </div>
          <div
            style={{
              border: "solid 2px",
              height: "50px"
            }}
          >
            <Button fullWidth={true} onClick={openCallScreen}>Lien he ngay</Button>
          </div>
      </Grid>
      </Suspense>
      <Suspense>
        
      </Suspense>
      <Suspense>
      </Suspense>
      <Suspense>
        <Box>
          <Button fullWidth={true}>Đặt lịch ngay</Button>
        </Box>
      </Suspense>
      <Suspense>
        <Box>
          <Button fullWidth={true} onClick={openChatScreen}>Chat</Button>
        </Box>
      </Suspense>
      <Suspense>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore numquam dicta possimus eligendi voluptatibus debitis sequi soluta quaerat a quibusdam officia alias ad ut beatae illo vitae molestiae, obcaecati aspernatur!
        </Text>
      </Suspense>
      
    </Page>
  );
};

export default HomePage;
