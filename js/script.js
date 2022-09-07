function setTableNewCourses(){
  const tableNewCourse = `
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
  const sectionNewCourse = document.querySelector('.new-courses')
  sectionNewCourse.insertAdjacentHTML('beforeend', tableNewCourse)
}
setTableNewCourses()
const newRowButtons = document.querySelectorAll(".td-spots-button");


newRowButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const row = button.parentNode;
    const tbody = button.parentNode.parentNode;
    let id = tbody.querySelectorAll(".tr-spots.task");
    id = +id[id.length - 1].querySelector(".id").innerText;
    const rowSpot = `
    <tr class="tr-spots task">
    <td class="td-spots tag">
      <p>${id + 1}</p>
    </td>
    <td class="td-spots input-image">
      <input id="img-new-task ${
        id + 1
      }" class="input-spot-image" type="checkbox">
      <label for="img-new-task" class="label-spot-image"></label>
    </td>
    <td class="td-spots"><input id="link-new-task" type="text"></td>
    <td class="td-spots"><input id="description-new-task" type="text"></td>
    <td class="td-spots"><input id="alt-new-task" type="text"></td>
    </tr>
    `;
    tbody.removeChild(row)
    

    tbody.insertAdjacentHTML("beforeend", rowSpot);
  });
});
