import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello, I am Mohri</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Mohri</p>");
});

app.get("/contact", (req, res) => {
  res.send('<h1>Contact Me</h1><p>Phone: +2348085145419</p><p>WhatsApp <a href="https://wa.me/+2347039479761">Click here</a></p>');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
