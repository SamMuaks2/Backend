import express from "express";

const app = express();
const port = 3000;

app.get ("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();

    let week = "a weekday";
    let text = "it's time to work hard";

    if (day === 0 || day === 6) {
        week = "the weekend";
        text = "it's time to have fun"
    };

    res.render ("index.ejs", {
        dayType: week,
        advice: text,
    });
})

app.listen (port, () => {
    console.log(`Server running on ${port}.`)
})


// const options = { weekday: "long" };
// console.log(new Intl.DateTimeFormat("en-US", options).format(valentines));
