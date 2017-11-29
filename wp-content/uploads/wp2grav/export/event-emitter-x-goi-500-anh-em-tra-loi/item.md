---
# http://learn.getgrav.org/content/headers
title: Event Emitter &#8211; X gọi, 500 anh em trả lời
slug: event-emitter-x-goi-500-anh-em-tra-loi
# menu: Event Emitter &#8211; X gọi, 500 anh em trả lời
date: 01-11-2016
published: true
publish_date: 01-11-2016
# unpublish_date: 01-11-2016
# template: false
# theme: false
visible: true
summary:
    enabled: true
    format: short
    size: 128
taxonomy:
    migration-status: review
    category: [NodeJS]
    tag: [Event Emitter,gọi trả lời,hallowean,javascript,lộn cái bàn,Event Emitter,gọi trả lời,hallowean,javascript,lộn cái bàn]
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

Chào các bác ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/a2b20fedb8f910c6d52ffeb6a30af1b8.png),lâu rồi em không viết bài gì cả, bận quá ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/f7b14908d90b912b3fe5d7fa726df847.png)

Hôm nay mình tìm hiểu về Javascript tí nhề. Bài này mình sẽ nói về **Event Emitter**.

# Vậy Event Emitter là gì?

**Event Emitter** hoạt động kiểu giống như câu mình ghi ở “Tít” – “*X gọi, 500 anh em trả lời**“***. Tuởng tuợng như vầy nhé

![maxresdefault-1](http://cuthanh.com/wp-content/uploads/2016/11/maxresdefault-1-1024x429.jpg)

Halloween vừa dắt gái đi chơi về, bỗng dưng có một bầy thanh niên “Tha thu” đầy nguời nhảy vào đe doạ ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1806c3404f8f66e0435009954ee1379e.png), đòi “va chạm” với bạn gái của bạn xíu ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/78903d5af243d9b72ea6bfe3446fcee9.png). Con này thì mới quen, đầu tư chưa lấy lại vốn thì chưa thế tụi nó đụng vào được ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/e773a3d2ab3e30301da6f0ecd8153a76.png). Vì thế bạn nhất quyết không cho thằng nào đụng chạm vào, khổ nỗi tụi nó đông và hung hãn quá, giờ sao ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/78903d5af243d9b72ea6bfe3446fcee9.png)??? May quá nhớ ra mấy thằng chiến hữu cũng có máu mặt, giờ này FA chắc đang ngồi nhà DOTO, thế là bạn cầm con điện thoại ra alo tụi nó like a boss ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/ab0f23d06fc786b40bb95a014604743f.png)

***Thằng A***

Alo… Mày đang ở đâu thế, đến 69 đường XXX cứu tao với.

T đang tiêu chảy ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/76e3337135a7b852053b34aadd76ba6d.png), đếu kíu được mày đâu. Gọi thằng B coi

![ngoibo](http://cuthanh.com/wp-content/uploads/2016/11/ngoibo-1024x768.jpg)

***Thằng B***

Alo… Mày đang ở đâu thế, đến 69 đường XXX cứu tao với.

Mày bảo tụi nó đợi tao 5′, để tao gọi 500 anh em ra cứu bạn gái mày ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/e773a3d2ab3e30301da6f0ecd8153a76.png)

Đấy **Event Emitter** hoạt động giống như câu chuyện mình nói. Khi một đối tương (Object – là bạn đấy) gặp phải một sự kiện gì đấy thì bạn hét lên một thông điệp (**Emit**). Những thằng nghe đuợc thông điệp của bạn (**Listener**) sẽ nhận thông điệp ấy và xử lý tuỳ từng thằng khác nhau. Như ở trên, khi bạn truyền thông điệp đi “***Mày đang đâu thế, đến đuờng 69 đuờng XX cứu tao với***” thằng A đang tiêu chảy thì nó lơ bạn luôn, còn thằng B sẽ gọi 500 anh em tới cứu bạn.

