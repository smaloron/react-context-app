import { useContext } from 'react';
import { AppContext } from './App';

export default function Greeting () {
    const { greetWord } = useContext(AppContext);
    return (<h1>{greetWord} Bob</h1>);
}

