import React from 'react';

function Footer() {
  return (
    <footer className="w-full p-4 rounded-lg shadow md:px-6 mt-auto">
      <span className="block text-sm text-gray-500 text-center">
        © 2022
        {' '}
        <a href="https://github.com/soroslie" className="hover:underline">
          Soros Lie
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}

export default Footer;
