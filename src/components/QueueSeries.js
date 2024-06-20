import { useState } from "react"

const initialList = [
    { id: 0, title: 'Big Bellies', seen: false },
    { id: 1, title: 'Lunar Landscape', seen: false },
    { id: 2, title: 'Terracotta Army', seen: true },
];

export default function Counter() {
    const [score, setScore] = useState(0);
    const [person, setPerson] = useState({
        name: 'Sathish kumar k',
        artwork: {
            title: 'Mr.Gravitator',
            city: 'Irving,Tx',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg'
        }
    });

    const [list, setList] = useState(initialList);

    function handleToggle(artworkId, nextSeen) {
        setList(list.map(artwork => {
            if (artwork.id === artworkId) {
                return { ...artwork, seen: nextSeen };
            } else {
                return artwork;
            }
        }));
    }

    function increment() {
        setScore(score => score + 1);
        // console.log('clicked',score);
    }

    function handleNameChange(e) {
        setPerson({ ...person, name: e.target.value });
    }
    function handleTitleChange(e) {
        setPerson({ ...person, artwork: { ...person.artwork, title: e.target.value } });
    }
    function handleCityChange(e) {
        setPerson({ ...person, artwork: { ...person.artwork, city: e.target.value } });
    }
    function handleImageChange(e) {
        setPerson({ ...person, artwork: { ...person.artwork, image: e.target.value } })
    }

    return (
        <>
            <button onClick={() => increment()}>+1</button>
            <button onClick={() => {
                increment();
                increment();
                increment();
            }}>+3</button>
            <h1>Score: {score}</h1>
            <hr />


            {/* Object */}

            <label>
                Name: <input value={person.name} onChange={handleNameChange} />
            </label>
            <label>
                Title: <input value={person.artwork.title} onChange={handleTitleChange} />
            </label>
            <label>
                City: <input value={person.artwork.city} onChange={handleCityChange} />
            </label>
            <label>
                Image: <input value={person.artwork.image} onChange={handleImageChange} />
            </label>
            <p>
                <i>{person.artwork.title}</i>
                {' by '}
                {person.name}
                <br />
                (located in {person.artwork.city})
            </p>
            <img
                src={person.artwork.image}
                alt={person.artwork.title}
            />

            {/* Array */}

            <h1>Art Bucket List</h1>
            <h2>My list of art to see:</h2>
            <ItemList
                artworks={list}
                onToggle={handleToggle} />
        </>
    )
}

function ItemList({ artworks, onToggle }) {
    return (
      <ul>
        {artworks.map(artwork => (
          <li key={artwork.id}>
            <label>
              <input
                type="checkbox"
                checked={artwork.seen}
                onChange={e => {
                  onToggle(
                    artwork.id,
                    e.target.checked
                  );
                }}
              />
              {artwork.title}
            </label>
          </li>
        ))}
      </ul>
    );
  }