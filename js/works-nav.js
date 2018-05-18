!function(){
    var view = document.querySelector('#slider-nav')

    var model = {}

    var controller = {
        view: null,
        all: null,
        frame: null,
        protogenesis: null,
        portfolioBar: null,
        init: function(view,model){
            this.view = view
            this.all = view.querySelector('#all')
            this.frame = view.querySelector('#frame')
            this.protogenesis = view.querySelector('#protogenesis')
            this.portfolioBar = view.querySelector('#portfolioBar')
            this.bindEvents()
        },
        bindEvents: function(){
            this.all.onclick =  () => {
                this.portfolioBar.className = 'bar state-1'
            }
            this.frame.onclick =  () => {
                console.log(this)
                this.portfolioBar.className = 'bar state-2'
            }
            this.protogenesis.onclick =  () => {
                this.portfolioBar.className = 'bar state-3'
            } 
        }
    }
    controller.init(view,model)

}.call()
