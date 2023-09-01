"use client";

import React, { useState } from 'react';
import { BiCopy } from "react-icons/bi";
import toast, { Toaster } from 'react-hot-toast';

const PasswordGenerator: React.FC = () => {
  const [motDePasse, setMotDePasse] = useState<string>('');
  const [copieReussie, setCopieReussie] = useState<boolean>(false);

  const genererMotDePasse = () => {
    const longueurMotDePasse = 12; // Vous pouvez ajuster la longueur ici
    const caracteresPossibles = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    let nouveauMotDePasse = '';

    for (let i = 0; i < longueurMotDePasse; i++) {
      const caractereAleatoire = caracteresPossibles.charAt(Math.floor(Math.random() * caracteresPossibles.length));
      nouveauMotDePasse += caractereAleatoire;
    }

    setMotDePasse(nouveauMotDePasse);
    toast('Hello Darkness!',
  {
    icon: '👏',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
);
  };

  const copierMotDePasse = () => {
   
    const textarea = document.createElement('textarea');
    textarea.value = motDePasse;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    setCopieReussie(true);
    setTimeout(() => setCopieReussie(false), 2000);
    toast.success('Successfully toasted!');

    console.log("sucses 👏👏👏")
  };

  return (
    <div className='flex flex-col items-center justify-center mt-16'>
      <button className='p-3 font-semibold mb-5 rounded-full bg-gradient-to-r from-pink-400 to-yellow-500 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500' onClick={genererMotDePasse}>Générer un mot de passe</button>

      <div className='flex flex-row'>
        <p className='text-3xl text-neutral-900 bg-white mt-4 py-5 px-32 rounded-xl shadow-2xl'>{motDePasse}</p>
        <button className='flex flex-row cursor-pointer' onClick={copierMotDePasse}>
          {copieReussie ? 'Copié !' : <BiCopy size={20} />}
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
