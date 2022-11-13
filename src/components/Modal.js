import React from "react";

// Logos

import metamasklg from "../assets/logos/logo-metamask.png";
import walletlg from "../assets/logos/logo-wallet.png";

const Modal = () => {
  return (
    <div>
      <header>
        <h2>Connect Wallet</h2>
        <button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="#1A1A1A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#1A1A1A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </header>
      <div>
        <p>Choose your preferred wallet:</p>
        <button>
          <span>
            <img src={metamasklg} alt="metamask logo" />
          </span>
          Metamask
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.3838 10.0001C14.3838 10.2689 14.2812 10.5377 14.0763 10.7427L7.62657 17.1923C7.21628 17.6026 6.55108 17.6026 6.14096 17.1923C5.73084 16.7822 5.73084 16.1172 6.14096 15.7068L11.8481 10.0001L6.14116 4.2933C5.73104 3.88301 5.73104 3.21801 6.14116 2.80792C6.55128 2.39744 7.21648 2.39744 7.62677 2.80792L14.0765 9.2575C14.2814 9.46256 14.3838 9.73135 14.3838 10.0001Z"
                fill="#959DA6"
              />
            </svg>
          </span>
        </button>

        <button>
          <span>
            <img src={walletlg} alt="metamask logo" />
          </span>
          Metamask
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.3838 10.0001C14.3838 10.2689 14.2812 10.5377 14.0763 10.7427L7.62657 17.1923C7.21628 17.6026 6.55108 17.6026 6.14096 17.1923C5.73084 16.7822 5.73084 16.1172 6.14096 15.7068L11.8481 10.0001L6.14116 4.2933C5.73104 3.88301 5.73104 3.21801 6.14116 2.80792C6.55128 2.39744 7.21648 2.39744 7.62677 2.80792L14.0765 9.2575C14.2814 9.46256 14.3838 9.73135 14.3838 10.0001Z"
                fill="#959DA6"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Modal;
