
      function rollDice() {
        var randomNum = Math.floor(Math.random() * 6) + 1;
        
        if (randomNum == 1) {
          document.getElementById('result').innerText = "⚀";
        } else if (randomNum == 2) {
          document.getElementById('result').innerText = "⚁";
        } else if (randomNum == 3) {
          document.getElementById('result').innerText = "⚂";
        } else if (randomNum == 4) {
          document.getElementById('result').innerText = "⚃";
        } else if (randomNum == 5) {
          document.getElementById('result').innerText = "⚄";
        } else if (randomNum == 6) {
          document.getElementById('result').innerText = "⚅";
        }
      }
    