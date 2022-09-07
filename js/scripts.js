if (undefined) {
  const fs = require("fs");
  const data = "Testando a criação de arquivos";
  fs.writeFile("arquivo.json", JSON.stringify(obj), (err) => {
    if (err) throw err;
    console.log("O arquivo foi criado!");
  });
}

let newJSON = "";
const buttonCreatejson = document.querySelector(".button-create-json");
const coursesAlredyCreated = document.querySelectorAll('[id^="course-"]');
const newCourse = document.querySelector("#new-course");

class Course {
  constructor(
    color_dark,
    color_light,
    digit_initial,
    images_alternative,
    name,
    spots,
    status,
  ) {
    this.color_dark = color_dark;
    this.color_light - color_light;
    this.digit_initial = digit_initial;
    this.images_alternative = images_alternative;
    this.name = name;
    this.spots = spots;
    this.status = status;
  }
}

class Spot {
  constructor(alt, description, image, link) {
    this.alt = alt;
    this.description;
    this.image = image;
    this.link = link;
  }
}

function createJson() {
  if (!!coursesAlredyCreated) {
    coursesAlredyCreated.forEach((course) => {
      console.log(course);
    });
  }

  const colorDark = newCourse.querySelector(".course-colors.primary").value;
  const colorLight = newCourse.querySelector(".course-colors.secondary").value;
  const digitInitial = newCourse.querySelector("#initial-digit").value;
  const imagesAlternative = newCourse.querySelector(".alt-images").value;
  const name = newCourse.querySelector(".name").value;
  const status = newCourse.querySelector(".status").value;

  const spotsArray = newCourse.querySelectorAll(".tr-spots.task");
  const spotsElements = [];
  spotsArray.forEach((spot) => {
    const hasImage = spot.querySelector("#img-new-task").checked;
    const link = spot.querySelector("#link-new-task").value;
    const description = spot.querySelector("#description-new-task").value;
    const altImage = spot.querySelector("#alt-new-task").value;
    spotsElements.push(new Spot(altImage, description, hasImage, link));
  });

  const course = new Course(
    colorDark,
    colorLight,
    digitInitial,
    imagesAlternative,
    name,
    spotsElements,
    status,
  );
  console.log(course);
}

buttonCreatejson.addEventListener("click", createJson);
