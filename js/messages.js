!function(){
    var APP_ID = '5UGlrr1uEWLVOGgw2h834iua-gzGzoHsz';
    var APP_KEY = 'csLOF0yp0msY4bIx1zSplCMq';

    AV.init({
        appId: APP_ID,
        appKey: APP_KEY
    });
    /*
    var Xxxx = AV.Object.extend('Xxxx');
    var xxxx = new Xxxx();
    xxxx.save({
        words: '1111111'
    }).then(function (object) {
        console.log(object);
    })
    */
    var query = new AV.Query('Message');
    query.find().then(function (messages) {
        let array = messages.map((item) => item.attributes)
        array.forEach((item) => {
            let li = document.createElement('li')
            li.innerText = `${item.name}：${item.content}`
            let messageList = document.querySelector('#messageList')
            messageList.appendChild(li)
        })
    }, function (error) {
        alert('提交失败，请改天再来留言')
    });
    //提交留言
    let myForm = document.querySelector('#postMessage')
    myForm.addEventListener('submit', function (e) {
        e.preventDefault()
        let content = myForm.querySelector('input[name=content]').value
        let name = myForm.querySelector('input[name=name]').value
        var Message = AV.Object.extend('Message');
        var message = new Message();
        message.save({
            'name': name,
            'content': content
        }).then(function (object) {
            let li = document.createElement('li')
            li.innerText = `${object.attributes.name}：${object.attributes.content}`
            let messageList = document.querySelector('#messageList')
            messageList.appendChild(li) 
            console.log(object)
        })
    })

    
}.call()
