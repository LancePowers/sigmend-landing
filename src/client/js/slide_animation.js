var $title = $(`
  <h2>This is a title for the people below from the js file</h2>
  <hr>
  `)
$("#people-title").append($title);

for (var i = 0; i < 10; i++) {
  var $person = $(
    `<figure class="person col-xs-1">
      <img src="./img/person.svg" />
    </figure>`
  )
  $("#people-container").append($person);
}
