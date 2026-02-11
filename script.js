fetch("data.json")
  .then(response => response.json())
  .then(data => {

    const score = data.score;
    const rotation = (score / 100) * 180;

    document.getElementById("gaugeFill").style.transform =
      `rotate(${rotation}deg)`;

    document.getElementById("score").innerText = score;

    let label = "";

    if (score <= 25) label = "Extreme Fear";
    else if (score <= 45) label = "Fear";
    else if (score <= 55) label = "Neutral";
    else if (score <= 75) label = "Greed";
    else label = "Extreme Greed";

    document.getElementById("label").innerText = label;
  });

