import React from 'react';

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <p>
        2025 &copy; Project developed by
        <a
          class='link-offset-3'
          href='https://github.com/Umka-dev'
          target='_blank'
          rel='noreferrer'
        >
          Umka-dev
        </a>
      </p>
    </footer>
  );
}

const footerStyle = {
  background: '#ededed',
  color: '#000',
  textAlign: 'center',
  padding: 20,
};
