

var quotes=[
    {quote: "Be yourself; everyone else is already taken.", 
        auther: "-- Oscar Wilde"},
     

    {quote: "So many books, so little time.",
        auther:"-- Frank Zappa"},

    {quote: "A room without books is like a body without a soul." ,
         auther: "-- Marcus Tullius Cicero"},
  

   {quote:  "You only live once, but if you do it right, once is enough"    ,
     auther: "-- Mae West"},
    
    {quote:  "Be the change that you wish to see in the world." , 
        auther: "-- Mahatma Gandhi"},

   {quote: "In three words I can sum up everything I've learned about life: it goes on" ,
     auther: "--Robert Frost"},

     {quote: "Without music, life would be a mistake",
        auther:"-- Friedrich Nietzsche"

     },
     {quote: "We accept the love we think we deserve.",
        auther:"-- Stephen Chbosky"

     },
   
     {quote: "It is better to be hated for what you are than to be loved for what you are not.",
        auther:"-- Andre Gide"

     },
]




function generateQuote()
{
     var randomNumber = quotes[Math.floor(Math.random() * quotes.length)  ] ;
    document.getElementById("quote").innerHTML=` "${ randomNumber.quote}" `;
    document.getElementById("auther").innerHTML= randomNumber.auther ;
    console.log(randomNumber)
   


   
}




// var quotes = [
//     {quote: "Be yourself; everyone else is already taken.", auther: "-- Oscar Wilde"},
//     {quote: "So many books, so little time.", auther: "-- Frank Zappa"},
//     {quote: "A room without books is like a body without a soul.", auther: "-- Marcus Tullius Cicero"},
//     {quote: "You only live once, but if you do it right, once is enough.", auther: "-- Mae West"},
//     {quote: "Be the change that you wish to see in the world.", auther: "-- Mahatma Gandhi"},
//     {quote: "In three words I can sum up everything I've learned about life: it goes on.", auther: "-- Robert Frost"},
//     {quote: "Without music, life would be a mistake.", auther: "-- Friedrich Nietzsche"},
//     {quote: "We accept the love we think we deserve.", auther: "-- Stephen Chbosky"},
//     {quote: "It is better to be hated for what you are than to be loved for what you are not.", auther: "-- Andre Gide"}
// ];

// var lastIndex = -1;

// function generateQuote() {
//     var newIndex = lastIndex;

//     // Use a for loop to find a different random index
//     for (var i = 0; newIndex === lastIndex; i++) {
//         newIndex = Math.floor(Math.random() * quotes.length);
//     }

//     lastIndex = newIndex;
//     var selectedQuote = quotes[newIndex];
    
//     document.getElementById("quote").innerHTML = `"${selectedQuote.quote}"`;
//     document.getElementById("auther").innerHTML = selectedQuote.auther;
// }
