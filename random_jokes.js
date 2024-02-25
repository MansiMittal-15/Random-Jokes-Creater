// a website which tells the random jokes..

let elem = document.getElementsByTagName("div")[0];
console.log(elem);

let jokes = { 

    1:     "Santa sent SMS to his BOSS: Me sick, no work.  \n  Boss SMS back: When I am sick I kiss my wife try it. \n Two hours later Santa sms 2 boss: Me ok, ur wife very sweet.",

    2:   "Santa ki chatri me hole tha, kisine pucha, umbrella mein hole kyu? \n Sardar bola: Oye    barish ruk jayegi to pata kaise chalega. ",

    3:   " Santa: Why has the Govt. fixed voting age 18yrs & marriage age 21yrs? \n Banta: Govt. ko pata hai ki desh sambhalna aasan hai, lekin biwi ko nahi. ",

    4:  "Banta: Pareshan lag rahe ho. \n Santa: Yaar baap ban ne wala hu. \n Banta: Yeh to khushi ki baat hai. \n Santa: Lekin biwi ko nahi pata. ",

    5:    "Santa bada dukhi tha, kisi ne pucha itni tension me kyon ho? \n Santa: Ek dost ko 3 lac plastic surgery k liye diye the, ab use pehchan nahin pa raha   ",

    6:    "Driver: Sir ji, petrol khatam ho gaya , gaadi aage nahi ja sakti. \n  Banta: Chalo Phir, wapis le chalo. ",

    7:   "Santa: Wo dekh teri biwi ko saanp kaat raha hai. \n  Banta: Are tension mat le, Jeher bharwane aya hoga...   ",

    8:    "Banta: Kal Muje 10 logo ne Peeta. \n Santa: Phir tune kya kiya? \n Banta: Maine kaha salon ek-ek karke aao. \n  Santa: Phir?  Banta: Phir kya, Salon ne ek-ek karke dubara Peeta !",

    9:    "Pappu: Ajj madam ne 1 swaal puchhya jisda jawab sirf mainu hi pata si. \n Santa: Mera biba beta, ki swaal si? \n Pappu: Swaal si k blackboard kol susu kine kita hai?   ",

    10:    "Inspector to Banta: Faansi se pehle, bata teri antim ichha kya hai? \n Banta: Mere pair upar aur sir neeche kar k faansi de do..! "

};


elem.innerHTML = jokes[Math.floor( (Math.random() * 10) + 1)];

// console.log(Math.floor((Math.random() *10) + 1));