class App extends React.Component{
    render(){
        return(
            <div>
                <Nav />
                <Main />
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));