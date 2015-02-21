    Parse.initialize("c4ROn07SjB4D1V0K7OewbynNO1UwfFh9xlDF0ias", "eRiXezPgvgNnz2kp17SrOY9u6kx4cR7xBNgVIDgR");

    
    var Student = Parse.Object.extend("Student");
    var Event   = Parse.Object.extend("Event");
    var SignUp  = Parse.Object.extend("SignUp");
    var Team    = Parse.Object.extend("Team");


   // var 

   /* var testObject = new TestObject();
      testObject.save({foo: "bar"}, {
      success: function(object) {
        $(".success").show();
      },
      error: function(model, error) {
        $(".error").show();
      }
    });*/


 //User Functionality
      // Editing and deleting users only takes one command using Parse

    function addUser(name, password, email, role){
      var user = new Parse.User();
      user.set("username", name);
      user.set("password", password);
      user.set("email", email);
      user.set("role", role);

      user.signUp(null, {
          success: function(user) {
                  //INSERT SIGN-UP SUCCESS FUNCTIONALITY
      },
          error: function(user, error) {
        // Show the error message somewhere and let the user try again.
            alert("Error: " + error.code + " " + error.message);
          }
      });

    }

    function logIn(name, password){
          Parse.User.logIn(name, password, {
            success: function(user) {
              // Do stuff after successful login.
            },
            error: function(user, error) {
              // The login failed. Check error to see why.
            }
        });
    }


//Student Functionality
    function addStudentToEvent(student, event){
        var signUp = new SignUp();
         signUp.save({studentId: student.get("objectId"), eventId: event.get("objectId")}, {
            success: function(object) {
              //insert success functionality
            },
            error: function(model, error) {
              //insert error functionality 
            }
    });

    }

  function getStudents(){
      var returned;
      var query = new Parse.Query("Student");
      query.find({
           success: function(result) {
              returned = result;
           },
           error: function(error) {
              returned = error;
           }
        });
        return returned;

    } 


  

//Scoring Functionality 

    function eventWon(team, points){
          var score = team.get("score");
          score+= points;
          team.set("score", points);
          team.save();
    }






