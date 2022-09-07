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
    this.description = description;
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


class newElement {
  table = `
  <table id="new-course" class="table-courses">
            <tr class="tr-course-title">
              <th class="th-course-title">
                <p>
                  Novo++
                </p>
              </th>
            </tr>
            <tr class="tr-course">
              <td class="td-course tag">
                <p>Nome do curso</p>
              </td>
              <td class="td-course"><input class="name" type="text"></td>
            </tr>
            <tr class="tr-course">
              <td class="td-course tag">
                <p>Status do curso</p>
              </td>
              <td class="td-course">
                <label>
                  <input name="status" class="status" type="radio">
                  <span class="status-active"></span>
                </label>
              </td>
            </tr>
            <tr class="tr-course">
              <td class="td-course tag">
                <p>N° da tarefa inicial</p>
              </td>
              <td class="td-course">
                <input class="initial-digit" type="number" min="0" value="0">
              </td>
            </tr>
            <tr class="tr-course">
              <td class="td-course tag">
                <p>Cores do curso</p>
              </td>
              <td class="td-course">
                <input class="course-colors primary" type="color">
                <input class="course-colors secondary" type="color">
              </td>
            </tr>
            <tr class="tr-course">
              <td class="td-course tag">
                <p>Imagens alternativas</p>
              </td>
              <td class="td-course"><input class="alt-images" type="text"></td>
            </tr>
            <tr class="tr-course tr-table-spots">
              <td class="td-course td-table-spots">
                <table class="table-spots">
                  <tr class="tr-spots-title">
                    <th class="th-spots-title">
                      <p>
                        Spots do curso de HTML & CSS
                      </p>
                    </th>
                  </tr>
                  <tr class="tr-spots">
                    <td class="td-spots tag">
                      <p>Tarefa</p>
                    </td>
                    <td class="td-spots tag">
                      <p>imagem</p>
                    </td>
                    <td class="td-spots tag">
                      <p>Link</p>
                    </td>
                    <td class="td-spots tag">
                      <p>Descrição</p>
                    </td>
                    <td class="td-spots tag">
                      <p>Alt (imagem)</p>
                    </td>
                  </tr>
                  <tr class="tr-spots task">
                    <td class="td-spots tag">
                      <p class="id">1</p>
                    </td>
                    <td class="td-spots input-image">
                      <input id="new-0" class="input-spot-image" type="checkbox">
                      <label for="new-0" class="label-spot-image"></label>
                    </td>
                    <td class="td-spots"><input class="link-new-task" type="text"></td>
                    <td class="td-spots"><input class="description-new-task" type="text"></td>
                    <td class="td-spots"><input class="alt-new-task" type="text"></td>
                  </tr>
                  
                  <tr class="tr-spots tr-spots-button">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="td-spots-button">
                      <p>+</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <div class="button-create-json">Atualizar</div>
  `;
  address = document.querySelector(".new-courses");

  insertTable(){
    this.address.insertAdjacentHTML('beforeend', this.table)
  }

  addRow(){
  }
}
