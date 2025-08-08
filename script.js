const nameList = document.getElementById("nameList")
const total = document.getElementById("total")
const discountTotal = document.getElementById("discountTotal")
const Make = document.getElementById("Make")
const apply = document.getElementById("apply")
const inputcopon = document.getElementById("inputcopon")
const discountcont = document.getElementById("discount")
apply.disabled = true
Make.disabled = true
let totalprice = 0

const handleClick = (data) => {
  const name = (data.childNodes[5].childNodes[1].innerText);
  const price = (data.childNodes[5].childNodes[3].innerText);
  const priceTK = price.split(" ")[0]
  const pricenumber = parseInt(priceTK)
  totalprice = totalprice + pricenumber
  total.innerText = totalprice
  discountTotal.innerText = totalprice

  const li = document.createElement("li")
  li.innerText = name
  nameList.appendChild(li)

  if(totalprice > 0){
    Make.disabled = false
  }

  if (totalprice >= 200){
    apply.disabled = false
  }
}

apply.addEventListener("click",() => {
  if(inputcopon.value == "SELL200"){
  const amount = 0.2
  const discount = totalprice * amount
  const amountrate = totalprice - discount
  discountcont.innerText = discount.toFixed(2)
  discountTotal.innerText = amountrate
   }
})


Make.addEventListener("click", ()  => {
  totalprice = 0 
   total.innerText = "00"
   discountTotal.innerText = "00"
    discountcont.innerText = "00"
   nameList.innerText = ""
})