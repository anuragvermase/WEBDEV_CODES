let isUserLoggedIn=1;
let isUserPurchasedTheCourse=true;

isUserLoggedIn
     ?isUserPurchasedTheCourse
       ?console.log("Grant access to the course")
       :console.log("Access denied, Buy the course first")
     :console.log("Access denied, firstly logIn!");