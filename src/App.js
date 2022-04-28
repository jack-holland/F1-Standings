import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Header from './components/Header';
import Navbar from './components/Navbar';
import Drivers from './components/Drivers';
import Constructors from './components/Constructors';
import Container from 'react-bootstrap/Container';
import Footer from './components/Footer';
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {
  let [page, setPage] = useState('drivers');
  const queryClient = new QueryClient()

    return (
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Header />
          <Navbar setPage={setPage} />
          <div className="content">
            <Container>
              { page === 'drivers' ? <Drivers /> : <Constructors /> }
            </Container>
            <Footer />
          </div>
        </div>        
      </QueryClientProvider>
    );
  }

export default App;
