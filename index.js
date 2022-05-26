const express = require("express")
const app = express()

app.get("/presidents", (req, res, next) => {
    const obj = {
        "name": "U.S. Presidents",
        "children": [
          {
            "name": "George Washington"
          },
          {
            "name": "Federalist",
            "children": [
              {
                "name": "John Adams"
              }
            ]
          },
          {
            "name": "Democratic-Republican",
            "children": [
              {
                "name": "Thomas Jefferson"
              },
              {
                "name": "James Madison"
              },
              {
                "name": "James Monroe"
              },
              {
                "name": "John Quincy Adams"
              }
            ]
          },
          {
            "name": "Democrat",
            "children": [
              {
                "name": "Andrew Jackson"
              },
              {
                "name": "Martin van Buren"
              },
              {
                "name": "James K. Polk"
              },
              {
                "name": "Franklin Pierce"
              },
              {
                "name": "James Buchanan"
              },
              {
                "name": "Grover Cleveland"
              },
              {
                "name": "Woodrow Wilson"
              },
              {
                "name": "Franklin Delano Roosevelt"
              },
              {
                "name": "Harry S Truman"
              },
              {
                "name": "John Fitzgerald Kennedy"
              },
              {
                "name": "Lyndon Baines Johnson"
              },
              {
                "name": "Jimmy Carter"
              },
              {
                "name": "Bill Clinton"
              },
              {
                "name": "Barack Obama"
              }
            ]
          },
          {
            "name": "Whig",
            "children": [
              {
                "name": "William H. Harrison"
              },
              {
                "name": "John Tyler"
              },
              {
                "name": "Zachary Taylor"
              },
              {
                "name": "Millard Fillmore"
              }
            ]
          },
          {
            "name": "Republican",
            "children": [
              {
                "name": "Abraham Lincoln"
              },
              {
                "name": "Ulysses S. Grant"
              },
              {
                "name": "Rutherford Hayes"
              },
              {
                "name": "James Garfield"
              },
              {
                "name": "Chester Arthur"
              },
              {
                "name": "Benjamin Harrison"
              },
              {
                "name": "William McKinley"
              },
              {
                "name": "Theodore Roosevelt"
              },
              {
                "name": "William Taft"
              },
              {
                "name": "Warren Harding"
              },
              {
                "name": "Calvin Coolidge"
              },
              {
                "name": "Herbert C. Hoover"
              },
              {
                "name": "Dwight David Eisenhower"
              },
              {
                "name": "Richard Milhous Nixon"
              },
              {
                "name": "Gerald R. Ford"
              },
              {
                "name": "Ronald Wilson Reagan"
              },
              {
                "name": "Bush Family",
                "children": [
                  {
                    "name": "George H. W. Bush"
                  },
                  {
                    "name": "George W. Bush"
                  }
                ]
              }
            ]
          },
          {
            "name": "National Union",
            "children": [
              {
                "name": "Andrew Johnson"
              }
            ]
          }
        ]
      };
    res.json(obj);
});

app.listen(8080, ()=> { console.log("Server started at 8080") })