<form action="/contact" method="POST">
  <input name="name" />
  <input name="email" />
  <textarea name="message"></textarea>
  <button type="submit">Send</button>
</form>



app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("New message:", name, email, message);
  res.send("Message received!");
});
