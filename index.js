const nameList = document.getElementById("nameList");
const total = document.getElementById("total");
const discountTotal = document.getElementById("discountTotal");
let totalprice = 0;
const handleClick = (data) => {
  const name = data.childNodes[5].childNodes[1].innerText;
  const priceTK = data.childNodes[5].childNodes[3].innerText;
  const price = priceTK.split(" ")[0];
  const pricenumber = parseInt(price);
  totalprice = totalprice + pricenumber;
  total.innerText = totalprice;
  discountTotal.innerText = totalprice;

  const li = document.createElement("li");
  li.innerText = name;
  nameList.appendChild(li);
};
