var a = 10;

var x = --a + a++;
console.log(x);

// Nhấn Run để chạy code.
// Giải thích vì sao kết quả là 18.
// Do --a nghĩa là giảm a đi 1 đơn vị rồi mới thực hiện phép toán, còn a++ nghĩa là thực hiện phép toán trước rồi mới tăng a lên 1 đơn vị
// Có: x = --a + a++ ( a=10)
         =  9 + 9
         = 18
