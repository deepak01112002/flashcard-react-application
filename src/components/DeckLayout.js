import { Outlet, useParams} from "react-router-dom"
import { useEffect } from "react";
import { readDeck } from "../utils/api";

const DeckLayout = ({ setFoundDeck }) => {
  
	const { deckId } = useParams();

	//upon loading the page this effect will use the decksId to read the deck and set it to foundDeck state, anytime deckId changes the found deck will change as well
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
	}, [deckId]);



  return (
    <Outlet/>
  )
}


export default DeckLayout