

function getNextanimalNumber(animalNumber) {
  if (animalNumber < 3) {
    animalNumber = animalNumber + 1;
  } else {
    animalNumber = 1;
  }
  return animalNumber;
}


function getAnimalAttributes(animalNumber) {
  switch (animalNumber) {
  case 1:
    return ('Weak');
    break;
  case 2:
    return ('Stronk');
    break;
  case 3:
    return ('Tonk');
    break;
  default:
    return ('Error');
    break;
  }
}


function main() {

  var animalNumber = 1;
  var $animalImage = $('#animal-img1');
  var $animalAttributes = $('.animal-attributes');

  $('.animal-button').on('click', function() {

    animalNumber = getNextanimalNumber(animalNumber);
    imageFilename = "images/" + animalNumber + ".jpg";
    $animalImage.attr('src',imageFilename);
    $animalAttributes.text(getAnimalAttributes(animalNumber));
  });
  
}

$(document).ready(main);
