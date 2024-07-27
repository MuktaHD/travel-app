import React, { useState } from 'react';
import TravelCard from './components/TravelCard';
import './App.css';

const initialCards = [
  { id: 1, name: 'Agra', price: '₹ 35,758', description: 'Agra is a city in northern India, known for the iconic Taj Mahal, a stunning white marble mausoleum...', img: 'https://media.istockphoto.com/id/492494571/photo/morning-in-taj-mahal.jpg?s=1024x1024&w=is&k=20&c=GWdEc_umCyj9e4o0st2HJoH3yGRB-Ws2qYTuZel3dNQ=' },
  { id: 2, name: 'Jaipur', price: '₹ 82,560', description: 'Jaipur is the capital city of the Indian state of Rajasthan, known for its stunning pink-hued buildings...', img: 'https://media.istockphoto.com/id/1135820309/photo/amber-fort-and-maota-lake-jaipur-rajasthan-india.jpg?s=1024x1024&w=is&k=20&c=GzMFwHZE6rktQgOnEnVXQLm3-MPxHF1K6lY6g91O3Kc=' },
  { id: 3, name: 'Goa', price: '₹ 29,695', description: 'Goa is a small state on India\'s western coast, known for its stunning beaches, vibrant nightlife...', img: 'https://plus.unsplash.com/premium_photo-1697729701846-e34563b06d47?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
 
  { id: 4, name: 'Varanasi', price: '₹ 45,700', description: 'Varanasi is a city in the northern Indian state of Uttar Pradesh dating to the 11th century B.C. Regarded as the spiritual capital of India, the city draws Hindu pilgrims who bathe in the Ganges Rivers sacred waters and perform funeral rites. Along the citys winding streets are some 2,000 temples, including Kashi Vishwanath, the “Golden Temple,” dedicated to the Hindu god Shiva...', img: 'https://media.istockphoto.com/id/827065008/photo/holy-town-varanasi-and-the-river-ganges.jpg?s=1024x1024&w=is&k=20&c=gpO4gDCL0L9pImjjnbeicLNeM5Qc0LStjQe4AcD4iZE=' },
  { id: 5, name: 'Lonavala', price: '₹ 10,560', description: 'Lonavala is a hill station surrounded by green valleys in western India near Mumbai. The Karla Caves and the Bhaja Caves are ancient Buddhist shrines carved out of the rock. They feature massive pillars and intricate relief sculptures. South of the Bhaja Caves sits the imposing Lohagad Fort, with its 4 gates. West of here is Bhushi Dam, where water overflows onto a set of steps during rainy season....', img: 'https://media.istockphoto.com/id/1133829134/photo/rural-view-over-lonavala.jpg?s=1024x1024&w=is&k=20&c=GYTf0vyzYu7fLKX7U6O9oE-91xm8ErS2INp4TRZMqhA=' },
  { id: 6, name: 'Nashik', price: '₹ 15,500', description: 'Nashik is an ancient holy city in Maharashtra, a state in western India. Its known for its links to the “Ramayana” epic poem. On the Godavari River is Panchavati, a temple complex. Nearby, Lord Rama was thought to have bathed at Ram Kund water tank, today attended by Hindu devotees. Shri Kalaram Sansthan Mandir is an ancient shrine to Rama, while Rama and Sita are said to have worshipped at Sita Gufaa caves....', img: 'https://media.istockphoto.com/id/880969326/photo/ramkund-in-nashik-india-with-dramatic-colorful-clouds-in-the-sky.jpg?s=1024x1024&w=is&k=20&c=VX8faywJy3kaIBFgmhKtHjLXF8DnEgHxdS-AuNgxiys=' },

  { id: 7, name: 'Kerela', price: '₹ 35,758', description: 'Kerala, a state on Indias tropical Malabar Coast, has nearly 600km of Arabian Sea shoreline. Its known for its palm-lined beaches and backwaters, a network of canals. Inland are the Western Ghats, mountains whose slopes support tea, coffee and spice plantations as well as wildlife. National parks like Eravikulam and Periyar, plus Wayanad and other sanctuaries, are home to elephants, langur monkeys and tigers....', img: 'https://media.istockphoto.com/id/520413349/photo/backwaters-of-kerala.jpg?s=1024x1024&w=is&k=20&c=4k5L6krrRGgUIfVC83KGwjy3URK73eBSCEwaiVRqTOk=' },
  { id: 8, name: 'Jammu and Kashmir', price: '₹ 82,560', description: ' Jammu and Kashmir is a region administered by India as a union territory and consists of the southern portion of the larger Kashmir region, which has been the subject of a dispute between India and Pakistan since 1947 and between India and China since 1959...', img: 'https://media.istockphoto.com/id/1171962535/photo/srinagar-kashmir.jpg?s=1024x1024&w=is&k=20&c=wmE0tz1jSOQTZ22XjsPAiRxSFTCL2_NShSTwgRWsxZE=' },
  { id: 9, name: 'Rameswaram', price: '₹ 65,695', description: 'Rameswaram is a town on Pamban Island, in the southeast Indian state of Tamil Nadu. It’s known for Ramanathaswamy Temple, a Hindu pilgrimage site with ornate corridors, huge sculpted pillars and sacred water tanks. Devotees bathe in the waters of Agni Theertham, off the beach east of the temple. Gandamadana Parvatham is a hill with island views. A chakra (wheel) here is said to bear an imprint of Lord Rama’s feet.e...', img: 'https://media.istockphoto.com/id/1191047478/photo/rameshwaram-bridge-in-south-india.jpg?s=1024x1024&w=is&k=20&c=PkPwyH7GhYd9GGKwBFNC2ukxaJw4Z0PyqwUcqfDadMs=' },
 

];

function TravelApp() {
  const [cards, setCards] = useState(initialCards);

  const deleteCard = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };

  const refreshCards = () => {
    setCards(initialCards);
   
  };

  return (
    <div className="travel-app">
    
      <div className="cards-container " style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '16px',

      }}>
        {cards.map(card => (
          <TravelCard key={card.id} card={card} onDelete={deleteCard} />
        ))}
      </div>
      <button onClick={refreshCards} className="refresh-button">Refresh</button>
    </div>
  );
}

export default TravelApp;
