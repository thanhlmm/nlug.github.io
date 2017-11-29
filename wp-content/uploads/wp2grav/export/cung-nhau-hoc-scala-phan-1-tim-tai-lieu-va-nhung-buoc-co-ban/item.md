---
# http://learn.getgrav.org/content/headers
title: Cùng nhau học Scala. Phần 1: Tìm tài liệu và những bước cơ bản
slug: cung-nhau-hoc-scala-phan-1-tim-tai-lieu-va-nhung-buoc-co-ban
# menu: Cùng nhau học Scala. Phần 1: Tìm tài liệu và những bước cơ bản
date: 22-08-2016
published: true
publish_date: 22-08-2016
# unpublish_date: 22-08-2016
# template: false
# theme: false
visible: true
summary:
    enabled: true
    format: short
    size: 128
taxonomy:
    migration-status: review
    category: [Scala]
    tag: [bien,ebook,function,ham,Scala,tai lieu,bien,ebook,function,ham,Scala,tai lieu]
author: nlug
metadata:
    author: nlug
#      description: Your page description goes here
#      keywords: HTML, CSS, XML, JavaScript
#      robots: noindex, nofollow
#      og:
#          title: The Rock
#          type: video.movie
#          url: http://www.imdb.com/title/tt0117500/
#          image: http://ia.media-imdb.com/images/rock.jpg
#  cache_enable: false
#  last_modified: true

---

Đầu tiên phải tìm tài liệu xem người ta nói nó làm sao đã. Mình tìm được những nguồn như sau:

- [Programming in Scala](http://www.artima.com/pins1ed/) by Martin Odersky, Lex Spoon, and Bill Venners (Quyển này rất hay, mình đang theo nó)
- [Blog của bác Phạm Thanh Hoài](https://hoaiptvn.blogspot.com/) – (Nguồn duy nhất của Việt Nam mà mình thấy nó đầy đủ, Ok nhất)
- Ngoài ra có các bài lẻ tẻ các bác tự search google nhé ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/3182d42b9326c68c9a456df369ea9898.png)

Sách “Programming in Scala” rất hay, áp dụng cho các bác nào đã có cơ bản về lập trình rồi. Còn của bác Phạm Thanh Hoài thì dành cho bác nào gosu rồi, thật ra mình đọc còn nhiều khái niệm mơ hồ lắm với lại học lập trình nên học tiếng anh cho nó oai ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/ab0f23d06fc786b40bb95a014604743f.png)

Update: Mình tìm được một video Youtube rất hay, cơ bản nói về Scala cho các bạn luôn nhé



# Những gì mình học được

## Chạy Scala kiểu Interpreter

Mở [CMDER ](http://cuthanh.com/tools/cmder-dem-unix-bash-len-windows)lên, gõ `scala`

![scalainterpreter](http://cuthanh.com/wp-content/uploads/2016/08/scalainterpreter.jpg)

Cái này y chang với Nodejs luôn, EZ ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/65f51c6b41112ac007ace7cf9f66e15e.png). Từ bài này mình sẽ chỉ làm việc trên đây thôi nhé, tìm hiểu những cái cơ bản nhất đã.

## Các kiểu dữ liệu(Data Type) trong Scala

![](https://4.bp.blogspot.com/-g4wrIMW73xs/VsmI8Lfd1yI/AAAAAAAAYGE/1jRY6ZoOwZw/s640/scalaType.png)

Đấy là tất cả các kiểu dữ liệu trong Scala. Thằng ông tổ là `scala.Any`. Chỉ có thể chuyển kiểu dữ liệu theo chiều mũi tên nét đứt

 
    <pre class="prettyprint">scala> var songuyen:Int = 10000
    songuyen: Int = 10000
    
    scala> var sokhongnguyen:Long = songuyen
    sokhongnguyen: Long = 10000
    
    scala> var byte:Byte = songuyen
    <console>:12: error: type mismatch;
     found   : Int
     required: Byte
           var byte:Byte = songuyen
                           ^


Như ví dụ trên, **Int** có thể trở thành **Long** nhưng không convert nó thành **Byte** được đâu ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/111e40af5c869c33eec3a6a746831cbc.png)

Scala là ngôn ngữ **OOP** nên tất cả đều là **Object** và có quan hệ tổ tiên, gốc gác với nhau  hết nhé.

Mình xin liệt kê một vài thằng cơ bản hay sử dụng. Mấy thằng còn lại tạm thời “chừa nó ra” nha các bác ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/4496791ae48b92a081a170ec56c63f89.png)

 Kiểu(DataType) Mô tả Int Số nguyên. VD: 6969 Char Một kí tự. VD: “C” String Một chuỗi kí tự. VD: “cuThanh xin chào các bác” Boolean Đúng sai. VD: true/false Unit Méo trả cái gì cả Null Giống với cái tên của nó 

 

## Biến, hàm (Variable, Function)

Định nghĩ biến theo công thức

 
    <pre class="prettyprint">var cuthanh:String = "Soai ca" // Biến
    val contrai:Boolean = true // Hằng


