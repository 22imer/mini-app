import { openChat } from "zmp-sdk/apis";

export const openChatScreen = () => {
  openChat({
    type: "user",
    id: "user-id",
    message: "Tôi cần hỗ trợ",
    success: () => {},
    fail: (err) => {},
  });
};
