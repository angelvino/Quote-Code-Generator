let btn= document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person')

const quotes = [
  {
    quote: "You can discover more about a person in an hour of play than in a year of conversation.",
    person:'Plato'
  },
  {
    quote:"The greatest lesson in life is to know that even fools are right sometimes.",
    person:'Sir Winston Churchill'
  },
  {
    quote:"The only thing we have to fear is fear itself.",
    person:'Franklin delano roosevelt'
  },
  {
    quote:"For every dark night, there’s a brighter day.",
    person:'Tupac Shakur'
  },
  {
    quote:"The only thing that overcomes hard luck is hard work.",
    person:'Harry Golden'
  },
  {
    quote:"The real tragedy of the poor is the poverty of their aspirations.",
    person:'Adam Smith'
  },
  {
    quote:"Hardships often prepare ordinary people for an extraordinary destiny.",
    person :' C.S. Lewis'
  },
  {
    quote : "Strength does not come from winning. Your struggles develop your strengths.",
    person:'Arnold Schwarzenegger'
  },
  {
    quote : "If opportunity doesn’t knock, build a door.",
    person : 'Milton Berle'
  },

  {
    quote : "A challenge only becomes an obstacle when you bow to it.",
    person : 'Ray Davis'
  },
  {
    quote : "The days without difficulty are the days you do not improve.",
    person : 'Evan Winter'
  },
  {
    quote : "Hardships can humble you, but it cannot break you unless you let it",
    person : 'Mizi Wahid'
  },
  {
    quote : "Things work out best for those who make the best of how things work out",
    person : 'John Wooden'
  },
  {
    quote : "You may encounter many defeats, but you must not be defeated.",
    person : 'Maya Angelou'
  },
  {
    quote : "I find that the harder I work, the more luck I seem to have",
    person: 'Thomas Jefferson'
  },
  {
  quote : "Try not to become a man of success. Rather become a man of value.",
  person : 'Albert Einstein'
  },
  {
    quote : "If you really look closely, most overnight successes took a long time",
    person : 'Steve Jobs'
  },
  {
    quote : "Some people dream of success, while others wake up and work hard at it.",
    person : 'Napoleon Hill'
  },
  {
    quote : "You are never too old to set another goal or to dream a new dream.",
    person : 'C.S. Lewis'
  },
  {
    quote : "The twin killers of success are impatience and greed.",
    person : 'Jim Rohn'
  },
  {
    quote : "Whether you think you can or you think you can’t, you’re right.",
    person : 'Henry Ford'
  },

];


btn.addEventListener('click',function()
{
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;


})