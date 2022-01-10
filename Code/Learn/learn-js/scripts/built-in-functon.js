// Topic: 1 số hàm built-in(xây dựng sẵn):
/**
  1. alert: Thông báo trên màn hình
  2. console: Hiện trên cửa sổ console của devtools
  3. confirm: Xác nhận thông tin (hiển thị như hàm alert)
  4. prompt: Muốn hỏi người dụng 1 thứ gì đó (hiển thị như hàm alert)
  5. setTimeout: Hiển thị sau bao nhiêu thời gian thì chạy lệnh ở trên
  6. setInterval: Sẽ chạy liên tục lệnh tên sau 1 giây
 */
alert("Hello world");
console.log("Hello world");
confirm("Are you sure you want");
prompt("Are you sure you want");
setTimeout(function () {
  console.log("Hello world");
}, 3000);
setInterval(function () {
  console.log("Hello world");
}, 3000);
