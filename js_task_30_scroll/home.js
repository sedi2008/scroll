//icon-lari secmek
const icons=document.querySelectorAll('.icon')

//for ile saygac duzelt (let i=0)iconlari sayi deyise biler(i<icons.lenght) iconlarin 
// iconslar node listinin dovr vastesile her defe i-inci indexsini her bir elementine 
//addEventLisner()  click hadisesinin call back func ise dussun
for(let i=0; i<icons.length;i++){
  icons[i].addEventListener('click',function(){
    console.log('icon clicked')
    //butun elemnt gizletmek ucun closeAllElements cagirib icon massivini veririk
    closeAllElements(icons)

    openClose(this);
    //openClose func cagiririg
  })
}

function openClose(element){
{     //klik edilmis icon-u deyisdirir ,metni gorunur
      element.parentNode.nextElementSibling.classList.remove('hidden') //css olan hidden clasindan sil
      element.classList.replace("fa-chevron-down","fa-chevron-up")
    }
}

 
function closeAllElements(elements){
for(let i=0; i<elements.length; i++){
//for-un isi iconlar massivinde butun elementlerin qonsusuna hidden clasini eleve elemek yani hamisini gizletmeye xidmet eliyir ve
// iconun oxunu chevron-down eliyir
//p.previoselement
elements[i].parentNode.nextElementSibling.classList.add('hidden')
elements[i].classList.replace("fa-chevron-up","fa-chevron-down")
}
}

