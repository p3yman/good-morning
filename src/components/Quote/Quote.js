import React from "react";
import quotes from "./quotes";

function Quote() {
  const random = Math.floor(Math.random() * quotes.length);
  const quote = quotes[random];

  return (
    <div className="quote">
      <div className="content">
        <div className="text">{quote.text}</div>
        {quote.author ? <div className="author">- {quote.author}</div> : null}
      </div>
    </div>
  );
}

export default Quote;
