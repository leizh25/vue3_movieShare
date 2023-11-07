const express = require('express');
const app = express();
const fs = require("node:fs")
const path = require("node:path");
const { request } = require('./request');

app.use(express.static(path.resolve(__dirname, "./public")))

app.all('*', function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next();
});


app.get("/cate", async (req, res) => {
    console.log(decodeURI(req.url));
    try {
        const { type = "movie", tag = "热门", page_limit = 50, page_start = 0 } = req.query
        const res1 = await request(`/j/search_subjects?type=${type}&tag=${tag}&page_limit=${page_limit}&page_start=${page_start}`)
        res1.subjects.forEach(item => {
            item.cover = item.cover.replace(/https:\/\/img\d\.doubanio\.com/g, 'http://127.0.0.1:3000')
        });
        res.send(res1)
    } catch (error) {
        res.status(500).send("Server Error")
    }
})
app.get('/img', async (req, res) => {
    const { pName } = req.query
    console.log(pName);
    try {
        const file = fs.readFileSync(path.resolve(__dirname, "./img", pName + ".jpg"))
        // console.log(file);
        return res.send(file)
    } catch (error) {
        console.log(error.message);
    }
    try {
        const file = await request(`https://img1.doubanio.com/view/photo/s_ratio_poster/public/${pName}.jpg`, { responseType: 'arraybuffer' })
        fs.writeFileSync(path.resolve(__dirname, "./img", pName + ".jpg"), file, { encoding: "binary", })
        console.log("图片保存成功", pName);
        return res.send(file)
    } catch (error) {
        res.status(404).sendFile(path.resolve(__dirname, "./img/404.png"))
    }
});

app.get("/menu", async (req, res) => {
    const { type } = req.query
    try {
        res.send(await request(`/j/search_tags?type=${type}&source=index`))
    } catch (error) {
        res.status(500).send("Server Error")
    }
})

app.use("/*", ((req, res) => {
    res.status(404).send("资源未找到")
}))

app.listen(3000, () => {
    console.log(`服务启动成功: http://127.0.0.1:${3000}`);
})

