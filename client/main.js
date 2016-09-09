var templates = {};
var questionNumber = 0;
$(document).ready(function(){
  templates.questionSingle = Handlebars.compile($("#template-question-single").html());
  templates.questionMultiple = Handlebars.compile($("#template-question-multiple").html());
  templates.questionFill = Handlebars.compile($("#template-question-fill").html());
  templates.test = Handlebars.compile($("#template-all").html());

  Handlebars.registerHelper('listQuestions', function(questions) {
    console.log("yooo");
    var result= "";
    for(var i=0;i<questions.length;i++){
      questionNumber++;
      questions[i].number = questionNumber;
      switch(questions[i].type){
        case "single":
          result += templates.questionSingle(questions[i]);
          break;
        case "multiple":
          result += templates.questionMultiple(questions[i]);
          break;
        case "fill":
          result += templates.questionFill(questions[i]);
          break;
        case "default":
          break;
      }
    }

    return new Handlebars.SafeString(result);
  });

  Handlebars.registerHelper("inc", function(value, options)
  {
      return parseInt(value) + 1;
  });

  $.ajax({
    url: "testJSON.json",
    dataType: "json"
  }).done(function(data){
    $("#content").html(templates.test(data));
  }).fail(function(err){
    console.log(err);
  });

  $("#content").on('submit', function(e){
    e.preventDefault();
    
    $.ajax({
      url   : "http://example.com",
      data  : $("#content").serialize(),
      type  : "post"
    }).done(function(data){
      console.log(data);
    }).fail(function(err){
      console.log(err);
    })
  })
});
