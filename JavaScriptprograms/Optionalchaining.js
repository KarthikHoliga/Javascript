// A typical API response — sometimes the "employer" field is missing
let apiResponse1 = {
  name: "Karthik",
  employer: {
    company: "Indium Software",
    location: "Bengaluru"
  }
};

let apiResponse2 = {
  name: "Karthik"
  // no "employer" field at all this time — maybe user hasn't added a job yet
};

console.log(apiResponse1.employer?.company); // "Indium Software"
console.log(apiResponse2.employer?.company); // undefined — no crash!