Thế là đã mường tượng được **Event Emitter** là gì rồi nhé ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/a2b20fedb8f910c6d52ffeb6a30af1b8.png)

# Code thử xem sao

Đầu tiên là tạo class `Event Emitter`

 
    <pre class="prettyprint">class EventEmitter {
        constructor() {
            this.listener = []
        }
        addListener(event, listener) {
            if (this.listener[event]) {
                this.listener[event].push(listener)
            } else {
                this.listener[event] = Array(listener)
            }
            console.log ("Added new listener")
            console.log (this.listener)
            return {event: event, index: this.listener[event].indexOf(listener)}
        }
        removeListener(listenerInfo) {
            this.listener[listenerInfo.event].splice(listenerInfo.index, 1)
            console.log ("Removed a listener")
            console.log (this.listener)
        }
        emit(event, arg) {
            if (this.listener[event]) {
                this.listener[event].reverse().forEach((x) => x(arg))
            }
            console.log ("Emmitted #{event}")
        }
    }

Trong class `EventEmitter` của chúng ta có 4 method chính là `Constructor`, `addListener`, `removeListener`, và `emit`

## Constructor

 
    <pre class="prettyprint">constructor() {
        this.listener = []
    }

Thằng này đơn giản, có nhiệm vụ khởi tạo một array chứa danh sách các listener tùy theo event là gì thôi,

## addListener

 
    <pre class="prettyprint">    addListener(event, listener) {
            if (this.listener[event]) {
                this.listener[event].push(listener)
            } else {
                this.listener[event] = Array(listener)
            }
            console.log ("Added new listener")
            console.log (this.listener)
            return {event: event, index: this.listener[event].indexOf(listener)}
        }

Thằng này thì thêm một chiến hữu trong 500 anh em của bạn vào danh bạ. Khi nào cần chỉ việc cầm dt lên alo nó

## removeListener

 
    <pre class="prettyprint">    removeListener(listenerInfo) {
            this.listener[listenerInfo.event].splice(listenerInfo.index, 1)
            console.log ("Removed a listener")
            console.log (this.listener)
        }

Có thêm thì phải có xoá thôi ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/08c695086534a2344954042d153ad8fd.png). Con Nokia 1280 chỉ lưu dc 500 số thì các bác phải xoá bớt đi những thằng bê đê dành chỗ cho các anh chuẩn men khác ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/d3499e4f2e48782da8f765fb4ad538c2.png). Input của hàm này là output của hàm `addListener` mình nói bên trên

## emit

 
    <pre class="prettyprint">    emit(event, arg) {
            if (this.listener[event]) {
                this.listener[event].forEach((x) => x(arg))
            }
            console.log ("Emitted "+event)
        }

Cái này là các bác nè, khi gọi hàm này tuơng đương các bác hét lên hoặc nhắn tin với một nhóm trong danh bạ dt. Thằng nào nhận dc tin nhắn của các bác thì nó xử lý ra sao tuỳ tụi nó, các bác không biết được (phần này khác với ví dụ mình nói ở trên một xíu ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/a2b20fedb8f910c6d52ffeb6a30af1b8.png))

