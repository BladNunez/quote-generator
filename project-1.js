let button = document.querySelector('#quoteBtn');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

//array to hold quotes and ppl

let sourceQuotes = [
        {quote: `"I am indebted to my father for living,
                  but to my teacher for living well. "`,
         person:`Alexander The Great`},
         {quote: `"Death is nothing, but to live defeated and 
                   inglorious is to die daily"`,
         person:`Napolean Bonaparte`},
         {quote: `"The world will know that free men stood against a tyrant, that few stood against many, and before 
                   this battle was over, even a god-king can bleed."`,
         person:`King Leonidas`},
         {quote: `"I came, I saw, I conquered"`,
         person:`Julius Caeser`},
         {quote: `"If you want to destroy any nation without war, 
                   make adultery or nudity common in the young generation"`,
         person:`Sultan Saladin`},
         {quote: `"If the populace knew with what idiocy they were ruled, they would revolt."`,
         person:`Charlemagne`},
         {quote: `"I have no intention of sharing my authority."`,
         person:`King Louis XVI`},
         {quote: `"My boy, you must find a kingdom big enough for your ambitions"`,
         person:`King Philip II`},
         {quote: `"When We Fight, We'll Need The Whole Planet For an Arena "`,
          person: `Vegeta`}
];

button.addEventListener('click',function(e){
        let random = Math.floor(Math.random() * sourceQuotes.length);
            
        quote.innerText = sourceQuotes[random].quote;
        person.innerText = sourceQuotes[random].person;                
});