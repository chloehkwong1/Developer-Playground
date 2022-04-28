# Node with Express Server Notes

- Best practice to use `app` as a function that represents the express module. 

- `app.get()` -> specifies what should happen when the browser makes a request to our server and makes a GET request.

```
app.get("/", function (req, res) {
  response.send("<h1>Hello, world!<h1/>");
})
```

- Nodemon restarts the server when it detects changes. 


# Unrelated but things I need to know
- A callback is a function passes as an argument to another function.
- This technique allows a function to call another function. 
- A callback function can run after another function has finished. 

```
app.listen(3000, function(){
    console.log("Server started on port 3000")
})
```