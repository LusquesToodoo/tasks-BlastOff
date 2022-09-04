if (undefined) { 
  const fs = require("fs");
  const data = "Testando a criação de arquivos";
  fs.writeFile("arquivo.json", JSON.stringify(obj), (err) => {
    if (err) throw err;
    console.log("O arquivo foi criado!");
  });
}

class Curso {
  constructor(color_dark, color_light, digit_initial, images_alternative, name, spots, status) {
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
  constructor(alt, description, image, link){
    this.alt = alt;
    this.description;
    this.image = image;
    this.link = link;
  }
}
