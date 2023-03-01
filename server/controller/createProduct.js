const puppeteer = require("puppeteer")
const { scrollPageToBottom } = require('puppeteer-autoscroll-down')

const Product = require("../model/Product")
const final = []


async function findImages(interest, viewport_height,) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://oldnavy.gap.com/browse/category.do?cid=1126985&&nav=meganav%3AMen%3AShop%20Men%E2%80%99s%20Categories%3ATops#pageId=0&department=75")
    // await page.type("input[data-test-id]", `${interest}`);
    // await page.keyboard.press("Enter");


    await page.waitForSelector(".category-page-1fe0xra");
    //   await page.click();
    // await Promise.all([page.click(".FinaEf"), page.waitForNavigation()]);
    await page.setViewport({
        width: 1400,
        height: 5000
    });

    await scrollPageToBottom(page, {
        size: 300,
        delay: 300,
    })


    const data = await page.evaluate(() => {
        const images = [];
        const names = [];
        const prices = [];
        const dataArr = [];

        const imgs = document.querySelectorAll(".category-page-1fe0xra");
        imgs.forEach((el) => images.push(el.src));

        const name = document.querySelectorAll(".category-page-1r1wcud");
        name.forEach((el) => names.push(el.innerText));

        const price = document.querySelectorAll(".product-price__strike");
        price.forEach((el) => prices.push(el.innerText));


        for (let i = 0; i < images.length; i++) {
            dataArr.push({ name: names[i], price: prices[i], imgurl: images[i] })
        }
        return dataArr;
    });
    await browser.close();
    await console.log(data.length)
    final.push(data[0])



    for (let i = 0; i < data.length; i++) {


        let user = await new Product(data[i]).save()
        console.log(user)
    }




}






// findImages()

// uncomment after youve built out product

module.exports = {
    createProduct: async (req, res) => {
        try {

            console.log(final)

            let userData = await Product(final).save()

            console.log(userData)

            res.status(200).json(userData)
        } catch (error) {

            res.status(400).json({ error, message: "Bad request check body" })

        }
    },
    getProducts: async (req, res) => {
        try {
            let proData = await Product.find()
            res.status(200).json(proData)
        } catch (error) {
            res.status(400).json(error)



        }
    },
}
