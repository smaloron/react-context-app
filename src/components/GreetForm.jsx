import { useContext } from 'react';
import { AppContext } from '../App';

export default function GreetForm () {
    const { setGreetWord, greetWord } = useContext(AppContext);
    function handleChange (ev) {
        setGreetWord(ev.target.value)
    }

    return (
        <form>
            <input type="text" value={greetWord} onChange={handleChange} />
        </form>
    )
}