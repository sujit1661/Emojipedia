import Header from "./Header";
import emojis from "../emoji";

function createEmoji(emoji  ){
    return (
            <div className="emoji-item" key={emoji.id}>
                <dt>
                    <span className="emoji" role="img" aria-label="Tense bicep">{emoji.emoji}</span>
                    <span className="emoji-name">{emoji.name}</span>
                </dt>
                <dd>{emoji.meaning}</dd>
            </div>
    )
}


export default function App() {
    return (
        <div className="app">
            <Header/>
            <h3>Because Sometimes a 😂 Says More Than Words Ever Could</h3>
            <dl>
                {emojis.map(createEmoji)}
            </dl>
        </div>
    )
}
