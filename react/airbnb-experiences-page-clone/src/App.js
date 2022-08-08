import './App.scss';
import Navbar from './components/Navbar';
import Hero from './components/Hero.js';
import Card from './components/Card.js';
import data from './data.js'

export default function App() {
  const cards = data.map( item => {
    return ( 
      <Card 
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}
