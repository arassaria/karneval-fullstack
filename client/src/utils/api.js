export async function addBid(props) {
  await fetch("/api/bids/bid", {
    method: "POST",
    body: JSON.stringify(props),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function getHighestBid() {
  const result = await fetch("/api/bids/highest");
  const returnedData = await result.json();
  return returnedData;
}
