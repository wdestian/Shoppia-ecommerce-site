Vue.component('related', {
    template: `
    <div class="container new-arrival">
    <div class="row mb-4">
        <div class="col">
            <h5 class="title">{{ title }}</h5>
        </div>
    </div>
    <div class="row mb-2">

        <div v-for="product in productitem" class="item col-3">
            <a href="product.html"><img v-bind:src="product.imgpath" alt=""></a>
            <p class="product-name">{{ product.name }}</p>
            <p class="price">{{ product.price }}</p>
        </div>

    </div>
</div>
    `,
    data: function () {
        return {
            title: 'RELATED PRODUCTS',
            productitem: [{
                    name: 'Goody Speaker',
                    price: '$800,38',
                    imgpath: 'img/2.png'
                },
                {
                    name: 'EarPOD BMW',
                    price: '$800,38',
                    imgpath: 'img/3.png'
                },
                {
                    name: 'Ganbatte Kiyu',
                    price: '$800,38',
                    imgpath: 'img/4.png'
                },
                {
                    name: 'Case Case Pow',
                    price: '$800,38',
                    imgpath: 'img/5.png'
                }
            ]
        }
    }
})