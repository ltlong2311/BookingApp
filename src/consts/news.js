const news = [
  {
    id: '1',
    name: 'Khách sạn Phú Yên lọt top lãng mạn nhất thế giới',
    content:
      'Khách sạn gồm 71 villa, nằm ở thị xã Sông Cầu, bao quanh là những đồng lúa xanh mướt cùng bờ biển và bãi san hô đầy cuốn hút.\nTạp chí National Geographic của Anh vừa công bố kết quả giải thưởng khách sạn thường niên vào đầu tháng 9. Năm nay 39 khách sạn tốt nhất thế giới được chọn ra ở 13 mục bình chọn. Mỗi mục có một khách sạn đứng nhất và hai khách sạn đứng nhì.\nTrong đó, Zannier Hotels Bãi San Hô ở Phú Yên, Việt Nam được chọn là khách sạn lãng mạn nhất, thích hợp cho các đôi tình nhân nghỉ dưỡng, đi trăng mật.\nGiữa những đồng lúa, đồi núi trập trùng và cả bãi san hô dài hàng km ở nơi ít người lui tới, khách sạn này chính là điểm đến cho những tuần trăng mật. Ở đây, các villa lấy cảm hứng văn hóa Việt khi sử dụng các yếu tố mái tranh, vách tường đan từ tre nứa và giường bọc vải và bể tắm đi kèm. Khách nghỉ tại Zannier Hotels Bãi San Hô có thể lặn biển, thưởng thức đồ ăn ở nhà hàng Làng Chài, thư giãn trên bãi cát mịn, hoặc tận hưởng các buổi spa trị liệu... Giá phòng tại khách sạn này từ 9,5 triệu đồng/đêm. Ảnh: Frederik Wissink.\nThe Hoxton ở Rome, Italy là khách sạn đô thị tốt nhất và được đánh giá có thiết kế đẹp mắt, dịch vụ xuất sắc, đem tới cảm giác dễ chịu, hấp dẫn dân địa phương nhiều không kém khách du lịch. Thương hiệu The Hoxton đã biến một tòa nhà hiện đại ở Parioli, Rome thành một khu nghỉ 192 giường với mặt tiền màu hồng bụi và thiết kế lấy cảm hứng nội thất thập niên 70. Khách sạn có những sảnh chờ thiết kế thân thiện như phòng khách của dân trong vùng, phục vụ các loại cocktail cổ điển với quán bar-bistro mở cả ngày... Một đêm ở đây có giá từ 200 USD/phòng.',
    image: 'https://i.imgur.com/CmnHcs1.jpg',
    imageDetails: 'https://i.imgur.com/Mr3OJc4.jpg',
    user: 'funnyman99',
    type: '1',
    createDate: '2021-09-23 20:08:24',
    favorite: 18,
    comment: 2,
  },
  {
    id: '2',
    name: 'Vinpearl được xướng tên 29 lần trong giải thưởng của TripAdvisor',
    content:
      '26 khách sạn của Vinpearl vừa được nền tảng đánh giá dịch vụ du lịch thế giới TripAdvisor xướng tên 29 lần trong giải thưởng "TripAdvisor\'s Travelers\' Choice 2021".\nGiải thưởng "TripAdvisor\'s Travelers\' Choice 2021" của TripAdvisor gồm nhiều hạng mục. Trong hai hạng mục "Best of the Best" (Tốt nhất của tốt nhất) và "Travelers\' Choice Awards" (Du khách bình chọn), Vinpearl giành ưu thế khi có 26 khu nghỉ dưỡng và khách sạn hiện diện khắp Việt Nam được xướng tên.\nTrong đó, khu nghỉ dưỡng Vinpearl Luxury Nha Trang tọa lạc tại Hòn Tre, quần thể biệt thự biển Vinpearl Resort & Spa Đà Nẵng nằm dọc theo cung đường di sản Ngũ Hành Sơn và tòa biệt thự Vinpearl Resort & Spa Hạ Long hướng về vịnh biển di sản Unesco được vinh danh ở hạng mục "Best of The Best". Đây là giải thưởng về dịch vụ, chất lượng và sự hài lòng cùng mong muốn được quay lại của du khách đối với khách sạn, điểm đến, nhà hàng, trải nghiệm...\nBa khách sạn, khu nghỉ dưỡng này cùng các cơ sở trong hệ thống Vinpearl còn được xướng tên 26 lần tại hạng mục "Travelers\' Choice Awards". Ngoài những điểm đến du lịch và các thành phố mới náo nhiệt như Nha Trang, Phú Quốc, Đà Nẵng, Hội An, Huế, Hà Tĩnh, TP HCM, Hải Phòng; Vinpearl còn góp phần đưa các tên tuổi mới như Hà Nam, Lạng Sơn, Thanh Hóa... lên bản đồ toàn cầu của TripAdvisor, với thương hiệu khách sạn nội đô. Các quần thể Vinpearl tại Nha Trang, Đà Nẵng - Nam Hội An và Phú Quốc có đến 15 cơ sở được xướng tên, giữ vững danh hiệu "những điểm đến được lựa chọn nhiều nhất" của Vinpearl.',
    image: 'https://i.imgur.com/g1gMJLn.jpg',
    imageDetails: 'https://i.imgur.com/ZkXeJ2a.jpg',
    user: 'nguoihaylo',
    type: '1',
    createDate: '2021-09-23 20:08:24',
    favorite: 18,
    comment: 2,
    comments: [],
  },
    {
    id: '3',
    name: 'Đánh giá resort một sao vì vợ ngoại tình',
    content:
      'Một nam du khách đã để lại đánh giá với câu chuyện gây sốc trên TripAdvisor sau chuyến nghỉ dưỡng tới resort 5 sao trên biển Caribbean.\nMới đây, nam du khách có tên Michael đã kể lại câu chuyện anh trải qua khi nghỉ dưỡng hồi tháng 12/2020 trong một đánh giá khách sạn trên TripAdvisor. Theo đó, vợ chồng Michael cùng nhau tới một khách sạn 5 sao trên quần đảo Turks và Caicos. Ấn tượng ban đầu của anh về khu nghỉ dưỡng này là mọi thứ đều tuyệt vời: từ khách sạn đến hồ bơi, cát trắng và nước biển cho đến dịch vụ.\nVợ chồng Michael có khoảng thời gian vui vẻ đến mức anh quyết định bay về Anh để đón cậu con trai tên Tom đến đây nghỉ dưỡng cùng bố mẹ. Khi Michael cùng con trai quay lại resort, anh phát hiện vợ có điều khác lạ khi cô có vẻ khó xử khi gặp chồng. Cuối cùng, người vợ thú nhận mình đã qua đêm với một nhân viên massage của khách sạn trong thời gian chồng vắng mặt. Michael cho biết đây là lỗi của vợ, không phải lỗi của khách sạn. Dù vậy, anh vẫn quyết định chấm một sao.\nKhông ít người dùng mạng xã hội bày tỏ sự nghi ngờ về tính chân thật của câu chuyện trên. Họ khẳng định không một nhân viên trong các khách sạn 5 sao quốc tế nào lại dại dột làm điều này. Số còn lại cho rằng dù phản ánh của Michael có thật hay không, đây cũng không phải lỗi của khách sạn.\nBan quản lý resort được Michael nhắc đến trong câu chuyện của mình và TripAdvisor vẫn chưa lên tiếng về sự việc trên. Khu nghỉ dưỡng có 72 phòng sang trọng, trải dài trên diện tích 48.500 m2. Giá thuê từ 2.700 USD một đêm cho căn hộ áp mái ba phòng ngủ.',
    image: 'https://i1-dulich.vnecdn.net/2021/01/21/khachsanturksandcaicos-1611223-6078-7264-1611224549.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=_V0Hfg6TfAR2jdnyE_HXBg',
        imageDetails: 'https://i1-dulich.vnecdn.net/2021/01/21/khachsanturksandcaicos-1611223-6078-7264-1611224549.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=_V0Hfg6TfAR2jdnyE_HXBg',
    user: 'funnyman99',
    type: '1',
    createDate: '2021-09-23 20:08:24',
    favorite: 18,
    comment: 2,
  },
  {
    id: '4',
    name: 'Hà Nội công bố 20 khách sạn cách ly cho người đến từ TP HCM',
    content:
      'Nhiều tỉnh, thành triển khai chương trình giảm giá cho du khách hoặc tổ chức các lễ hội, sự kiện văn hóa, ẩm thực.\nTối 30/4, thị xã Sapa, tỉnh Lào Cai tổ chức khai mạc Lễ hội đền Mẫu Thượng năm 2021. Lễ hội diễn ra trong 3 ngày, bao gồm loạt sự kiện như carnival đường phố với chủ đề "Các dân tộc Sapa và Đạo Mẫu" Liên hoan hát Chầu văn và thực hành tín ngưỡng thờ Mẫu; Lễ tế dân gian và dâng hương đền Mẫu Thượng...\n />',
    image:
      'https://i1-vnexpress.vnecdn.net/2021/10/10/kshoabinh-1633847910-2245-1633848190.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=Xa3dufx65GsIq5Iph0rsZA',
    imageDetails:
      'https://i1-giadinh.vnecdn.net/2021/10/06/20-14-20-copy-5145-1633445085-3768-1618-1633496366.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=jYoc70wHBOf9NAgL0IErbw',
    user: 'lethanhlong',
    type: '1',
    createDate: '2021-08-25 21:25:24',
    favorite: 8,
  },
  {
    id: '4',
    name: 'Khách sạn vượt khó bằng dịch vụ cách ly',
    content:
      'Sau khi chơi vài ngày ở Phú Quốc, mình đến nghỉ ngơi tại đảo Hòn Mây và cũng là nơi mình lưu lại lâu nhất. Khách sạn Ecocio Hostel cách đảo 2-3 tiếng đi cano. Những ngày ở đó rất yên bình, mình chỉ đi loanh quanh trong thị trấn chứ không đi hopping tour hay hoạt động gì nhiều. Ngoài buổi chiều đầu tiên mình thuê xe máy đi mua ít đồ, còn lại mình đều đi bộ. Từ Ecocio Hostel xuống thị trấn gần 4km nhưng mình vẫn đi bộ đều đặn từ 9h sáng đến khoảng 4h chiều thì quay về.\nEcocio Hostel cũng có cho thuê xe, book giùm tour và vé đi đảo. Giá thuê xe rẻ hơn ở ngoài nhưng nói chung xe hơi cũ và cùi nên giá vậy cũng phải. Giá thuê 4h là 600k, tùy theo số giờ mình thuê sẽ có những mức giá khác nhau. ',
    image:
      'https://i1-kinhdoanh.vnecdn.net/2021/09/24/dji-0456-jpeg-1632457346-4939-1632457654.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=huNHm6QekWXa_WnqYRjSIw',
    imageDetails:
      'https://i1-giadinh.vnecdn.net/2021/10/06/20-14-20-copy-5145-1633445085-3768-1618-1633496366.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=jYoc70wHBOf9NAgL0IErbw',
    user: 'ongtrumreview68',
    type: '1',
    createDate: '2021-09-25 22:03:24',
    favorite: 32,
    comment: 9,
  },
  {
    id: '5',
    name: 'Công suất phòng khách sạn rớt mạnh',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestias asperiores ipsum unde enim ratione maxime nihil obcaecati necessitatibus tenetur officiis repellat, ullam beatae aliquid culpa reprehenderit. Autem, quod animi.',
    image:
      'https://i1-kinhdoanh.vnecdn.net/2021/08/18/a-tb-can-ho-dich-vu-TP-HCM-pic-8980-9792-1629247057.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=o4RtEu_jHdYbl1B8m6xemQ',
    imageDetails:
      'https://i1-giadinh.vnecdn.net/2021/10/06/20-14-20-copy-5145-1633445085-3768-1618-1633496366.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=jYoc70wHBOf9NAgL0IErbw',
    user: 'nhathongthai',
    type: '1',
    createDate: '2021-09-25 21:08:24',
    favorite: 12,
    comment: 3,
    comments: [],
  },
];

export default news;
