

let backGroundColorChange = () => {
  let button = document.getElementById("button");

  button.addEventListener("click", () => {
    // Get the mood text (e.g., from the button's text)
    let mood = button.innerText.toLowerCase();

    switch (mood) {
      case "happy":
        document.body.style.backgroundColor = "#FFFF99"; // light yellow
        break;
      case "sad":
        document.body.style.backgroundColor = "#ADD8E6"; // light blue
        break;
      case "angry":
        document.body.style.backgroundColor = "#FF6961"; // red
        break;
      case "calm":
        document.body.style.backgroundColor = "#90EE90"; // light green
        break;
      default:
        document.body.style.backgroundColor = "#ffffff"; // fallback: white
    }
  });
};


/*


ADVANCED VERSION

slider wit color.
every time it hits a checkpoint.
it will gradientnize





*/
