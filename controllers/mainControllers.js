const ejs = require("ejs");

function renderHomePage(req, res) {
    try{
        res.render('pages/home', {title: "durian store", products: dummyProducts})
    }catch (e) {
        console.log("error: ", e);
        res.render("pages/errorPage", {title: "error"})
    }
}

function renderCategoryPage(req, res) {
    try{
        res.render('pages/category', {products: dummyProducts})
    }catch (e) {
        console.log("error: ", e);
        res.render("pages/errorPage", {title: "error"})
    }
}

function renderProductPage(req, res) {
    try{
        res.render('pages/product', {product: dummyProducts[0]})
    }catch (e) {
        console.log("error: ", e);
        res.render("pages/errorPage", {title: "error"})
    }
}

function renderBlogPage(req, res) {
    try{
        res.render('pages/blog', {articles: dummyArticles})
    }catch (e) {
        console.log("error: ", e);
        res.render("pages/errorPage", {title: "error"})
    }
}

function renderArticlePage(req, res) {
    try{
        res.render('pages/article', {article: dummyArticles[0]})
    }catch (e) {
        console.log("error: ", e);
        res.render("pages/errorPage", {title: "error"})
    }
}

let dummyArticles = [
    {
        id: 1,
        title: 'Đây là tiêu đề bài báo',
        briefInfo: 'Thông tin cơ bản của bài báo',
        createdAt: 1589728644616,
        thumbnail: 'https://preview.locotheme.com/naturally-html/assets/img/blog-post-9-800x600.jpg',
        description: `<div class="rte">
        <p>Slicing your apples and pears into beautiful arrangements costs a lot of time and effort, and all of your hard work shouldn’t go to waste. It’s no secret that this kind of fruit is meant to last you a long time – you deserve to enjoy it as long as you can, after all!</p>
        <p>But, there’s just one problem:</p>
        <p>The <a href="https://www.fruitwerkz.com">fruit</a> turns brown within a couple of hours of you cutting it.</p>
        <p>It seems that as soon as you expose the fruit to the air, you unleash a time bomb that wastes no effort to turn your fruit brown as soon as possible. And while the brown stuff may be harmless, it is certainly unappealing – and it changes the texture of your fruit, making it less enjoyable.</p>
        <p>So, what can you do to prevent this yucky browning from occurring?</p>
        <p>There are actually 5 different things you can do – read on below to find out!</p>
        <h2>1. Soak Them in Water</h2>
        <p>What? Won’t the fruit get all soggy if you try to soak it in water? In truth, this actually occurs <b>only </b>if you soak it for <b>too long. </b>When you expose your fruit slices to water for just a few minutes, it creates a beautiful shield around your apple to keep it from turning brown.</p>
        <p>But, here’s the trick: It must be <b>salt water. </b></p>
        <p>When you get ahold of some salt water, you can really keep your fruit protected. Don’t worry, it won’t tarnish the flavor of the fruit – in fact, it keeps it quite yummy! Try taking a ½ teaspoon of salt and a quart of water. Then, add the fruit slices for no longer than 5 minutes. Take them out, put them in a bag, and keep them in the fridge for maximum enjoyment!</p>
        <h2>2. Rely on Good Old Ginger Ale</h2>
        <p>Ginger ale isn’t just for drinking, even though it is deceivingly delicious. If you can manage to put the soda can down after taking a nice cool swig, you can use the rest of the liquid to keep your fruit from browning. This method works quite successfully, and is one of the <b>highest rated methods</b> by apple enthusiasts all over the world!</p>
        <p>Here’s how it works:</p>
        <p>Take a cup of ginger ale – or <b>any citric acid-based soda</b>, for that matter – and soak your pear or apple pieces in it. You don’t need to do so for too long, just a few minutes – and they will be protected. Alternatively, you can also sprinkle a bit of ginger ale on the slices before putting them in the fridge.</p>
        <h2>3. Use the Traditional Lemon Juice Method</h2>
        <p>This is perhaps the most common method to keeping your apple slices clean and brown-free: Lemon juice. This convenient concentration of citric acid really works to keep the browning away.</p>
        <p>Why?</p>
        <p>Well, because the brown is <b>actually rust! </b></p>
        <p><b>But don’t worry, it can’t hurt you. </b>It is a harmless rust, but the components of the brown material work in much the same way as other types of rust. That’s why citric acid is best for getting rid of it, just as it can get rid of the other kind of rust, too.</p>
        <p>Spritz a sprinkling of lemon or orange juice to slow down the process of creating this enzyme-reactive rust. It will also work to boost the flavor of the fruit as well!</p>
        <h2>4. Normal Water Will Do</h2>
        <p>We’ve already talked about how salt water will prevent oxidizing and keep your fruit from browning – but <b>what about normal water? </b>Does it have to include salt?</p>
        <p>Thankfully, normal water will do just fine!</p>
        <p>If you’re weary about the effects of salt water on your pretty fruit slices, you can invest in regular water. Just fill up a bowl with water and soak your apples for a bit. They should be good to go for a long while!</p>
        <h2>How Do You Keep Your Fruit From Browning?</h2>
        <p>Do you have another favorite method to keeping your pears and apples free from that oxidizing rust menace? Are you looking for more tips to preventing the browning and keeping your fruit as fresh as possible for a long time? Preserving your favorite produce is easy; stay in touch for more life-hacking fruit updates!</p>
        </div>`
    },
    {
        id: 1,
        title: 'Đây là tiêu đề bài báo',
        briefInfo: 'Thông tin cơ bản của bài báo',
        description: '',
        createdAt: 1589728644616,
        thumbnail: 'https://preview.locotheme.com/naturally-html/assets/img/blog-post-9-800x600.jpg'
    },
    {
        id: 1,
        title: 'Đây là tiêu đề bài báo',
        briefInfo: 'Thông tin cơ bản của bài báo',
        description: '',
        createdAt: 1589728644616,
        thumbnail: 'https://preview.locotheme.com/naturally-html/assets/img/blog-post-9-800x600.jpg'
    },
    {
        id: 1,
        title: 'Đây là tiêu đề bài báo',
        briefInfo: 'Thông tin cơ bản của bài báo',
        description: '',
        createdAt: 1589728644616,
        thumbnail: 'https://preview.locotheme.com/naturally-html/assets/img/blog-post-9-800x600.jpg'
    },
    {
        id: 1,
        title: 'Đây là tiêu đề bài báo',
        briefInfo: 'Thông tin cơ bản của bài báo',
        description: '',
        createdAt: 1589728644616,
        thumbnail: 'https://preview.locotheme.com/naturally-html/assets/img/blog-post-9-800x600.jpg'
    },
    {
        id: 1,
        title: 'Đây là tiêu đề bài báo',
        briefInfo: 'Thông tin cơ bản của bài báo',
        description: '',
        createdAt: 1589728644616,
        thumbnail: 'https://preview.locotheme.com/naturally-html/assets/img/blog-post-9-800x600.jpg'
    },
    {
        id: 1,
        title: 'Đây là tiêu đề bài báo',
        briefInfo: 'Thông tin cơ bản của bài báo',
        description: '',
        createdAt: 1589728644616,
        thumbnail: 'https://preview.locotheme.com/naturally-html/assets/img/blog-post-9-800x600.jpg'
    },
    {
        id: 1,
        title: 'Đây là tiêu đề bài báo',
        briefInfo: 'Thông tin cơ bản của bài báo',
        description: '',
        createdAt: 1589728644616,
        thumbnail: 'https://preview.locotheme.com/naturally-html/assets/img/blog-post-9-800x600.jpg'
    },

];

