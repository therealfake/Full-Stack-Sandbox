import './App.scss';
import Navbar from './components/Navbar';
import Hero from './components/Hero.js';
import Card from './components/Card.js';
import data from './data.js'

export default function App() {
  const cards = data.map( item => {
    return ( 
      <Card 
        img={`./images/${item.coverImg}`}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        country={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
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
