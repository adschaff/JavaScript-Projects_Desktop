function displayType(character) {
  var characterType = character.getAttribute("data-character-type");
  alert(characterType + " is from " + character.innerHTML + " in that part of the world! ");
}