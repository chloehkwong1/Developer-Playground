# Calculator App

- `__dirname` provides the fullpath to the directory. It is useful when deloying your server as the location will change.

## HTTP return codes cheat sheet

1** Hold on (something will happen)
2** Here you go (success)
3** Go away (usually some security involved)
4** You fucked up (client errors)
5\*\* I fucked up (server errors)

## Body parser

`npm install body-parser`
Allows you to parse the http request to get data.

## Seperation of client and server

Output of `view-source:localhost:3000` i.e. what the client/browser sees

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Calculator</title>
  </head>
  <body>
    <h1>Calculator</h1>
    <!-- Action attribute defines where the data is sent. By default it sends to the current page it is on. -->
    <form action="/" method="post">
      <input type="text" name="num1" placeholder="First Number" />
      <input type="text" name="num2" placeholder="Second Number" />
      <button type="submit" name="submit">Calculate</button>
    </form>
  </body>
</html>
```

It doesn't show any of the javascript as the javascript is on the server i.e. on the backend
