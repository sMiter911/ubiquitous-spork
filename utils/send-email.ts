import { FormData } from "../src/app/contact-form";

export function sendEmail(data: FormData) {
  const apiEndPoint = "/api/email";

  fetch(apiEndPoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
