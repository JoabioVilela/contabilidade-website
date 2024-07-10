import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';

const ExchangeRateCard = () => {
  const [exchangeRate, setExchangeRate] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get(
          'https://openexchangerates.org/api/latest.json',
          {
            params: {
              app_id: process.env.REACT_APP_APP_ID_EXCHANGE_RATE_CARD,
            },
          }
        );
        const rate = response.data.rates.BRL.toFixed(2);
        setExchangeRate(rate);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchExchangeRate();
  }, []);

  return (
    <Container>
      <div style={styles.card}>
        <h2>Dólar hoje (USD para BRL):</h2>
        {error ? (
          <p style={styles.error}>Error: {error}</p>
        ) : exchangeRate ? (
          <p style={styles.rate}>1 Dólar americano igual a {exchangeRate} Real brasileiro<br/>Fonte: API OpenExchangeRates</p>
        ) : (
          <p style={styles.loading}>Loading...</p>
        )}
      </div>
    </Container>
  );
};

const styles = {
  card: {
    padding: '20px',
    margin: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  error: {
    color: 'red',
  },
  rate: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  loading: {
    fontSize: '18px',
    color: '#999',
  },
};

export default ExchangeRateCard;