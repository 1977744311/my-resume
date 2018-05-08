!function(){
    var view = document.querySelector('section.messages')

    var model = {
        //初始化
        init: function () {
            var APP_ID = '5UGlrr1uEWLVOGgw2h834iua-gzGzoHsz'
            var APP_KEY = 'csLOF0yp0msY4bIx1zSplCMq'

            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            })
        },
        //获取数据
        fetch: function(){
            var query = new AV.Query('Message');
            return query.find()  //Promise 对象
        },
        //创建数据
        save: function(name,content){
            var Message = AV.Object.extend('Message');
            var message = new Message();
            return message.save({
                'name': name,
                'content': content
            }) 
        }
    }

    var controller = {
        view: null,
        model: null,
        messageList: null,
        init: function(){
            this.view = view
            this.model = model
            this.model.init()
            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('form')
            this.loadMessages()
            this.bindEvents()
        },
        loadMessages: function(){
            this.model.fetch().then((messages)=> {
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
                this.model.save(name,content).then(function (object) {
                    let li = document.createElement('li')
                    li.innerText = `${object.attributes.name}：${object.attributes.content}`
                    let messageList = document.querySelector('#messageList')
                    messageList.appendChild(li)
                    myForm.querySelector('input[name=content]').value = ''
                    console.log(object)
                })
            }) 
        }
       
    }
    controller.init(view,model)



    
}.call()
