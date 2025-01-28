// Replace 'YourGirlfriendsName' with your girlfriend's name
const correctName = "K Lalmuanpuii";

function verifyName() {
  // Get the value of the input
  const nameInput = document.getElementById("nameInput").value.trim();

  // Get the error modal element and the error message
  const errorModal = document.getElementById("errorModal");
  const errorMessage = document.getElementById("errorMessage");
  const nameInputField = document.getElementById("nameInput");

  // Reset any previous error styling
  nameInputField.style.borderColor = ""; // Reset border color

  // Check if the name is empty
  if (nameInput === "") {
    errorMessage.textContent = "Please enter your name!";
    nameInputField.style.borderColor = "red"; // Highlight input field in red
    openErrorModal();
    return;
  }

  // Check if the name matches
  if (nameInput.toLowerCase() === correctName.toLowerCase()) {
    // Redirect to the next page
    window.location.href = "page2.html"; // Replace with your next page's filename
  } else {
    // Show an error message
    errorMessage.textContent = "Oops! That's not your real name, silly. Try again!";
    nameInputField.style.borderColor = "red"; // Highlight input field in red
    openErrorModal();
  }
}

// Function to open the error modal
function openErrorModal() {
  const errorModal = document.getElementById("errorModal");
  errorModal.style.display = "flex"; // Show the modal
}

// Function to close the error modal
function closeErrorModal() {
  const errorModal = document.getElementById("errorModal");
  errorModal.style.display = "none"; // Hide the modal
}


// Replace with the paths to your lovely images
const loadingMessages = [
  {
    text: "Checking if you're the love of my life...",
    image: "media'/d99f67ff-1ddd-48fb-9e8e-b07ad8d814e8.jpg",
  },
  {
    text: "Verifying your warm hugs and sweet Scent...",
    image: "media'/love-i-love-you.gif",
  },
  {
    text: "Scanning your beautiful smile and loving heart...",
    image: "media'/scanner-red-light-green-light.gif",
  },
  {
    text: "Successfully verified! You are indeed the Love of my life",
    image: "media'/I hate myself.jpg",
  }
];

function showLoadingPage() {
  const loadingPage = document.getElementById("loadingPage");
  const loadingText = document.getElementById("loadingText");
  const loadingImage = document.getElementById("loadingImage");

  // Show the loading page
  loadingPage.style.display = "flex";

  let currentStep = 0;

  // Cycle through messages and images
  const interval = setInterval(() => {
    if (currentStep < loadingMessages.length) {
      loadingText.textContent = loadingMessages[currentStep].text;
      loadingImage.src = loadingMessages[currentStep].image;
      currentStep++;
    } else {
      clearInterval(interval); // Stop cycling
      // Redirect to the next page after the final message
      window.location.href = "page2.html";
    }
  }, 3000); // Change message every 2 seconds
}

function verifyName() {
  const nameInput = document.getElementById("nameInput").value.trim();
  const correctName = "K Lalmuanpuii";

  if (nameInput.toLowerCase() === correctName.toLowerCase()) {
    showLoadingPage(); // Show loading page if the name is correct
  } else {
    openErrorModal(); // Show error modal if the name is incorrect
  }
}
