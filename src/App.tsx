import React from 'react';
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'
import { Container } from './styles/components';
import CreditCard from './components/CreditCard';
import Form from './components/Form';
import { CreditCardProvider } from './context/CreditCard';

function App() {
  return (
    <CreditCardProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="App">
          <Container>
            <div className="row">
              <div className="column">
                <CreditCard />
              </div>
              <div className="column">
                <Form />
              </div>
            </div>
          </Container>
        </div>
      </ThemeProvider>
    </CreditCardProvider>
  );
}

export default App;
