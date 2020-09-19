Vue.component('mynavbar', {
    template: `
    <div class="mynavbar container">
        <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="index.html" style="color: #5C5C5C;">Shop<span
                    style="color: #FFBB5D;">pia</span></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto mt-3" style="color: #5C5C5C;">
                    <li class="nav-item active pr-5">
                        <a class="nav-link" href="#">PROMOS</a>
                    </li>
                    <li class="nav-item  pr-5">
                        <a class="nav-link" href="#">CATEGORIES</a>
                    </li>
                    <li class="nav-item  pr-5">
                        <a class="nav-link" href="#">MERCHANT</a>
                    </li>
                    <li class="nav-item  pr-5">
                        <a class="nav-link disabled" href="#">MY CART</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    `,
    data: function () {
        return {

        }
    }
})