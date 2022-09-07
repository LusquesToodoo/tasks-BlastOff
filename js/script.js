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

  createTableRow() {
    const row = `<tr class="tr-spots task">
    <td class="td-spots tag">
      <p class="id">1</p>
    </td>
    <td class="td-spots input-image">
      <input id="img-new-task" class="input-spot-image" type="checkbox" value="${this.image}">
      <label for="img-new-task" class="label-spot-image"></label>
    </td>
    <td class="td-spots"><input id="link-new-task" type="text" value="${this.link}"></td>
    <td class="td-spots"><input id="description-new-task" type="text" value="${this.description}"></td>
    <td class="td-spots"><input id="alt-new-task" type="text" value="${this.alt}"></td>
  </tr>`;
    return row;
  }
}
