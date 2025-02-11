import React from "react";
import { Route } from "react-router-dom";
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from "zmp-ui";
import { RecoilRoot } from "recoil";
import HomePage from "pages/index";
import ProfilePage from "pages/profile";
import TicketPage from "pages/ticket";
import NewsPage from "pages/news";
import BottomNav from "components/bottomnav";

const MyApp = () => {
  return (
    <RecoilRoot>
      <App>
        <SnackbarProvider>
          <ZMPRouter>
            <AnimationRoutes>
              <Route path="/" element={<HomePage></HomePage>}></Route>
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/ticket" element={<TicketPage />} />
              <Route path="/news" element={<NewsPage />} />
            </AnimationRoutes>
            <BottomNav />
          </ZMPRouter>
          
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
};
export default MyApp;
