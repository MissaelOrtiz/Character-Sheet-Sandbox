import { useCharacterContext } from './context/CharacterProvider';
import CharacterSheet from './views/CharacterSheet'
import './App.css'

export default function App() {
  const {characterInformation, characterSetters} = useCharacterContext()
  return (
  <>
    <CharacterSheet characterInformation={characterInformation} characterSetters={characterSetters}/>
  </>
  );
}
