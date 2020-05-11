const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


/////

let team = [];

// inquiere askinf for all the info about the employee

/////



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// asking for the Manager
inquirer
  .prompt([{
      type: "input",
      name: "name",
      message: "what's your name"
    },
    {
      type: "input",
      name: "id",
      message: "what's your id"
    },
    {
      type: "input",
      name: "email",
      message: "what's your email"
    },
    {
      type: "input",
      name: "office",
      message: "what's your office Number"
    }
  ])
  .then(res => {
    // Use user feedback for... whatever!!
    console.log(res)

    team.push(new Manager(res.name, res.id, res.email, res.office))
    console.log(team)
    menu()
    // inquiere menu asking add inter add eng build the html
  })
  .catch(error => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });


function addEng() {
// asking for the Engineer
inquirer
  .prompt([{
      type: "input",
      name: "name",
      message: "what's your name"
    },
    {
      type: "input",
      name: "id",
      message: "what's your id"
    },
    {
      type: "input",
      name: "email",
      message: "what's your email"
    },
    {
      type: "input",
      name: "github",
      message: "what's your Github"
    }
  ])
  .then(res => {
    // Use user feedback for... whatever!!
    console.log(res)

    team.push(new Engineer(res.name, res.id, res.email, res.github))
    console.log(team)
    menu()
    // inquiere menu asking add inter add eng build the html
  })
  .catch(error => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });


}


function addIntern() {

// asking for the Intern
inquirer
  .prompt([{
      type: "input",
      name: "name",
      message: "what's your name"
    },
    {
      type: "input",
      name: "id",
      message: "what's your id"
    },
    {
      type: "input",
      name: "email",
      message: "what's your email"
    },
    {
      type: "input",
      name: "school",
      message: "what's your schoolr"
    }
  ])
  .then(res => {
    // Use user feedback for... whatever!!
    console.log(res)

    team.push(new Intern(res.name, res.id, res.email, res.school))
    console.log(team)
    menu()
    // inquiere menu asking add inter add eng build the html
  })
  .catch(error => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });

}


function menu() {
  inquirer.prompt({
    type: "list",
    name: "option",
    message: "what do you want to do",
    choices: ["intern", "eng", "html"]
  }).then(res => {

    console.log(res)
    if(res.option === "intern"){
      addIntern()

    }else if(res.option === "eng"){

      addEng()
    }else{
      buildHTML()
    }

    // if else base on res.option call addIntern()  or addEng( or buildHTML()
  })

}


function buildHTML() {


  //  write a file with the return  render with array

  var html = render(team)
  fs.writeFileSync("./test.html", html)
  console.log("done")
}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```