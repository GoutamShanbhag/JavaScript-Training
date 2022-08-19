const data = [
  {
    backgroundColor: "black",
    textColor: "blue",
    name: "Rachel",
    imageSrc:
      "https://img.freepik.com/premium-vector/woman-profile-cartoon_18591-58480.jpg",
    age: 22,
    bloodGroup: "A+",
    aboutMe: "I am a disigner",
    buttonColor: "azure",
  },
  {
    backgroundColor: "orange",
    textColor: "green",
    name: "Ross",
    imageSrc:
      "https://thumbs.dreamstime.com/b/man-profile-cartoon-smiling-round-icon-vector-illustration-graphic-design-135443422.jpg",
    age: 25,
    bloodGroup: "O-",
    aboutMe: "I am a Docter",
    buttonColor: "lightpink",
  },
  {
    backgroundColor: "lightblue",
    textColor: "yellow",
    name: "Chandler",
    imageSrc:
      "https://i.pinimg.com/originals/63/a5/e8/63a5e8ee8cdcfab2f952bcd46a73e5c4.jpg",
    age: 29,
    bloodGroup: "O+",
    aboutMe: "I am a number guy",
    buttonColor: "lightblue",
  },
  {
    backgroundColor: "lightgreen",
    textColor: "darkgreen",
    name: "Joey",
    imageSrc:
      "https://cdn5.vectorstock.com/i/1000x1000/00/69/man-profile-cartoon-vector-19490069.jpg",
    age: 20,
    bloodGroup: "B+",
    aboutMe: "I am an actor",
    buttonColor: "lightyellow",
  },
  {
    backgroundColor: "yellow",
    textColor: "Blue",
    name: "Monica",
    imageSrc:
      "https://static.vecteezy.com/system/resources/thumbnails/005/610/604/small_2x/cute-boy-wearing-hoodie-with-thumb-up-cartoon-illustration-vector.jpg",
    age: 30,
    bloodGroup: "AB+",
    aboutMe: "I am a cook",
    buttonColor: "orange",
  },
];

let count = 0;
let bodyStyle = document.body.style;
let allLables = document.getElementsByTagName("label");
let about = document.getElementById("about");
let nameLabel = document.getElementById("name");
let ageLabel = document.getElementById("age");
let bloodLabel = document.getElementById("blood");
let image = document.getElementById("image");
let changeButton = document.getElementById("button");

const change = () => {
  // Changes the background
  bodyStyle.backgroundColor = data[count].backgroundColor;

  // Changes the text color
  for (let label of allLables) {
    label.style.color = data[count].textColor;
  }

  // Changes the text color and the value of about me.
  about.style.color = data[count].textColor;
  about.innerText = `About me : ${data[count].aboutMe}`;

  // Changes the value of Name Label
  nameLabel.innerText = `Name : ${data[count].name}`;

  // Changes the value of age Lable
  ageLabel.innerText = `Age : ${data[count].age}`;

  // Changes the value of Blood group
  bloodLabel.innerText = `Blood group: ${data[count].bloodGroup}`;

  // Changes the image source
  image.src = data[count].imageSrc;

  //Change the button color
  changeButton.style.color = data[count].textColor;
  changeButton.style.backgroundColor = data[count].buttonColor;

  //Logic to change data on Click
  if (count < data.length - 1) {
    count++;
  } else {
    count = 0;
  }
};
