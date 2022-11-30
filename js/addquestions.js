function submitForm(event) {
  event.preventDefault();
}

function getMyData() {
  const question = document.getElementById("q").value;
  const a = document.getElementById("a").value;
  const b = document.getElementById("b").value;
  const c = document.getElementById("c").value;
  const d = document.getElementById("d").value;
  const correctAnswer = document.getElementById("ca").value;
  const newData = { question, answers: { a, b, c, d }, correctAnswer };
  if (
    question != "" &&
    a != "" &&
    b != "" &&
    c != "" &&
    d != "" &&
    correctAnswer != ""
  ) {
    myQuestions.push(newData);
    document.getElementById("qCount").innerHTML = myQuestions.length;
    document.getElementById("addQuestion").reset();
  }
  return myQuestions;
}

function saveMyFile() {
  localStorage.setItem("myQuestions", JSON.stringify(myQuestions));
  location.replace("index.html"); /*("quiz.html")*/
}
const addQuestionButton = document.getElementById("submitQuestion");
const saveButton = document.getElementById("saveMyquestions");
const myQuestions = [];
const newObject = localStorage.getItem("myQuestions");
let dataStored = JSON.parse(newObject);
if (dataStored) {
  for (i = 0; i < dataStored.length; i++) {
    myQuestions.push(dataStored[i]);
  }
} else {
  for (i = 0; i < data.length; i++) {
    myQuestions.push(data[i]);
  }
}

document.getElementById("qCount").innerHTML = myQuestions.length;
addQuestionButton.addEventListener("click", getMyData);
saveButton.addEventListener("click", saveMyFile);
