!function(){
    var view = View('#topNavBar')

    var controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.bindEvents()
        },
        bindEvents: function () {
            var view = this.view
            window.addEventListener('scroll', function () {
                if (window.scrollY > 0) {
                    view.classList.add('sticky')
                } else {
                    view.classList.remove('sticky')
                }
            })
        }
    }
    controller.init(view)
}.call()

