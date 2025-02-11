import React from "react";

const newsData = [
  {
    id: 1,
    title: "🚀 Công nghệ AI đột phá năm 2025",
    content: "Trí tuệ nhân tạo tiếp tục phát triển mạnh mẽ, tạo ra những ứng dụng đáng kinh ngạc.",
  },
  {
    id: 2,
    title: "📱 Zalo Mini App cập nhật mới",
    content: "Nền tảng Zalo Mini App vừa có bản cập nhật với nhiều tính năng hấp dẫn.",
  },
  {
    id: 3,
    title: "💰 Bitcoin lập đỉnh mới",
    content: "Giá Bitcoin đạt mức kỷ lục trong lịch sử, thị trường tiền điện tử sôi động.",
  },
  {
    id: 4,
    title: "🌏 Biến đổi khí hậu và tương lai",
    content: "Các chuyên gia cảnh báo về ảnh hưởng của biến đổi khí hậu trong 10 năm tới.",
  },
  {
    id: 5,
    title: "🎮 Game mới sắp ra mắt",
    content: "Tựa game AAA đình đám dự kiến ra mắt cuối năm nay, hứa hẹn trải nghiệm tuyệt vời.",
  },
];

const NewsList: React.FC = () => {
  return (
    <div>
      {newsData.map((news) => (
        <div
          key={news.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
          }}
        >
          <h3>{news.title}</h3>
          <p>{news.content}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsList;