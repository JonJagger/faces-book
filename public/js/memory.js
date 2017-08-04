$(document).ready(function() {

  let shuffle = function(array) {
    let counter = array.length;
    while (counter > 0) {
      let index = Math.floor(Math.random() * counter);
      counter--;
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
    return array;
  };

  let makeStudentImage = function(name) {
    return $('<img>', {
      'class':'student',
      'title':name,
      'src':`img/${name}.png`
     });
  };

  let studentNames = function() {
    let names = [
      'Akhil',
      'Akshaya',
      'Arun',
      'ArunKumar',
      'Ashwin',
      'Krishna',
      'Deekshita',
      'Divya',
      'Francis',
      'Gayathri',
      'Heamanth',
      'Madhu',
      'Manisha',
      'Karthick',
      'Mihir',
      'Murali',
      'Neeharika',
      'Prakash',
      'Prakhyat',
      'Sanjana',
      'Sankara',
      'Sariha',
      'Shravan',
      'Sindhura',
      'Srikar',
      'Surya',
      'Tharun',
      'Uma',
      'Vamshi',
      'Veena',
      'Vignesh',
      'Vinay'
    ];
    return shuffle(names);
  };

  for (let name of studentNames()) {
    $('students').append(makeStudentImage(name));
  }

  $('img.student').tooltip({
    position: {
      my: 'center bottom-20',
      at: 'center top',
      using: function(position,feedback) {
        $(this).css(position);
        $('<div>')
          .addClass('arrow')
          .addClass(feedback.vertical)
          .addClass(feedback.horizontal)
          .appendTo(this);
      }
    }
  });

});
