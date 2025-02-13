const itemsList = document.querySelectorAll("li.item");
console.log(`Number of categories: ${itemsList.length}`);

itemsList.forEach((item) => {
  const itemTitle = querySelector("h2");
  const itemsElements = querySelectorAll("ul li");
  console.log(`Category: ${itemTitle.textContent}`);
  console.log(`Elements: ${itemsElements.length}`);
});