let dummyProducts = [
    {
        id: 1,
        name: "Sầu riêng Thái",
        price: 50000,
        rating: 4,
        categoryName: 'Sầu riêng',
        title: "đây là tiêu đề",
        images: ['https://topduriandelivery.com/wp-content/uploads/2020/04/durian-champion.jpg',
            'https://topduriandelivery.com/wp-content/uploads/2020/04/df2f3fe3-27f6-4ce8-87e2-b5907e38de5b.jpg',
            'https://topduriandelivery.com/wp-content/uploads/2020/05/Hu-Lor-2-600x600.jpg'],
        thumbnailUrl: 'https://topduriandelivery.com/wp-content/uploads/2020/04/4dcf47f2-ad2a-4370-b640-cfff89ddaeb4-600x600.jpg',
        oldPrice: 40000,
        status: 'NEW',
        isAvailable: true
    },
    {
        id: 2,
        name: "Organic D'Anjou Pear",
        price: 50000,
        rating: 3,
        title: "đây là tiêu đề",
        categoryName: 'Sầu riêng',
        images: ['https://topduriandelivery.com/wp-content/uploads/2020/04/durian-champion.jpg',
            'https://topduriandelivery.com/wp-content/uploads/2020/04/df2f3fe3-27f6-4ce8-87e2-b5907e38de5b.jpg',
            'https://topduriandelivery.com/wp-content/uploads/2020/05/Hu-Lor-2-600x600.jpg'],
        thumbnailUrl: 'https://topduriandelivery.com/wp-content/uploads/2020/04/4dcf47f2-ad2a-4370-b640-cfff89ddaeb4-600x600.jpg',
        oldPrice: 40000,
        status: 'SALE_OFF',
        isAvailable: true
    },
    {
        id: 3,
        name: "Organic D'Anjou Pear",
        price: 50000,
        rating: 3,
        title: "đây là tiêu đề",
        categoryName: 'Sầu riêng',
        images: ['https://topduriandelivery.com/wp-content/uploads/2020/04/durian-champion.jpg',
            'https://topduriandelivery.com/wp-content/uploads/2020/04/df2f3fe3-27f6-4ce8-87e2-b5907e38de5b.jpg',
            'https://topduriandelivery.com/wp-content/uploads/2020/05/Hu-Lor-2-600x600.jpg'],
        oldPrice: 40000,
        thumbnailUrl: 'https://topduriandelivery.com/wp-content/uploads/2020/04/foambox-1.jpg',
        status: 'NEW',
        isAvailable: true
    },
    {
        id: 4,
        name: "Organic D'Anjou Pear",
        price: 50000,
        rating: 4,
        title: "đây là tiêu đề",
        categoryName: 'Sầu riêng',
        images: ['https://topduriandelivery.com/wp-content/uploads/2020/04/durian-champion.jpg',
            'https://topduriandelivery.com/wp-content/uploads/2020/04/df2f3fe3-27f6-4ce8-87e2-b5907e38de5b.jpg',
            'https://topduriandelivery.com/wp-content/uploads/2020/05/Hu-Lor-2-600x600.jpg'],
        oldPrice: 40000,
        thumbnailUrl: 'https://topduriandelivery.com/wp-content/uploads/2020/04/foambox-1.jpg',
        status: 'HOT',
        isAvailable: true
    },
    {
        id: 5,
        name: "Organic D'Anjou Pear",
        price: 50000,
        rating: 4,
        title: "đây là tiêu đề",
        categoryName: 'Sầu riêng',
        images: ['https://topduriandelivery.com/wp-content/uploads/2020/04/durian-champion.jpg',
            'https://topduriandelivery.com/wp-content/uploads/2020/04/df2f3fe3-27f6-4ce8-87e2-b5907e38de5b.jpg',
            'https://topduriandelivery.com/wp-content/uploads/2020/05/Hu-Lor-2-600x600.jpg'],
        oldPrice: 40000,
        thumbnailUrl: 'https://topduriandelivery.com/wp-content/uploads/2020/04/Hu-Lor-3-600x600.jpg',
        status: 'NEW',
        isAvailable: true
    },
    {
        id: 6,
        name: "Organic D'Anjou Pear",
        price: 50000,
        title: "đây là tiêu đề",
        categoryName: 'Sầu riêng',
        images: ['https://topduriandelivery.com/wp-content/uploads/2020/04/durian-champion.jpg',
            'https://topduriandelivery.com/wp-content/uploads/2020/04/df2f3fe3-27f6-4ce8-87e2-b5907e38de5b.jpg',
            'https://topduriandelivery.com/wp-content/uploads/2020/05/Hu-Lor-2-600x600.jpg'],
        thumbnailUrl: 'https://topduriandelivery.com/wp-content/uploads/2020/04/Hu-Lor-3-600x600.jpg',
        rating: 4,
        oldPrice: 40000,
        status: 'OUT_OF_STOCK',
        isAvailable: false
    },

];

module.exports = {
    renderHomePage,
    renderCategoryPage,
    renderProductPage,
    renderBlogPage,
    renderArticlePage
};