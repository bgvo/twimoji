
let isColonKeyPressed = false;
let colonKeyPressTimeout;

document.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {
  console.log(isColonKeyPressed);
  if (event.key === ':') {
    if (isColonKeyPressed) {
      clearTimeout(colonKeyPressTimeout);
      isColonKeyPressed = false;

      document.querySelector('[aria-label="Add emoji"]').click();

      twitBox = document.querySelector('[data-testid="tweetTextarea_0"]')
      // content = twitBox.textContent;
      // // console.log("content: " + content);
      // replacedContent = content.replace(':', '');
      // // console.log("replacedContent: " + replacedContent);
      // twitBox.textContent = replacedContent;
      // console.log("twitBox.textContent: " + twitBox.textContent);
    } else {
      isColonKeyPressed = true;

      colonKeyPressTimeout = setTimeout(() => {
        isColonKeyPressed = false;
      }, 500); 
    }
  }
}