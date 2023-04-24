
import './App.css';
import { CocktailContextProvider } from './context/CocktailsContext';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { CocktailsListContainer } from './components/CocktailsListContainer/CocktailsListContainer';
import { CocktailDetailContainer } from './components/CocktailDetailContainer/CocktailDetailContainer';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <CocktailContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<CocktailsListContainer/>} />
            <Route path='/:id' element={<CocktailDetailContainer/>} />
          </Routes>
        </BrowserRouter>
      </CocktailContextProvider>
    </ChakraProvider>
  );
}

export default App;