When the EventEmitter object emits an event, all of the functions attached to that specific event are called synchronously. Any values returned by the called listeners are ignored and will be discarded.[Nodejs Document](https://nodejs.org/api/events.html)



# Thử nha

Tạo đối tượng là bản thân ta

 
    <pre class="prettyprint">let cuThanh = new EventEmitter

Thêm tụi bạn vào danh bạ

 
    <pre class="prettyprint">let thangA = cuThanh.addListener("GOI500AE", () => {
        console.log ("A: T đang tiêu chảy, đếu kíu được mày đâu. Gọi thằng B coi")
    })
    let thangB = cuThanh.addListener("GOI500AE", () => {
        console.log ("B: Mày bảo tụi nó đợi tao 5′, để tao gọi 500 anh em ra cứu bạn gái mày.")
    })

Ở trên, ta định nghĩa thông điệp là **GOI500AE**, các **listener** chỉ hoạt động khi nó nghe được đúng thông điệp mà chúng ta hét lên (**emit**). Vậy là có 2 thằng bạn, luôn sẵn sàng trả lời khi `cuThanh` hét lên **GOI500AE**. Thông điệp thì các bác nên để ngắn gọn, xúc tích xíu nhá.

Bây giờ hét thử lên nha

 
    <pre class="prettyprint">cuThanh.emit("GOI500AE")

Chúng ta nhận được ngay

 
    <pre class="prettyprint">"A: T đang tiêu chảy, đếu kíu được mày đâu. Gọi thằng B coi"
    "B: Mày bảo tụi nó đợi tao 5′, để tao gọi 500 anh em ra cứu bạn gái mày."
    Emitted GOI500AE

Sau lần gọi đồng đội đầu tiên, thấy thằng A chơi chó quá, bạn bè cần mà lại ngồi trong wc. Bạn quyết định xoá nó khỏi danh bạ, “Tao đéo cần mày nữa, lộn cái bàn, tốn tiền điện thoại của bố” ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/299e9352fa1be8323aba0ef9c0bdfab5.png)

![loncaiban](http://cuthanh.com/wp-content/uploads/2016/11/loncaiban.jpeg)

 
    <pre class="prettyprint">cuThanh.removeListener(thangA)

Bây giờ khi bạn hét lên “**GOI500AE**” thì chỉ còn lại thằng B trả lời thôi

 
    <pre class="prettyprint">"B: Mày bảo tụi nó đợi tao 5′, để tao gọi 500 anh em ra cứu bạn gái mày."
    Emitted GOI500AE


Đấy, mình đã hiện thực cho các bác cách hiện thực của **Event Emitter**. Thực ra **Event Emitter** không quá xa lạ với các bác đã nhảy vảo Javascript.

 
    <pre class="prettyprint">$('button').on('click', () => {
        alert ("You clicked a button")
    })

Quen chưa, rồi cả các sự kiện page `onLoad`, `onUnload`, `onHover`,… nữa. Ngoài ra ở Nodejs nếu dụng package `request` thì các bác cũng bắt gặp nó ở đâu đó ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/b5832fef30eaf55643c1756ec601702d.png)

# Về Event Emitter

Cái việc sử dụng **Event Emitter** này giúp các bác lập trình theo kiểu gọi là: Lập trình hướng sự kiện, mình thấy rất là phổ biến ở thế giới Javascript. Có khác biệt là tên gọi của các method thôi nên khiến bạn khó nhận ra. **Vậy lợi hại của việc lập trình theo hướng sự kiên là gì?** Mình cũng méo biết ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1a5e76df614241c5f0257f9bb3d73b19.png), mới tìm hiểu thôi. Tại vì đang tìm hiểu vẻ Redux thấy nó hiện thực một Event Emitter kiểu kiểu như code ở trên của mình.

P/S: *Nếu các bác chỉ cần hiện thực Event Emitter một cách đơn giản thì theo mình code ở trên là đủ rồi. Nó cho phép truyền cả thông số khi emit nữa (sử dụng làm sao thì các bác tự đọc code mò mẫm đi nhá, em luời ví dụ lắm). Còn nếu muốn nhu cầu phức tạp hơn thì nên sử dụng một số thư viện có sẵn (nếu các bác không muốn đào sâu nghiên cứu, chỉ cần down về là chạy thôi). [Nodejs có hỗ trợ sẵn EventEmitter](https://nodejs.org/api/events.html), còn nếu muốn sử dụng ở brower thì các bác search đi nhé, đầy ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/3182d42b9326c68c9a456df369ea9898.png)*

# Code của toàn bộ bài viết.

Các bác `node EventEmitter.js` để chạy thử nhé