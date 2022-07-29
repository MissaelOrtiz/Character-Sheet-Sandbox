import { useCharacterContext } from './context/CharacterProvider';
import CharacterSheet from './views/CharacterSheet'

export default function App() {
  const {characterInformation, characterSetters} = useCharacterContext()
  return (
  <>
    <CharacterSheet characterInformation={characterInformation} characterSetters={characterSetters}/>
  </>
  );
}
