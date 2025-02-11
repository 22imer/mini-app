import React from "react";
import { Page, Input ,Swiper, Text,Box,Header,Stack} from "zmp-ui";
import NewsList from "components/newslist";

export default function NewsPage(props) {
  return (
    <Page className="section-container" hideScrollbar={true}>
      <Header title="Uư đãi" />
      <Box
        mt={6}
        flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Swiper>
          <Swiper.Slide>
            <img
              className="slide-img"
              src="https://stc-zmp.zadn.vn/zmp-zaui/images/0e05d63a7a93a6cdff826.jpg"
              alt="slide-1"
            />
          </Swiper.Slide>
          <Swiper.Slide>
            <img
              className="slide-img"
              src="https://stc-zmp.zadn.vn/zmp-zaui/images/0f7c061caab576eb2fa45.jpg"
              alt="slide-2"
            />
          </Swiper.Slide>
          <Swiper.Slide>
            <img
              className="slide-img"
              src="https://stc-zmp.zadn.vn/zmp-zaui/images/321fb45f18f6c4a89de78.jpg"
              alt="slide-3"
            />
          </Swiper.Slide>
          <Swiper.Slide>
            <img
              className="slide-img"
              src="https://stc-zmp.zadn.vn/zmp-zaui/images/4f417921d58809d650997.jpg"
              alt="slide-4"
            />
          </Swiper.Slide>
          <Swiper.Slide>
            <img
              className="slide-img"
              src="https://stc-zmp.zadn.vn/zmp-zaui/images/677fad2e0187ddd984969.jpg"
              alt="slide-5"
            />
          </Swiper.Slide>
        </Swiper>
      </Box>
      <Box>
          <Stack>
            <div style={{ border: "solid 2px", height: "100px", borderRadius:50 }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum officiis voluptas alias id! Optio minima atque aliquam, ea placeat nam, aperiam est dolor voluptatibus iste quas illo nihil obcaecati commodi?
            </div>
          <div style={{ border: "solid 2px", height: "100px" }} />
          <div style={{ border: "solid 2px", height: "100px" }} />
          <div style={{ border: "solid 2px", height: "100px" }} />
          </Stack>
      </Box>
    </Page>
  );
}