!function(){
    var view = document.querySelector('section.messages')

    var controller = {
        view: null,
        messageList: null,
        init: function(){
            this.view = view
            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('form')
            this.initAV()
            this.loadMessages()
            this.bindEvents()
        },
        initAV: function(){
            var APP_ID = '5UGlrr1uEWLVOGgw2h834iua-gzGzoHsz'
            var APP_KEY = 'csLOF0yp0msY4bIx1zSplCMq'

            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            }) 
        },
        loadMessages: function(){
            var query = new AV.Query('Message');
            query.find().then((messages)=> {
                let array = messages.map((item) => item.attributes)
                array.forEach((item) => {
                    let li = document.createElement('li')
                    li.innerText = `${item.name}：${item.content}`
                    this.messageList.appendChild(li)
                })
            }, function (error) {
                alert('提交失败，请改天再来留言')
            }); 
        },
        bindEvents: function(){
            let myForm = this.form
            this.form.addEventListener('submit', function (e) {
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
        }
       
    }
    controller.init(view)



    
}.call()
