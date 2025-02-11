import React from "react";
import { Page, Stack, ZBox, Calendar, Text , Header} from "zmp-ui";

export default function TicketPage(props) {
  return (
    <Page className="section-container" hideScrollbar={true}>
      <div>
        <div>
      <Header title="Lịch hẹn" />
      </div>
      <div>
      <Calendar />
      </div>
      </div>
    </Page>
  );
}