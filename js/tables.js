let idCourses = 0;
let idRow = 0;
const buttonCreateJson = document.querySelector(".button-create-json");
const address = document.querySelector(".new-courses");

class CourseList {
  constructor(course, i) {
    this[i] = course;
  }
}
class Course {
  constructor(
    colorDark,
    colorLight,
    initialDigit,
    imgsAlternative,
    name,
    spots,
    status,
  ) {
    this.colorDark = colorDark;
    this.colorLight = colorLight;
    this.initialDigit = initialDigit;
    this.imgsAlternative = imgsAlternative;
    this.name = name;
    this.spots = spots;
    this.status = status;
  }

  addTable() {
    address.insertAdjacentHTML("beforeend", this.createTable());
    address.appendChild(buttonCreateJson);
    this.table = document.querySelector(`#course-${idCourses}`);
    idCourses++;
    this.insertEvents();
  }

  createTableRows() {
    let spotsHTML = "";
    this.spots.forEach((spot) => {
      spotsHTML += spot.createRow();
    });
    return spotsHTML;
  }

  createTable() {
    const table = `
    <table id="course-${idCourses}" class="table-courses">
      <tr class="tr-course-title">
        <th class="th-course-title">
          <p>
            ${this.name}
          </p>
        </th>
      </tr>
      <tr class="tr-course">
        <td class="td-course tag">
          <p>Nome do curso</p>
        </td>
        <td class="td-course"><input class="name" type="text"
        value="${this.name}"></td>
      </tr>
      <tr class="tr-course">
        <td class="td-course tag">
          <p>Status do curso</p>
        </td>
        <td class="td-course">
          <label>
            <input name="status" class="status" type="radio"
            ${this.status ? "checked" : ""} >
            <span class="status-active"></span>
          </label>
        </td>
      </tr>
      <tr class="tr-course">
        <td class="td-course tag">
          <p>N° da tarefa inicial</p>
        </td>
        <td class="td-course">
          <input class="initial-digit" type="number" min="0"
          value="${this.initialDigit}">
        </td>
      </tr>
      <tr class="tr-course">
        <td class="td-course tag">
          <p>Cores do curso</p>
        </td>
        <td class="td-course">
          <input class="course-colors primary" type="text"
          value="${this.colorDark}">
          <input class="course-colors secondary" type="text"
          value="${this.colorLight}">
        </td>
      </tr>
      <tr class="tr-course">
        <td class="td-course tag">
          <p>Imagens alternativas</p>
        </td>
        <td class="td-course"><input class="alt-images" type="text"
        value="${this.imgsAlternative}"></td>
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
          ${this.createTableRows()}
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
    `;
    return table;
  }

  insertEvents() {
    this.addSpotButton = this.table.querySelector(".td-spots-button");
    this.addSpotButton.addEventListener("click", () => {
      const row = new Spot();
      const parentNode = this.addSpotButton.parentNode;
      const tbody = parentNode.parentNode;

      tbody.insertAdjacentHTML("beforeend", row.createRow());
      tbody.appendChild(parentNode);
    });
  }

  createNewJson(table) {
    const allSpots = () => {
      const arraySpots = [];
      const spots = table.querySelectorAll(".tr-spots.task");
      spots.forEach((tr) => {
        const objSpot = new Spot();
        objSpot.createNewJson(tr);
        objSpot.link ? arraySpots.push(objSpot) : "";
      });
      return arraySpots;
    };
    const cell = (selector) => {
      return table.querySelector(selector);
    };
    this.colorDark = cell(".course-colors.primary").value;
    this.colorLight = cell(".course-colors.secondary").value;
    this.initialDigit = cell(".initial-digit").value;
    this.imgsAlternative = cell(".alt-images").value;
    this.name = cell(".name").value;
    this.spots = allSpots();
    this.status = cell(".status").checked;
  }
}
class Spot {
  constructor(alt, description, image, link) {
    this.alt = alt;
    this.description = description;
    this.image = image;
    this.link = link;
  }

  createSpot() {
    const spot = `<li class="course-list-item">
    <figure class="course-image">
      <div class="course-links active">
        <h2 class="course-links-title">Link(s)</h2>
        <ul class="course-links-list">
        <li class="course-links-list-item"><a href="${this.link}">Tarefa n° | Original</a></li>
        </ul>
      </div>
      <img src="image/courser-img.png" alt="${this.alt}">
    </figure>
    <div class="course-info">
      <h2 class="course-title">Tarefa 1</h2>
      <p class="course-description">
        ${this.description}
      </p>
    </div>
  </li>`;
    return spot;
  }

  createRow() {
    const row = `<tr class="tr-spots task">
    <td class="td-spots tag">
      <p class="id">${idRow + 1}</p>
    </td>
    <td class="td-spots input-image">
      <input id="${"img-" + idRow}"
      class="input-spot-image" type="checkbox"
      ${this.image ? "checked" : ""}>
      <label for="${"img-" + idRow}" class="label-spot-image"></label>
    </td>
    <td class="td-spots">
      <input class="link-new-task" type="text"
      value="${this.link || ""}">
    </td>
    <td class="td-spots">
      <input class="description-new-task" type="text"
      value="${this.description || ""}">
    </td>
    <td class="td-spots">
      <input class="alt-new-task" type="text"
      value="${this.alt || ""}">
    </td>
  </tr>`;
    idRow++;
    return row;
  }

  createNewJson(tableRow) {
    const cell = (selector) => {
      return tableRow.querySelector(selector);
    };
    this.alt = cell(".alt-new-task").value;
    this.description = cell(".description-new-task").value;
    this.image = cell("[id^='img-']").checked;
    this.link = cell(".link-new-task").value;
    return this;
  }
}

function updateArchiveJson(newJson) {
  const data = newJson;
  console.log(JSON.stringify(data));
}

const spotTableNewCourse = [new Spot()];
const tableNewCourse = new Course(
  "#000",
  "#fff",
  1,
  "",
  "Novo ++",
  spotTableNewCourse,
  false,
);

tableNewCourse.addTable();

buttonCreateJson.addEventListener("click", () => {
  const newJson = [];
  const allTables = document.querySelectorAll("table[id^='course-']");
  allTables.forEach((table) => {
    const objCourse = new Course();
    objCourse.createNewJson(table);
    objCourse.spots[0] ? newJson.push(objCourse) : "";
  });
  updateArchiveJson(newJson);
});
