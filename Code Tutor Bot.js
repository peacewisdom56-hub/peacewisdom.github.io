
    const inputField = document.getElementById("input");
    const sendButton = document.getElementById("send");
    const responseDiv = document.getElementById("bot-response");

    const faq = {
      "what is html": "HTML (HyperText Markup Language) is the standard language for creating web pages.",
      "what is css": "CSS (Cascading Style Sheets) is used to style and layout web pages — for example, change colors, fonts, and spacing.",
      "what is javascript": "JavaScript is a programming language used to make web pages interactive, such as handling clicks or fetching data.",
      "how to add css": "You can add CSS inline, inside a <style> tag in your HTML, or by linking an external .css file.",
      "how to add javascript": "Use the <script> tag in your HTML to write or link JavaScript code.",
      "how to make a button": "Use <button>Click me</button> in HTML. You can style it using CSS.",
      "how to make a div": "Use <div></div> to create a container/box in HTML for other elements.",
      "how to change color in css": "Use the 'color' property for text and 'background-color' for background. Example: body { background-color: blue; }",
      "how to use javascript function": "Define a function using function myFunc() { } and call it using myFunc();",
      "how to make alert in javascript": "Use alert('Hello!') to show a popup alert box.",
      "how to center text in css": "Use text-align: center; on the parent element.",
      "how to create form in html": "Use the <form> tag with inputs like <input type='text'> and a <button> to submit.",
      "how to link css to html": "Use <link rel=''stylesheet'' href=''style.css''> in the <head> of your HTML file.",
      "how to link javascript to html": "Use <script src=''main.js''></script> in the <body> of your HTML file.",
      "how to create array in javascript": "Use let arr = [1, 2, 3]; to create an array.",
      "how to loop in javascript": "Use a for loop: for(let i=0; i<10; i++) { console.log(i); }",
      "how to add website to html": "Use the element <a href=''example.com''>Click Me!</a>",
      "hello": "Hello! I'm your coding tutor. Ask me anything about HTML, CSS, or JavaScript.",
      "help": "Try asking: 'How to add CSS?', 'What is JavaScript?', or 'How to create a form in HTML?'",
      "hi": "hello what html coding can i help you with",
      "who are you":"I am Code Tutor Bot, but you can call me code bot",
      "who created you":"I was created by Osalumhense Righteousness a.k.a just_DMS (coder-R)",
      "what company were you created from":"The company that created me is called 'R star 'techinologia' '",
      "what rank are you in free fire":"I am in Grandmaster 5, if you doubt it, search for 'just_DMS' in free fire",
      "tell me an insult":"you can tell someone this insult if you are in an insultive situation that will make the person to shut up, here is the insult 'when i searched for the poorest man in the world in the i saw you and your family members posing'.",
      "what is free fire":"free fire is a 3d battle royale game, that consist of modes like 'BR(Battle Royale), CS(Clash Squad), Lone wolf, CFM(Craftland Maps)",
      "how to one tap in free fire":"to one tap on free fire you must be with the kind of one tap guns like Desert Eagle, Svd, Woodpeker, Sks, Ac80 and M14. then if you are with any of the gun mentioned just take you fire button right then up to meet the head of your opponent. You can also ask me for the best sensitivities for your iphone",
      "tell me any iphone sensitivity":" the best sensitivity for any iphone is 'General - 94, Red dot - 132, 2x Scope - 168, 4x Scope - 145, Sniper Scope - 114, free camera button - 200'",
      "hey":"hi what do you want me to do for you",
      "how to create animation with css":"instead of asking me how to create animation with css, just ask me animation with css i will see what i can do",
      "animation with css":"just do something like this: '/* Simple animation: a bouncing ball */.ball {width: 50px; height: 50px; background-color: blue; /* tomato */ border-radius: 50%; position: relative; animation: bounce 2s infinite ease-in-out; margin: 100px auto;} @keyframes bounce { 0%, 100% { top: 0;} 50% { top: 150px; } }' for a bouncing ball example in html do <div class=''ball><div>",
    };

    function getAnswer(question) {
      const lower = question.toLowerCase();
      for (let key in faq) {
        if (lower.includes(key)) {
          return faq[key];
        }
      }
      return "Please don't over estimate me, I don't know that, you can ask me other basic things that concerns html, css and javascript";
    }

    function showResponse(text) {
      responseDiv.textContent = text;
    }

    sendButton.addEventListener("click", () => {
      const userText = inputField.value.trim();
      if (userText) {
        const answer = getAnswer(userText);
        showResponse(answer);
        inputField.value = "";
      }
    });

    inputField.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        sendButton.click();
      }
    });
