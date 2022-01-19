let flights = [
  {
    ID: 00,
    Departure: "Bilbao",
    Destiny: "Barcelona",
    Price: 1600,
    Scale: "yes",
  },
  {
    ID: 01,
    Departure: "New York",
    Destiny: "Barcelona",
    Price: 700,
    Scale: "no",
  },
  {
    ID: 02,
    Departure: "Los Angeles",
    Destiny: "Madrid",
    Price: 1100,
    Scale: "yes",
  },
  { ID: 03, Departure: "Paris", Destiny: "Barcelona", Price: 210, Scale: "no" },
  { ID: 04, Departure: "Roma", Destiny: "Barcelona", Price: 150, Scale: "no" },
  { ID: 05, Departure: "London", Destiny: "Madrid", Price: 200, Scale: "no" },
  { ID: 06, Departure: "Madrid", Destiny: "Barcelona", Price: 90, Scale: "no" },
  { ID: 07, Departure: "Tokyo", Destiny: "Madrid", Price: 1500, Scale: "yes" },
  {
    ID: 08,
    Departure: "Shangai",
    Destiny: "Barcelona",
    Price: 800,
    Scale: "yes",
  },
  {
    ID: 09,
    Departure: "Sydney",
    Destiny: "Barcelona",
    Price: 150,
    Scale: "yes",
  },
  { ID: 10, Departure: "Tel-Aviv", Destiny: "Madrid", Price: 150, Scale: "no" },
];
//Variables for bubbleSort
let clean = false;
let unsorted = true;
//Function Variables
let media = 0;
let numberSca = 0;
let arrLastF = [];
//Variables for menu navigation
let userType = "";
let actionAdmin = "";
let actionUser = "";
let filterType = "";
//New object to store the new flight

//Functions that return key values to print

let returnMedia = () => {
  for (let i = 0; i < flights.length; i++) {
    media = media + flights[i].Price;
  }
  return media / flights.length;
};
let returnNumScale = () => {
  for (let i = 0; i < flights.length; i++) {
    if (flights[i].Scale === "yes") {
      numberSca++;
    }
  }
  return numberSca;
};
let returnLastFlights = () => {
  for (let i = 0; i < 5; i++) {
    arrLastF.push(flights[flights.length - i - 1].Departure);
  }
  return arrLastF;
};
//More functions to the Airlines Pro
let addArrFlights = () => {
  let newFlight = {};
  newFlight.ID = parseFloat(window.prompt("What's the ID?"));
  newFlight.Departure = window.prompt("What's the departure?");
  newFlight.Destiny = window.prompt("What's the destiny?");
  newFlight.Price = parseFloat(window.prompt("What's the Price?"));
  newFlight.Scale = window.prompt(
    "Does this flight needs to scale?(yes or no)"
  );
  flights.push(newFlight);
};
//Menu functions
function showAdmin() {
  actionAdmin = window
    .prompt(
      `Now please type the action you are going to do:\n 
                                    - Add flights\n 
                                    - Delete flights\n 
                                    - Return\n`
    )
    .toLowerCase();
  //Pick your action
  switch (actionAdmin) {
    case "add flights":
      if (flights.length == 15) {
        console.log(
          "Oh no we have reached the maximum number of flights allowed "
        );
        showAdmin();
      } else {
        addArrFlights();
        console.table(flights);
        showAdmin();
      }
      break;
    case "delete flights":
      let deleteID = window.prompt(
        "Please introduce the id of the flight you want to delete"
      );
      deleteFlights(parseFloat(deleteID));
      console.table(flights);
      showAdmin();
      break;
    case "return":
      userMenu();
      break;
    default:
      console.log(`Please introduce a valid action`);
      showAdmin();
  }
}
function showUser() {
  actionUser = window
    .prompt(
      `Now please type the action you are going to do:\n 
                                        - Filter by price\n 
                                        - Return\n`
    )
    .toLowerCase();
  //Pick your action
  switch (actionUser) {
    case "filter by price":
      filterTime();
      showUser();
      break;
    case "return":
      userMenu();
      break;
    default:
      console.log("Please introduce a valid action");
      showUser();
  }
}
function filterTime() {
  filterType = window
    .prompt(
      `Now please type the filter you want to apply:\n 
                                                - High to low
                                                - Low to high
                                                - Return\n`
    )
    .toLowerCase();
  switch (filterType) {
    case "high to low":
      bubbleSort(flights);
      bubbleSort(flights);
      flights.reverse();
      console.table(flights);
      break;
    case "low to high":
      bubbleSort(flights);
      bubbleSort(flights);
      console.table(flights);
      break;
    case "return":
      showUser();
      break;
    default:
      console.log("Please introduce a valid filter");
      filterTime();
  }
}

let deleteFlights = (input) => {
  for (let i = 0; i < flights.length; i++) {
    if (input == flights[i].ID) {
      flights.splice(i, 1);
    }
  }
};
//The greetings
let userName = window.prompt(
  "Welcome to ISDI Airlines Pro\n\nIntroduce your name to see the fligts"
);

console.log(`We are happy to see you agan mr: ${userName} \n Fligh Schedules`);
printFlights();
console.log("hi");
console.log(
  `This is the media cost of a flight ticket ${returnMedia().toFixed(2)}`
);
console.log(`This is the number of fligths with an Scale ${returnNumScale()}`);
console.log(
  `This are the destinies of the last 5 flights ${returnLastFlights()}.`
);
console.log(`We hope you come back soon :) `);

userMenu();

//<<--------------------Admin User decision tree-------------------------------->>
function userMenu() {
  userType = window
    .prompt(
      `Who's using this menu?\n 
                                    - Normal user\n 
                                    - Admin\n 
                                    - Exit\n`
    )
    .toLowerCase();
  //Here we use the swicth to find the user type
  switch (userType) {
    //If it's an admin
    case "admin":
      showAdmin();
      break;
    //If it's a user
    case "normal user":
      showUser();
      break;
    case "exit":
      window.alert("cya user");
      break;
    default:
      console.log("Please introduce a valid type of user... user");
      userMenu();
  }
}
//------------------The forbidden BubbleSort Algorithm ----------------

//This is a recursive function expression to order the prices inside they flight array
function bubbleSort(arrPrices) {
  //This it's my base case , If I loop through the array and everything its in order the clean variable it's gonna be true
  if (clean) {
    clean = false;
    unsorted = true;
    return arrPrices;
    //Else I need to repeat the process until I reach the base case
  } else {
    //With this function I loop through the array
    for (let i = 0; i < arrPrices.length - 1; i++) {
      //Here if I find a price smaller than the one before i swap them
      if (arrPrices[i + 1].Price < arrPrices[i].Price) {
        [arrPrices[i + 1], arrPrices[i]] = [arrPrices[i], arrPrices[i + 1]];
        //This auxiliar variable keeps track of this If statement, if the condition is met it's
        //because the array isn't in order yet
        unsorted = true;
      }
    }
    if (unsorted) {
      //I reset the aux variable to loop through again
      unsorted = false;
      return bubbleSort(arrPrices);
    } else {
      clean = true;
    }
  }
}
//Even more functions

function printFlights() {
  for (let i = 0; i < flights.length; i++) {
    console.log(
      `The flight with departure: ${flights[i].Departure} and destiny: ${
        flights[i].Destiny
      } has a cost of ${flights[i].Price} euros and ${
        flights[i].Scale === "yes" ? "" : "doesn't "
      }realices a scale`
    );
  }
}
