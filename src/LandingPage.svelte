<script>
  import { onMount } from 'svelte';

  function loadScript(url, cb) {
    const js = document.createElement("script");
    js.src = url;
    document.head.appendChild(js);
    js.onload = cb;
  }

  let joinBeta;

  onMount(() => {
    loadScript("https://embed.typeform.com/embed.js", () => {
      joinBeta = () => {
        window.typeformEmbed.makePopup(
          "https://dzkr4d0zdua.typeform.com/to/C9O8STRt",
          {
            mode: "popup",
            autoClose: 5000,
            hideHeaders: true,
            hideFooters: true
          }
        ).open();
      };
    });
  });
  </script>

<main>
  <head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600&display=swap">
  </head>
    
  <img class="logo" src="/assets/images/svg/logo.svg" alt="Qi Protocol" id="logo">
  
  <h1 class="thin-space">Optimized User Experience Starts</h1>
  <h1>Frictionless Transactions</h1>

  <p><strong>At our core, we revolutionize the landscape of on-chain transactions. Our mission is to address the friction surrounding transactions by fostering the equitable distribution of MEV and delivering better execution quality.</strong></p>

  <button class="custom-button" on:click={joinBeta}>Join Beta</button>
  
  <footer>
    <div class="social-icons">
      <a href="https://twitter.com/qi_protocol_" target="_blank">
        <img src="/assets/images/svg/twitter.svg" alt="Twitter Logo">
      </a>
      <a href="https://discord.com/invite/your_invite_link" target="_blank" hidden="true">
        <img src="/assets/images/svg/discord.svg" alt="Discord Logo">
      </a>
      <a href="https://telegram.org/your_invite_link" target="_blank" hidden="true">
        <img src="/assets/images/svg/telegram.svg" alt="Telegram Logo">
      </a>
      <a href="https://github.com/qi-protocol" target="_blank">
        <img src="/assets/images/svg/github.svg" alt="Github Logo">
      </a>
    </div>
    <div class="copywrite">
      &copy; 2023 Qi Protocol
    </div>
  </footer>
</main>

<style>
  :root {
    --color-a: #DC5B2A;
    --color-b: #000000;
  }

  #logo {
    height: 38px;
  }

  main {
    font-family: 'Raleway', sans-serif;
    color: var(--color-b);
    padding: 50px;
  }
  
  h1 {
    font-weight: 600;
    font-size: 2em;
    color: var(--color-a);
  }
  
  strong {
    font-weight: 600;
    font-size: 1em;
    color: var(--color-b);
  }
  
  p {
    font-weight: 400;
    font-size: 1em;
    color: var(--color-b);
  }

  .thin-space {
    margin-bottom: -0.6em;
  }

  button {
    font-weight: 600;
    text-transform: uppercase;
    background-color: var(--color-a);
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  /* Footer styling */
  footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    margin-right: 0.5in;
  }


  .social-icons img {
    height: 20px;
    margin-right: 5px;
    transition: transform 0.3s ease-in-out;
  }

  .social-icons img:hover {
    transform: scale(1.15);
  }

  .custom-button {
    color: var(--color-a);
    background-color: transparent;
    border: 1px solid var(--color-a);
    border-radius: 0;
    font-weight: 600;
    transition: border-width 0.3s;
    width: 200px;
    box-sizing: border-box;
  }

  .custom-button:hover {
    border-width: 3px;
  }

  /* Media query for mobile screens */
  @media (max-width: 600px) {
    footer {
      flex-direction: column;
      align-items: center;
      gap: 0;
    }

    .copywrite {
      margin-top: 10px;
    }

    .custom-button {
      align-self: center;
    }

    h1 {
      text-align: center;
    }

    .logo {
      align-self: center;
    }

    footer {
      align-self: center;
      margin-right: 0;
    }

    .social-icons {
      display: flex;
      justify-content: center;
      gap: 10px;
      flex-wrap: wrap;
      width: 100%;
      margin-top: 20px;
    }

    .copywrite {
      margin-top: 20px;
    }

    main {
      text-align: center;
    }
  }

  /* Media query for desktop screens */
  @media screen and (min-width: 768px) {

    main {
      height: 100%;
    }

    p {
      width: 60%;
    }

    .copywrite {
      font-size: 0.7em;
    }

    footer {
      position: fixed;
      right: 50px;
      bottom: 50px;
    }

    .logo {
      align-self: start;
    }
  }
</style>
  