Scala có một số từ khác với mấy cái em học

**Cons**(tant) trong JS sẽ được gọi là **Val**(ue) trong Scala và trong tiếng việt gọi là Hằng đấy các mẹ ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/071f21ef208c6035f370d855d4767207.png). Hằng thì không thay đổi giá trị được, vậy thôi!

Ngoài ra, **Scala** không cần thêm “;” ở cuối câu lệnh nha, y chang JS ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/ab0f23d06fc786b40bb95a014604743f.png)

## Tiếp theo sẽ là hàm

Phần này khá thú vị vì **Scala** cũng là *Function language*

**Function** trong JS sẽ trở thành **def**(ine) trong **Scala**. Vì thế, định nghĩa 1 hàm sẽ là

 
    <pre class="prettyprint">def tenham(thamso:DataType):Datatype = {
        {câu lệnh}
    }

Thường thì bạn nên xác định kiểu dữ liệu trả về, không thì thằng **Scala** tự kiếm cho các bạn cũng được. Giống với Coffeescript, **dòng lệnh cuối cùng cùng là dòng return luôn** nhé (trong trường hợp các bác không sài từ khóa return trong hàm đấy).

### Function có tham số(Parameters) không giới hạn

 
    <pre class="prettyprint">scala> def inCacSoSau(daySo:Int*):Unit = for (i <- daySo) println(i)
    inCacSoSau: (daySo: Int*)Unit
    
    scala> inCacSoSau(1,2,3)
    1
    2
    3

### Gom nhóm các tham số (Parameters)

 
    <pre class="prettyprint">scala> def inDaySauTruoc(daySo1:Int*)(daySo2:Int*) = {
         | for (i <- daySo2) println(i)
         | for (i <- daySo1) println(i)
         | }
    inDaySauTruoc: (daySo1: Int*)(daySo2: Int*)Unit
    
    scala> inDaySauTruoc(9)(6)
    6
    9

Bá chưa, mấy cái thằng em đã học chả thấy thằng nào có kiểu nhây như vậy ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/7a77f3bca77f8126d0cb4608460a3a0d.png)

### Kiểu Output theo kiểu của Input

 
    <pre class="prettyprint">scala> def anyThings[A](x: A):A = x
    anyThings: [A](x: A)A
    
    scala> anyThings("Hello")
    res12: String = Hello
    
    scala> anyThings(69)
    res13: Int = 69

Trong đây, A là kí tự thay thế thôi (chúng ta hiểu nó là AnyThing), các bác sử dụng B, C,… gì cũng được

### Hàm lồng nhau (Nested Function)

 
    <pre class="prettyprint">scala> def max3(a:Int, b:Int, c:Int):Int = {
         | def max2(a:Int, b:Int):Int = if (a > b) a else b
         | max2(a,max2(b,c))
         | }
    max3: (a: Int, b: Int, c: Int)Int
    
    scala> max3 (6,9,10)
    res14: Int = 10
    
    scala> max2(9,6)
    <console>:12: error: not found: value max2
           max2(9,6)
           ^

Imba chưa, bạn định nghĩa hàm `max2` ngay trong hàm `max3`. Tuy nhiên hàm `max2` chỉ được sự dụng trong cặp ngoặc `{}` mà nó được định nghĩa thôi nhé, không sài bên ngoài được. Hơi buồn ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/79655ff22c4eb02aba73a3e2728e3b30.png)

Từ CoffeeScript, ES5 Chuyển sang ?

Làm thử quả hàm callback nhé

 
    <pre class="prettyprint">scala> def step (n:Int, callback:(Int) => Unit) {
         | println("Buoc "+n)
         | callback(n+1)
         | }
    step: (n: Int, callback: Int => Unit)Unit
    
    scala> step (1, (a:Int) => println("Ham callback tiep theo"+a))
    Buoc 1
    Ham callback tiep theo2

Biến (variable) cũng có thể trở thành hàm

 
    <pre class="prettyprint">scala> var taoLaVar = (n:Int) => print("May vua nhap "+n)
    taoLaVar: Int => Unit = <function1>
    
    scala> taoLaVar(69)
    May vua nhap 69

Giống JS, right?

# Kết

Hôm nay đã biết sơ sơ, cơ bản về Scala rồi, nhìn chung theo mình thì đúng là quảng cáo. Thầy mình nói là “*có thể giải quyết vấn đề phức tạp chỉ với vài dòng code*“, mình thấy vẫn ngắn hơn CoffeeScript và cũng chưa súc tính, văn hoa bằng. Không biến tương lai có chứng minh là Scala ngon hơn không? Các bạn đón đọc nhé

Scala có thay đổi một số từ khóa so với các ngôn ngữ mình đã học như

`val` trong **Scala** => `const` trong **JS**

`def` trong **Scala** => `function` trong **JS**

Mình sẽ lập một bảng chuyển đổi và thêm vào dữ liệu nếu mình phát hiện ra cái mới tại đây