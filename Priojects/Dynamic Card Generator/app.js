document.addEventListener("input", (e) => {
  const userName = document.getElementById("userName").value;
  const userAge = document.getElementById("userAge").value;
  const userSex = document.getElementById("sex").value;
  const userDream = document.getElementById("userDream").value;

  //   console.log(userAge, userName, userSex, userDream);

  document.getElementById("userNameDisplay").textContent = userName;
  document.getElementById("userAgeDisplay").textContent = userAge;
  document.getElementById("userSexDisplay").textContent = userSex;

  document.getElementById("userDreamDisplay").textContent = userDream;
});
