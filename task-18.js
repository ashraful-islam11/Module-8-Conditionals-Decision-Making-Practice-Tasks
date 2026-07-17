 // todo :      topic: If the price is greater than 1000, print "Expensive", otherwise "Affordable" — write this using a ternary operator.


 const price = 999;

 const isExpensive = (price >= 1000) ? `${price} is Expensive`: `${price} is Affordable`;

 console.log(isExpensive);