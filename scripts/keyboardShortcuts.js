let pageURL = document.URL;

document.addEventListener("keypress", (e) => {
  switch (e.key) {
    case "1":
      document.URL.replace("#intro");
      console.log(e.key);
      break;

    case "2":
      document.URL.replace("#about");
      console.log(e.key);
      break;

    case "3":
      document.URL.replace("#google");
      console.log(e.key);
      break;

    case "4":
      document.URL.replace("#meta");
      console.log(e.key);
      break;

    case "5":
      document.URL.replace("#grow");
      console.log(e.key);
      break;
  }
});
