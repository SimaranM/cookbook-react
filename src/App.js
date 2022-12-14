import React from 'react'
import './App.css';
import { client } from './client';
import Posts from './components/Posts';
import Footer from './components/Footer';


class App extends React.Component {
  state = {
    articles: []
  }
    
   componentDidMount() {
    client.getEntries()
      .then((response) => {
        /*console.log(response)*/
        this.setState({
          articles: response.items
        })
      })
      .catch(console.error)
  }
  render() {
    return (
      <div className="App">
        <div className='container'>
          <header>
            <div className='wrapper'>
              <div className='wrapper_inner'>
              <span className='wrapper_span'>Cookbook</span>

              </div>
            </div>
          </header>
          <main>
            <div className='wrapper'>
              <Posts posts={this.state.articles} />
            </div>
            
          </main>
          <footer>
            <div className="footer"><Footer /></div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
