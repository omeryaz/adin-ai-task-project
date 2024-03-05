export function formatDate(dateString) {
  // Parse the date string into a Date object
  const date = new Date(dateString);

  const formattedDate = date.toLocaleString("default", {
    month: "short",
    day: "numeric",
  });

  return formattedDate;
}

// Divides to data arrays into 8 points to standardize data count
export function divideData(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i += Math.round(array.length / 8)) {
    newArray.push(array[i]);
  }
  return newArray;
}
