# HTTP clients and Promises

## HTTP calls and Promises

Lets say that you're about to order something on your favorite online shopping site. You've added all your new items into a shopping basket, and you've checked it out. Your credit card information is pasted into the payment form and the order confirmation has arrived into your mailbox after a series of bank authentication services. That email confirmation is a Promise. The company have **Promised** to deliver your package. it may take a couple of days, or an entire week before your package has arrived.

From the [mozilla developer page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

> The Promise object in javaScript represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

Hence the "eventual completion" is you as a customer "waiting" for the package to arrive, and the resulting value of that operation is your actual package.

Lets say we have some sort of external API that gives us some data. That API-call needs to travel for a certain amount of time. The time needed to retreive data often relies on factors such as: internet speed, signal and geolocation of servers. By having these factors, the time it takes for a web-application to recieve some data can be from a few milliseconds, to entire seconds.

If it takes an entire week for your package to arrive, you're absolutely going to enjoy your life while it travels (i.e. buying an item online is an asynchronous request, you do not get the item immediately). The same applies to the web-application; the application want to continue living its life.

Syntactically a Promise looks like this, and it's an object.

```jsx
Promise((resolve, reject) => {
    /*
    resolve() return the data / item you want to deliver, if it succeeds (the result)
    reject() the thing you want to deliver, if it goes wrong
    */
})
```

Lets look at the `fetch()` HTTP-client that is built into the javascript API. The documentation clearly states that the `fetch()` function returns a Promise. The call to the `url` takes a few ms to a second.

```js
const promise = fetch(url, options)
```


#### 📌 A1 - Create a counter.

Create a component that keeps track of a count. Create buttons that increments and decrements the value of the count with the use of the `onClick` event.

<details><summary>🔑 Solution</summary>
<br>

Solution 1: Inline setState functions directly in the JSX-abbreviation of the `<button>` html element
```jsx
const Counter = () => {
    const [count, setCount] = useState(0);

    return (
    <React.Fragment>
        <h1>My count: {count}</h1>
        <button onClick={() => setState(count + 1)}>Increment by 1</button>
        <button onClick={() => setState(count + 1)}>Decrement by 1</button>
    <React.Fragment>
    )
}
```

<br>

Solution 2: Creating named functions.
<br>

```jsx
const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    
    const decrement = () => setCount(count - 1);

    return (
    <React.Fragment>
        <h1>My count: {count}</h1>
        <button onClick={increment}>Increment by 1</button>
        <button onClick={decrement}>Decrement by 1</button>
    <React.Fragment>
    )
}
```

<br>

Solution 3 securing correct state.

```jsx
const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(prevCount => prevCount + 1);
    
    const decrement = () => setCount(prevCount => prevCount - 1);

    return (
    <React.Fragment>
        <h1>My count: {count}</h1>
        <button onClick={increment}>Increment by 1</button>
        <button onClick={decrement}>Decrement by 1</button>
    <React.Fragment>
    )
}
```
</details>

<br>

#### 📌 A2 - Rectangle changing color.

Create a rectangle that changes color when your mouse hovers over the element.

tips: `onMouseEnter` and `onMouseLeave` events.

rectangle div styles

```js
<div style={{width: 250, height: 250, backgroundColor: /* white, blue, black, yellow, purple  */}}>
</div>
```

<details><summary>🔑 Solution</summary>
<br>

The state defined by useState has the naming convention offered by JS-Objects. i.e.

```js
const backgroundColor = "white";

const myObject = {
    backgroundColor: backgroundColor
}

//shorthand
const myObjectWithShorthand = { backgroundColor }

// myObject === myObjectWithShortand (true)
```
```jsx
const Counter = () => {
    const [backgroundColor, setBackgroundColor] = useState("white");

    const handleMouseEnter = () => setBackgroundColor("purple");

    const handleMouseLeave = () => setBackgroundColor("white");

    return (
    <React.Fragment>
        <div
        style={{width: 250, height: 250, backgroundColor}}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
        </div>
    <React.Fragment>
    )
}
```
</details>

<br>

#### 💎 Combine A1 and A2 by using a single state Object

Use A1 and A2 and combine both their states into a javaScript-Object. The main component should include the behaviour from A1 and A2; incrementing and decrementing a count, and a `<div>` that changes color when hovering over it. This exercise focus on becoming comfortable with the usage and handling of javascript objects. 

<details><summary>🔑 Solution</summary>

The solution can be written in numerous ways based on javascript preferences with objects and function handling.
All the examples are doing the exact same. 

```jsx
setState({ backgroundColor, count}) => {
    return { backgroundColor, count: count + 1}
})

setState(prevState => {
    return { ...prevState, count: prevState.count + 1}
});

setState(prevState => {
    return { backgroundColor: prevState.backgroundColor, count: prevState.count + 1 }
})

//Personal favorite by always destructuring and using shorthand object return. if the state object is large, update only the object entry that you want.

setState(({ count, ...prevState}) => ({ ...prevState, count: count + 1}))
```
<br>

```jsx
const App = () => {
  const [state, setState] = useState({ backgroundColor: "white", count: 0 })

  const increment = () => setState(prevState => {
    return { backgroundColor: prevState.backgroundColor, count: prevState.count + 1 }
  });
  
  const decrement = () => setState(({ count, ...prevState}) => ({
    ...prevState, count: count - 1})
  )

  const handleMouseEnter = () => setState(prevState => ({
      count: prevState.count, backgroundColor: "purple"
  }));

  const handleMouseLeave = () => setState(prevState =>  ({
      ...prevState, backgroundColor: "white"
  }));

  const {
      count,
      backgroundColor
  } = state;

  return (
      <React.Fragment>
          <div
          style={{width: 250, height: 250, backgroundColor}}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          />
          <h1>My count: {count}</h1>
          <button onClick={increment}>Increment by 1</button>
          <button onClick={decrement}>Decrement by 1</button>
      </React.Fragment>
  )
}
```
</details>
