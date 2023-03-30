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
      title.innerHTML = "Evergreen";
      gif.src = "./images/modalProjects/evergreen.gif";
      description.innerHTML = `Evergreen is a website made using Vue.js. 
      It was created as a project for college to help students who participate in the project "Eco-Escolas". The project was initialized in
      the first semester of the second year of school.
      This was a group project which included me and two other students. 
      We design the whole interface on Figma and later were able to construct the frontend.
      We are currently working on the backend of this website.
      This was definitely one of my favorite project to make and the result made me really proud of our work.
      I think it show that me and my group work very well together.
      You can watch the video demo of the 
      prototype <a href="https://drive.google.com/file/d/1stWuP0EZ8A4nWtYaeTy5luaOGGM-GGJ-/view?usp=sharing" target="_blank" class='projectLink'>here</a>.
      You can see a poster we made for the website <a href="https://drive.google.com/file/d/10J6zWkGgeI_-f0x1tgwib4dTQrOky1l4/view?usp=sharing" target="_blank" class='projectLink'>here</a>.
      You can access the project repository on GitHub <a href="https://github.com/motadaniela/Evergreen" target="_blank" class='projectLink'>here</a>.
      `;
    } else if (img.id == "ecomeow") {
      title.innerHTML = "Eco-Meow";
      gif.src = "./images/modalProjects/ecomeow.gif";
      description.innerHTML = `Eco-Meow is a game made using canvas. It was created as a project for college and the theme was inspired by 
      our main project that year, "Eco-Ecolas".
      We wanted to create a cute pixelart game so our main inspiration was the game "Stardew Valley".
      I think this would be a great game for kids to learn how to recycle.
      The project was made in
      the first semester of the second year of school.
      This was a group project which included me and two other students. 
      You can access the project repository on GitHub <a href="https://github.com/motadaniela/Eco-Meow" target="_blank" class='projectLink'>here</a>.`;
    } else if (img.id == "ecomeow2") {
      title.innerHTML = "Eco-Meow 2.0";
      gif.src = "./images/modalProjects/ecomeow2.gif";
      description.innerHTML = `Eco-Meow 2.0 is a game made using Three.js. It was created as a project for college and it was 
      supposed to be an evolution of our first project, Eco-Meow.
      The project was made in
      the first semester of the second year of school.
      This was a group project which included me and two other students. 
      You can access the project repository on GitHub <a href="https://github.com/motadaniela/Eco-Meow/tree/main/Eco-Meow2.0" target="_blank" class='projectLink'>here</a>.`;
    } else if (img.id == "trainingwheels") {
      title.innerHTML = "Training Wheels";
      gif.src = "./images/modalProjects/trainingwheels.gif";
      description.innerHTML = `Training Wheels is a website made using html, css and vanilla js. It was created as a project for college and 
      it's supposed to help people study for their driving theory exam.
      It was the first ever "real" website that I made and the end result made proud of my work.
      This project also had one of the highest grades in our class.
      The project was made in
      the second semester of the first year of school.
      This was a group project which included me and two other students.
      You can access the project repository on GitHub <a href="https://github.com/motadaniela/Training-Wheels/tree/main/TrainingWheels" target="_blank" class='projectLink'>here</a>.`;
    } else if (img.id == "video") {
      title.innerHTML = "Promotinal Video";
      gif.src = "./images/modalProjects/video.gif";
      description.innerHTML = `This is a promotional video made for the website "Training Wheels". We used Adobe After Effects.
      To be able to accomplish something so different from what we were used to, we had to practice a lot. Our teacher had has 
      follow several tutorials for us to learn how to use After Effects.
      In the end, it came out better that we could have ever expected.
      The project was made in
      the second semester of the first year of school.
      This was a group project which included me and two other students.
      You can watch the full video <a href="https://drive.google.com/file/d/1usQCuDdFCH2mXSPaHnjMLQArGqeUDtk6/view?usp=sharing" target="_blank" class='projectLink'>here</a>.`;
    } else if (img.id == "cpm") {
      title.innerHTML = "Simulation";
      gif.src = "./images/modalProjects/simulation.gif";
      description.innerHTML = `This simulation was made using a-frame. It was created as a project for college and the theme was based 
      on our main project that year, "Training Wheels".
      The goal with this simulation was to create a road situation test where u hat to guess which vehicle had priority.
      This project was quite fun to make and it was the first time I was able to do something like this.
      The project was made in
      the second semester of the first year of school.
      This was a group project which included me and two other students.
      You can access the project repository on GitHub <a href="https://github.com/motadaniela/Training-Wheels/tree/main/cpm" target="_blank" class='projectLink'>here</a>.`;
    } else if (img.id == "insta") {
      title.innerHTML = "Template";
      gif.src = "./images/modalProjects/insta.gif";
      description.innerHTML = `This templates were made to be used on instagram posts.
      The goal was to make something easy to use but also versatile. I chose all the colors and fonts that she could use to. 
      This project was made outside of school for a family member.
      <a href="https://www.instagram.com/p/Cqawls_tSNV/" target="_blank" class='projectLink'>Here</a> is an example of a post she made using the template.`;
    } else if (img.id == "logo") {
      title.innerHTML = "Makeup Artist Logo";
      gif.src = "./images/modalProjects/logo.png";
      description.innerHTML = `This was a logo made for a makeup artist.
      The directions I was given were that she wanted something simple, elegant and pink.
      This project was made outside of school for a family member.
      You can visit her instagram page <a href="https://www.instagram.com/mf_makeup_artist/" target="_blank" class='projectLink'>here</a>.`;
    } else if (img.id == "serenade") {
      title.innerHTML = "Serenade";
      gif.src = "./images/modalProjects/serenade.gif";
      description.innerHTML = `Serenade is a social media app. The design was made using Figma. This was a project for college.
      The project was made in
      the second semester of the first year of school.
      The goal was to design three pages of a social media app. We were told to choose something we liked and work with that-
      I really like singing and music in general so I design an app where you can share song lyrics / poems and an audio track to go with that.
      You can view the Figma project <a href="https://www.figma.com/file/bOMriAsXuXzDzIW1aGYYtL/Untitled?node-id=0%3A1&t=CUCo5NkFQrVT7q53-1" target="_blank" class='projectLink'>here</a>.`;
    }
  });
});

document.getElementById("close").addEventListener("click", () => {
  $("#modal").modal("hide");
});
