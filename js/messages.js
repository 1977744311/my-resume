!function(){
    var view = View('section.messages')

    var model = Model({resourceName: 'Message'})

    var controller = Controller({
        init: function(view,model){
            console.log(view)
            this.form = view.querySelector('form')
            this.messageList = view.querySelector('#messageList')
            this.loadMessages()
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
            this.form.addEventListener('submit',  (e) => {
                e.preventDefault()
                let content = myForm.querySelector('input[name=content]').value
                let name = myForm.querySelector('input[name=name]').value
                this.model.save({'name':name,'content':content}).then(function (object) {
                    let li = document.createElement('li')
                    li.innerText = `${object.attributes.name}：${object.attributes.content}`
                    let messageList = document.querySelector('#messageList')
                    messageList.appendChild(li)
                    myForm.querySelector('input[name=content]').value = ''
                    console.log(object)
                })
            }) 
        }
       
    })
    controller.init(view,model)



    
}.call()
