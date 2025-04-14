import React, { useEffect, useState } from 'react';
import axios from 'axios';

const QuotesGenerator = () => {
  const [quoteData, setQuoteData] = useState({ content: '', author: '' });
  const [loading, setLoading] = useState(true);

  const fetchQuote = () => {
    setLoading(true);
    axios
      .get('https://api.quotable.io/random')
      .then((res) => {
        setQuoteData({
          content: res.data.content,
          author: res.data.author,
        });
      })
      .catch((err) => console.log('Failed to fetch quote: ', err));
    setLoading(false);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div style={styles.card}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p style={styles.content}>"{quoteData.content}"</p>
          <p style={styles.author}> — {quoteData.author}</p>
          <button onClick={fetchQuote} style={styles.button}>
            New Quote
          </button>
        </>
      )}
    </div>
  );
};

const styles = {
  card: {
    maxWidth: '500px',
    margin: '50px auto',
    padding: '30px',
    borderRadius: '12px',
    textAlign: 'center',
    fontFamily: 'sans-serif',
  },
  content: {
    fontSize: '20px',
    fontStyle: 'italic',
  },
  author: {
    marginTop: '16px',
    fontWeight: 'bold',
    color: '#555',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
    background: '#f19733',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
  },
};

export default QuotesGenerator;
