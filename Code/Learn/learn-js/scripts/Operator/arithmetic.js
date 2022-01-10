/**
1.  Toán tử số học - Arithmetic
- Cộng(+)
- Trừ(-)
- Nhân(*)
- Chia (/)
- Lũy thừa(**)
- Chia lấy số dư(%)
- Tăng, giảm 1 giá trị (++, --)
  (++, --) -> Prefix & Postfix

* Prefix(Tiền tố):
  Việc 1: +/- cho variable, variable = variable -/+ 1
  Việc 2: Trả về a sau khi +/- 1

* Postfix(Hậu tố):
  Việc 1: nó sẽ tạo ra 1 biến variable copy có value sẽ bằng chính nó.
  Việc 2: trừ/cộng 1 của variable, variable = variable -/+ 1.
  Việc 3: Trả về biến variable copy.
*/
const sum = 1 + 2;
let a = 2 ** 2;
a++;
--a;
