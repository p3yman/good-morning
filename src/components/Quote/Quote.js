import React from "react";
import quotes from "./quotes";

function Quote() {
  const random = Math.floor(Math.random() * quotes.length);
  const quote = quotes[random];

  return (
    <div className="quote">
      <div className="content">
        <div className="text">{quote.text}</div>
        <div className="author">- {quote.author}</div>
      </div>
    </div>
  );
}

export default Quote;
