let sum = prompt("Umumiy sayohat:500$,pulingizni kiriting ")
if(sum > 5500500) {
    alert("Sizda mablag yetarli emas,eltimos xisobingizni toldiring :( ")
} else if (sum < 1200250){
    alert("Sizda umuman mablag yetmaydi,xisobingizni toldiring :( ")
}else{
    alert("Sizda sayohat uchun mablag yetarli:) ")
}


let mexmon = prompt("Mexmon xona:250$,pulingizni kiriting")
if(mexmon > 2500000) {
    alert("Sizda mablag yetarli emas,eltimos xisobingizni toldiring :( ")
} else if (mexmon < 1000000){
    alert("Sizda umuman mablag yetmaydi,xisobingizni toldiring :( ")
}else{
    alert("Sizda mexmon xona uchun mablag yetarli :) ")
}

let muzey = prompt("Muzey:150$ pulingizni kiriting")
if(muzey > 1500000) {
    alert("Sizda mablag yetarli emas,eltimos xisobingizni toldiring :( ")
} else if (muzey < 500000){
    alert("Sizda umuman mablag yetmaydi,xisobingizni toldiring :( ")
}else{
    alert("Sizda muzey uchun mablag yetarli :) ")
}
console.log(`Umumiy summa:${sum}.so'm\nMexmon xona uchun:${mexmon}.so'm\nMuzey uchun:${muzey}.so'm`);
alert(`Umumiy summa:${sum}.so'm\nMexmon xona uchun:${mexmon}.so'm\nMuzey uchun:${muzey}.so'm`);
alert("Sizda sayohat,mexmon xona va muzey uchun mablagingiz yetarli oq yol :)")
// let allMoney = alert(sum + mexmon + muzey)