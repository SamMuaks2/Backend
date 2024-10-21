import inquirer from "inquirer";
import fs from "fs";
import qr from "qr-image";

/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

inquirer
  .prompt([
    {
      type: "input",
      name: "URL",
      message: "What webpage would you want to convert to a URL",
    },
  ])

  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;

    const qrImage = qr.image(url, { type: "png" });
    qrImage.pipe(fs.createWriteStream("qr_code.png"));

    fs.writeFile("user_input.txt", url, (err) => {
      if (err) {
        console.error("Error writing to file", err);
      } else {
        console.log(
          "URL saved to user_input.txt and QR code saved as qr_code.png"
        );
      }
    });
  })

  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      ("Something went wrong");
    } else {
      // Something else went wrong
      ("We are working to fix this");
    }
  });
