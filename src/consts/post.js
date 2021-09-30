const posts = [
  {
    id: "1",
    name: "Khai mở sự kiện hạ giá mùa du lịch",
    content:
      'Nhiều tỉnh, thành triển khai chương trình giảm giá cho du khách hoặc tổ chức các lễ hội, sự kiện văn hóa, ẩm thực.\nTối 30/4, thị xã Sapa, tỉnh Lào Cai tổ chức khai mạc Lễ hội đền Mẫu Thượng năm 2021. Lễ hội diễn ra trong 3 ngày, bao gồm loạt sự kiện như carnival đường phố với chủ đề "Các dân tộc Sapa và Đạo Mẫu" Liên hoan hát Chầu văn và thực hành tín ngưỡng thờ Mẫu; Lễ tế dân gian và dâng hương đền Mẫu Thượng...',
    imgUser: "https://i.imgur.com/EJbO6v5.jpg",
    user: "lethanhlong",
    type: "1",
    createDate: "2021-08-19 21:25:24",
    favorite: 8,
    comment: 2,
    comments: [
      {
        id: 1,
        user: "ongtrumreview68",
        imgUser: "https://i.imgur.com/HQnIOoc.jpg",
        content: "Bài viết rất hay!",
        createDate: "2021-09-19 22:03:24",
      },
      {
        id: 2,
        user: "nhathongthai",
        imgUser: "https://i.imgur.com/6quHTz8.png",
        content: "Thông tin tuyệt vời.",
        createDate: "2021-09-20 22:03:24",
      },
      {
        id: 3,
        user: "nhathongthai",
        imgUser: "https://i.imgur.com/6quHTz8.png",
        content: "Rất thú vị",
        createDate: "2021-09-20 22:03:24",
      },
      {
        id: 4,
        user: "nhathongthai",
        imgUser: "https://i.imgur.com/6quHTz8.png",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
        createDate: "2021-09-20 22:03:24",
      },
      {
        id: 5,
        user: "nhathongthai",
        imgUser: "https://i.imgur.com/6quHTz8.png",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
        createDate: "2021-09-20 22:03:24",
      },
    ],
  },
  {
    id: "2",
    name: "Review khách sạn Ecocio Hotel",
    content:
      "Sau khi chơi vài ngày ở Phú Quốc, mình đến nghỉ ngơi tại đảo Hòn Mây và cũng là nơi mình lưu lại lâu nhất. Khách sạn Ecocio Hostel cách đảo 2-3 tiếng đi cano. Những ngày ở đó rất yên bình, mình chỉ đi loanh quanh trong thị trấn chứ không đi hopping tour hay hoạt động gì nhiều. Ngoài buổi chiều đầu tiên mình thuê xe máy đi mua ít đồ, còn lại mình đều đi bộ. Từ Ecocio Hostel xuống thị trấn gần 4km nhưng mình vẫn đi bộ đều đặn từ 9h sáng đến khoảng 4h chiều thì quay về.\nEcocio Hostel cũng có cho thuê xe, book giùm tour và vé đi đảo. Giá thuê xe rẻ hơn ở ngoài nhưng nói chung xe hơi cũ và cùi nên giá vậy cũng phải. Giá thuê 4h là 600k, tùy theo số giờ mình thuê sẽ có những mức giá khác nhau. ",
    imgUser: "https://i.imgur.com/HQnIOoc.jpg",
    user: "ongtrumreview68",
    type: "3",
    createDate: "2021-09-18 22:03:24",
    favorite: 32,
    comment: 9,
    comments: [
      {
        id: 1,
        user: "nguoihaylo",
        imgUser: "https://i.imgur.com/bBtalxD.jpg",
        content: "Comment",
        createDate: "2021-09-20 22:03:24",
      },
    ],
  },
  {
    id: "3",
    name: "Kinh nghiệm ở khách sạn",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestias asperiores ipsum unde enim ratione maxime nihil obcaecati necessitatibus tenetur officiis repellat, ullam beatae aliquid culpa reprehenderit. Autem, quod animi.",
    imgUser: "https://i.imgur.com/6quHTz8.png",
    user: "nhathongthai",
    type: "2",
    createDate: "2021-09-18 21:08:24",
    favorite: 12,
    comment: 3,
    comments: [],
  },
  {
    id: "4",
    name: "Khách sạn A liệu có tốt",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestias asperiores ipsum unde enim ratione maxime nihil obcaecati necessitatibus tenetur officiis repellat, ullam beatae aliquid culpa reprehenderit. Autem, quod animi.",
    imgUser: "https://i.imgur.com/bBtalxD.jpg",
    user: "nguoihaylo",
    type: "4",
    createDate: "2021-09-17 20:08:24",
    favorite: 18,
    comment: 2,
    comments: [],
  },
  {
    id: "5",
    name: "Khách sạn nào nhiều cây cảnh nhất?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestias asperiores ipsum unde enim ratione maxime nihil obcaecati necessitatibus tenetur officiis repellat, ullam beatae aliquid culpa reprehenderit. Autem, quod animi.",
    imgUser: "https://i.imgur.com/6quHTz8.png",
    user: "funnyman99",
    type: "5",
    createDate: "2021-09-17 20:08:24",
    favorite: 18,
    comment: 2,
    comments: [
      {
        id: 1,
        user: "nguoihaylo",
        imgUser: "https://i.imgur.com/bBtalxD.jpg",
        content: "Comment",
        createDate: "2021-09-20 22:03:24",
      },
      {
        id: 2,
        user: "nguoihaylo",
        imgUser: "https://i.imgur.com/bBtalxD.jpg",
        content: "Comment",
        createDate: "2021-09-20 22:03:24",
      },
    ],
  },
];

export default posts;
