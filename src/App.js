import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: '10px' }}>
                    <button>Buton 1</button>
                    <button>Buton 2</button>
                    <button>Buton 3</button>
                    <button>Buton 4</button>
                </div>
            </header>
        </div>
    );
}

export default App;
