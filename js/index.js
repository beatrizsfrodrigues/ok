let imgs = document.querySelectorAll(".projects-image");
let title = document.getElementById("mTitle");
let body = document.getElementById("mBody");
let gif = document.getElementById("gifProject");
let description = document.getElementById("description");
let string = "";
imgs = Array.from(imgs);
imgs.forEach((img) => {
  img.addEventListener("click", () => {
    $("#modal").modal("show");
    if (img.id == "evergreen") {
      console.log(img.id);
      title.innerHTML = "Evergreen";
      gif.src = "./images/modalProjects/evergreen.gif";
      description.innerHTML = `Evergreen is a website made using Vue.js. It was created as a project for college to help students who participate in the project "Eco-Escolas".`;
    } else if (img.id == "ecomeow") {
      title.innerHTML = "Eco-Meow";
      gif.src = "./images/modalProjects/ecomeow.gif";
      description.innerHTML = `Eco-Meow is a game made using canvas. It was created as a project for college and the theme was inspired by our main project that year, "Eco-Ecolas".`;
    } else if (img.id == "ecomeow2") {
      title.innerHTML = "Eco-Meow 2.0";
      gif.src = "./images/modalProjects/ecomeow2.gif";
      description.innerHTML = `Eco-Meow 2.0 is a game made using Three.js. It was created as a project for college and it was supposed to be an evolution of our first project, Eco-Meow.`;
    } else if (img.id == "trainingwheels") {
      title.innerHTML = "Training Wheels";
      gif.src = "./images/modalProjects/trainingwheels.gif";
      description.innerHTML = `Training Wheels is a website made using html, css and vanilla js. It was created as a project for college and it's supposed to help people study for their driving theory test.`;
    } else if (img.id == "video") {
      title.innerHTML = "Promotinal Video";
      gif.src = "./images/modalProjects/video.gif";
      description.innerHTML = `This is a promotional video made for the website "Training Wheels". We used Adobe After Effects.`;
    } else if (img.id == "cpm") {
      title.innerHTML = "Simulation";
      gif.src = "./images/modalProjects/simulation.gif";
      description.innerHTML = `This simulation was made using a-frame. It was created as a project for college and the theme was based on our main project that year, "Training Wheels".`;
    } else if (img.id == "insta") {
      title.innerHTML = "Template";
      gif.src = "./images/modalProjects/insta.gif";
      description.innerHTML = `This are templates that can be used to post on instagram.`;
    } else if (img.id == "logo") {
      title.innerHTML = "Makeup Artist Logo";
      gif.src = "./images/modalProjects/logo.png";
      description.innerHTML = `This was a logo made for a makeup artist.`;
    } else if (img.id == "serenade") {
      title.innerHTML = "Serenade";
      gif.src = "./images/modalProjects/serenade.gif";
      description.innerHTML = `Serenade is a social media app. The design was made using Figma. This was a project for college.`;
    }
  });
});

document.getElementById("close").addEventListener("click", () => {
  $("#modal").modal("hide");
});
