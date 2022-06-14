import React from "react";
import RandomQuote from "./components/RandomQuote";

function App() {
  const [quote, setQuote] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      try{
        const response = await fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random");
        const data = await response.json();
        setQuote(data);
      }
      catch (err) {
        console.error(err);
      }
    }
    getData(); 
  }, [])

  return (
    <RandomQuote/>
  );
}

export default App;
