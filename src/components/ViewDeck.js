import React, { useEffect } from "react";
import { readDeck } from "../utils/api";
import { useParams } from "react-router-dom";


const ViewDeck = ({ foundDeck, setFoundDeck }) => {
	const { deckId } = useParams();

	useEffect(() => {
		async function getDeck(deckId) {
			const controller = new AbortController();
			const { signal } = controller;

			try {
				const deck = await readDeck(deckId, signal);
				const { name, description, cards, id } = deck;
				setFoundDeck({
					name: name,
					description: description,
					cards: cards,
					id: id,
				});
			} catch (error) {
				if (error.name !== 'AbortError') {
					console.error('Failed to read deck:', error);
				}
			}
		}
		getDeck(deckId);
	}, [deckId, setFoundDeck]);


	const cards = foundDeck.cards
	const cardItems = cards.map((card) => (
		<li>
			<td>{card.front}</td>
			<td>{card.back}<button>Edit</button><button>🗑️</button></td>
		</li>
	)) 

	return (
		<div className="viewdeck-page">
			<div className="deck-description">
				<h3>{foundDeck.name}</h3>
				<p>{foundDeck.description}</p>
				<button>Edit</button>
				<button>Study</button>
				<button>Add Cards</button>
				<button>🗑️</button>
			</div>
			<div>
				<h2>Cards</h2>
				<ul>{cardItems}</ul>
			</div>
		</div>
	)
}


export default ViewDeck