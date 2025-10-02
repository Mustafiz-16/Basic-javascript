//array er moddhe object destructing

const data = [
  "Mustafiz",                  // 0 → one depth
  25,                          // 1
  "CSE",                       // 2
  [                             // 3 → Level 1 (two depth)
    "Comilla",                 // 3[0]
    [                          // 3[1] → Level 2 (three depth)
      "Baghichagaon",          // 3[1][0]
      14,                      // 3[1][1]
      [                        // 3[1][2] → Level 3 (array inside array)
        {                      // 3[1][2][0] → Level 4 (object)
          food: "Biriyani",
          drink: "Tea",
          dessert: "Lassi"
        }
      ]
    ]
  ]
];

// 1️⃣ One depth destructuring
const [fullname, age, subject] = data;
console.log("One Depth:", fullname, age, subject);

// 2️⃣ Two depth destructuring
const [ , , , [city] ] = data;
console.log("Two Depth:", city);

// 3️⃣ Three depth destructuring
const [ , , , [city2, [home, birth] ] ] = data;
console.log("Three Depth:", city2, home, birth);

// 4️⃣ Four depth destructuring (nested object)
const [ , , , [city3, [home3, birth3, [ { food, drink, dessert } ] ] ] ] = data;
console.log("Four Depth:", city3, home3, birth3, food, drink, dessert);
