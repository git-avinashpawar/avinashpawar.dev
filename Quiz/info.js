const name = document.getElementById("fullname");
const org = document.getElementById("org");
const cat = document.getElementById("cat");
const email = document.getElementById("email");

const saveBtn = document.getElementById("saveBtn");

name.addEventListener("keyup", () => {
  if (name.value.length > 0 && org.value.length > 0) {
    saveBtn.disabled = false;
  } else {
    saveBtn.disabled = true;
  }
});
org.addEventListener("keyup", () => {
  if (name.value.length > 0 && org.value.length > 0) {
    saveBtn.disabled = false;
  } else {
    saveBtn.disabled = true;
  }
});
cat.addEventListener("keyup", () => {
  if (name.value.length > 0 && org.value.length > 0) {
    saveBtn.disabled = false;
  } else {
    saveBtn.disabled = true;
  }
});
email.addEventListener("keyup", () => {
  if (name.value.length > 0 && org.value.length > 0) {
    saveBtn.disabled = false;
  } else {
    saveBtn.disabled = true;
  }
});

save = (e) => {
  if (typeof Storage !== "undefined") {
    localStorage.setItem("name", name.value);
    localStorage.setItem("org", org.value);
    localStorage.setItem("cat", cat.value);
    localStorage.setItem("email", email.value);
    window.location.href = "video.html";
  }
};
