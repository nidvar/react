class App extends React.Component{
    render(){
        return(
            <div>
                <Nav />
                <Main />
                <br />
                <Footer />
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));