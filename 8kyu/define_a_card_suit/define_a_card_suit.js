function defineSuit(card) {
  switch (card.charAt(card.length - 1)) {
    case "♣":
      return "clubs";
    case "♦":
      return "diamonds";
    case "♥":
      return "hearts";
    case "♠":
      return "spades";
    default:
      return "Unknown card";
  }
}
