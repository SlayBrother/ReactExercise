const App = () => {
    return (
        <div>
            <Person name="Colby Bolby" age={4} hobbies={["Running", "Cuddling", "Screaming"]} />
            <Person name="Pippy Dippy" age={4} hobbies={["Attacking", "Playing", "Sleeping"]} />
            <Person name="Mischief Evil Pants" age={3} hobbies={["Eating", "Growling", "Snot Bubbling"]} />
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"))