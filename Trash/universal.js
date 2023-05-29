function loadNavigationBar() {
    fetch("navigation-bar.html")
      .then(response => response.text())
      .then(data => {
        const navigationBar = document.createElement("div");
        navigationBar.innerHTML = data;
        document.getElementById("navigation-bar").appendChild(navigationBar);
      });
}

function loadFooter() {
  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      const foot = document.createElement("div");
      foot.innerHTML = data;
      document.getElementById("footer").appendChild(foot);
    });
}

