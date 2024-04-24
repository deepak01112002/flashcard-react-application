import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { readDeck } from '../utils/api';
import Navigation from '../Layout/Navigation';

const StudyDeck = ({ foundDeck, setFoundDeck }) => {
	
	
	const { deckId } = useParams();
	const [cardIndex, setCardIndex] = useState(0);
	const [flipped, setFlipped] = useState(false);
	

	//upon loading page this effect will use the decksId to read the deck and set it to foundDeck state
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

	//handling setting the cardId ++ so that the page can rerender the new card
	const handleNextClick = () => {
		setCardIndex(cardIndex + 1);
		setFlipped(false);
	};
	//handling setting the flipped state to the opposite of what it is
	const handleFlipClick = () => {
		setFlipped(!flipped);
	};
	//handling setting the card index back to 0 to restart study session
	const handleRestartClick = () => {
		setCardIndex(0);
	};

	const cardList = foundDeck.cards.map((card, index) => (
		<div className="study-page-card">
			<h3>
				Card {index + 1} of {foundDeck.cards.length}
			</h3>
			<p>{flipped ? card.back : card.front}</p>
			<button className="flip-button" onClick={handleFlipClick}>
				Flip
			</button>
			<button className="next-button" onClick={handleNextClick}>
				Next
			</button>
		</div>
	));

	const finalCard = (
		<div className="study-page-card">
			<p>Would you like to study again?</p>
			<button onClick={handleRestartClick}>Restart</button>
		</div>
	);

	return (
		<>
			<Navigation foundDeck={foundDeck}/>
			<div className="study-page-all-cards">
				<h2>Study: {foundDeck.name}</h2>
				<div className="card-display study-card">
					{cardIndex > cardList.length - 1 ? finalCard : cardList[cardIndex]}
				</div>
			</div>
		</>
	);
};

export default StudyDeck;
