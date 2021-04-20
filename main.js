document.addEventListener('keydown', function(event) {



  if (event.code == 'KeyR'){
    document.getElementById('pic-1').style.display = "block";
    document.getElementById('rodeo').style.fontSize = "20px";
    // var name = document.createElement('div');
    // name.innerHTML = "Rodeo, 2015";
    // document.body.append(name);
    // name.classList.add("album-name-year");
  } else if (event.code == 'KeyB'){
    document.getElementById('pic-2').style.display = "block";
    document.getElementById('birds').style.fontSize = "20px";

  } else if (event.code == 'KeyH'){
    document.getElementById('pic-3').style.display = "block";
    document.getElementById('huncho').style.fontSize = "20px";

  } else if (event.code == 'KeyA'){
    document.getElementById('pic-4').style.display = "block";
    document.getElementById('astro').style.fontSize = "20px";

  } else if (event.code == 'KeyJ'){
    document.getElementById('pic-5').style.display = "block";
    document.getElementById('jackboys').style.fontSize = "20px";

  } else if (event.code == 'KeyF'){
    document.getElementById('pic-6').style.display = "block";
    document.getElementById('franchise').style.fontSize = "20px";

  } else if (event.code == 'KeyG'){
    document.getElementById('pic-7').style.display = "block";
    document.getElementById('goosebumps').style.fontSize = "20px";

  } else if (event.code == 'KeyI'){
    document.getElementById('pic-8').style.display = "block";
    document.getElementById('highest').style.fontSize = "20px";

  } else if (event.code == 'KeyS'){
  document.getElementById('pic-9').style.display = "block";
  document.getElementById('sicko').style.fontSize = "20px";

} else if (event.code == 'KeyP'){
  document.getElementById('pic-10').style.display = "block";
  document.getElementById('plan').style.fontSize = "20px";

  }



});

document.addEventListener('keyup', function(event) {
    document.body.style.backgroundColor = "red";
    document.getElementById('rodeo').style.fontSize = "5px";
    document.getElementById('birds').style.fontSize = "5px";
    document.getElementById('huncho').style.fontSize = "5px";
    document.getElementById('astro').style.fontSize = "5px";
    document.getElementById('jackboys').style.fontSize = "5px";
    document.getElementById('franchise').style.fontSize = "5px";
    document.getElementById('goosebumps').style.fontSize = "5px";
    document.getElementById('highest').style.fontSize = "5px";
    document.getElementById('sicko').style.fontSize = "5px";
    document.getElementById('plan').style.fontSize = "5px";



    document.getElementById('pic-1').style.display = "none";
    document.getElementById('pic-2').style.display = "none";
    document.getElementById('pic-3').style.display = "none";
    document.getElementById('pic-4').style.display = "none";
    document.getElementById('pic-5').style.display = "none";
    document.getElementById('pic-6').style.display = "none";
    document.getElementById('pic-7').style.display = "none";
    document.getElementById('pic-8').style.display = "none";
    document.getElementById('pic-9').style.display = "none";
    document.getElementById('pic-10').style.display = "none";

});
