let imgs = document.querySelectorAll(".projects-image");
let title = document.getElementById("mTitle");
let body = document.getElementById("mBody");
let string = "";
imgs = Array.from(imgs);
imgs.forEach((img) => {
  img.addEventListener("click", () => {
    $("#modal").modal("show");
    if (img.id == "evergreen") {
      console.log(img.id);
      title.innerHTML = "Evergreen";
      body.innerHTML = `<img src="./images/projects/evergreen.png" alt="" width="300"><p>Orci varius natoque penatibus et magnis dis parturient montes, 
      nascetur ridiculus mus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
      per inceptos himenaeos. Nulla facilisi. In efficitur justo neque, nec iaculis leo accumsan vel. 
      Curabitur et nisl aliquam, placerat lectus eu, pellentesque erat. Aliquam egestas est at facilisis lobortis. 
      Donec eget pellentesque massa. Curabitur posuere dapibus metus. Curabitur lectus orci, gravida vel varius ac, 
      facilisis vitae lacus. Nam malesuada, purus a rutrum elementum, mauris arcu rhoncus quam, ac laoreet massa sapien sit amet sapien. 
      Praesent ac interdum tellus, et volutpat lectus.</p>`;
    } else if (img.id == "ecomeow") {
      console.log(img.id);
      title.innerHTML = "Eco-Meow";
      body.innerHTML = `<img src="./images/projects/ecomeow.png" alt="" width="300"><p>Orci varius natoque penatibus et magnis dis parturient montes, 
        nascetur ridiculus mus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
        per inceptos himenaeos. Nulla facilisi. In efficitur justo neque, nec iaculis leo accumsan vel. 
        Curabitur et nisl aliquam, placerat lectus eu, pellentesque erat. Aliquam egestas est at facilisis lobortis. 
        Donec eget pellentesque massa. Curabitur posuere dapibus metus. Curabitur lectus orci, gravida vel varius ac, 
        facilisis vitae lacus. Nam malesuada, purus a rutrum elementum, mauris arcu rhoncus quam, ac laoreet massa sapien sit amet sapien. 
        Praesent ac interdum tellus, et volutpat lectus.</p>`;
    }
  });
});

document.getElementById("close").addEventListener("click", () => {
  $("#modal").modal("hide");
});
