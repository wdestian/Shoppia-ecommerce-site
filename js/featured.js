Vue.component('featured', {
    template: `
        <div class="container featured-item">
            <div class="row">
                <div class="left col">
                    <img src="img/1.png" alt="">
                </div>
                <div class="right col">
                    <p class="title">
                        Apple Earpod <br>on demand
                    </p>
                    <p class="origin-price">
                        $800,00
                    </p>
                    <p class="disc-price">
                        $299,99
                    </p>
                    <p>
                        <a href="#" class="btn btn-primary">
                            BUY NOW
                        </a>
                    </p>
                </div>
            </div>
        </div>
    `,
    data: function () {
        return {

        }
    }
})