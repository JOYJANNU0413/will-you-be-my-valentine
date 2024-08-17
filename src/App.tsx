import React, { useState } from 'react';

function Proposal() {
  const [yesPressed, setYesPressed] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [yesButtonSize, setYesButtonSize] = useState(16); // default font size

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Avnaaaa? 😳",
      "Nijamaaaa? 🤨",
      "Dhandam Pedthaaa 🙏?",
      "Oka Kit-Kat chocolate isthaa 😏",
      "What about Butterscotch ice-cream 😋",
      "PLEASE EYYYY 😭",
      "Nen sachipothaa mari 😠",
      "RIP ☠️",
      "nenu Dhayyam ni 👻",
      "please babyyyyyyyy 🙏",
      "Oseyyyyyy 🤬",
      "Muskoni Yes Nokkuuuu 😤",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="Bear kissing" />
          <div className="my-4 text-4xl font-bold">WOOOOOO!!! I love you Neyyy!! ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="Cute bear with roses"
          />
          <h1 className="my-4 text-4xl">Will you be my Wifeyyy..?</h1>
          <div className="flex items-center">
            <button
              className="mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
              style={{ fontSize: `${yesButtonSize}px` }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Proposal;
