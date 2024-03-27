const App = () => {
    return (
        <div>
            <Tweet username="ChunkyBolb" name="Colbert" date="3/27/2024" tweet="Pippy attacked me earlier when dad wasn't in the room"/>
            <Tweet username="MischiefTheDemon" name="Mischief" date="3/27/2024" tweet="I heard it all and hissed from outside"/>
            <Tweet username="PippyDippy" name="Pippy" date="3/27/2024" tweet="I'm being set up. I'm an angel"/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))