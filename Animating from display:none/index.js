const dialog = document.querySelector('dialog');
const showDialog = document.querySelector('button');
const closeDialog = dialog.querySelector('button');

showDialog.addEventListener('click', () => {
  dialog.showModal();
});

closeDialog.addEventListener('click', () => {
  dialog.close();
});

// const vanishExample = document.querySelector(".example");
// const vanishBtn = vanishExample.querySelector("button");
// const returnBtn = document.querySelector(".example + button");

// vanishBtn.addEventListener("click", () => {
//   vanishExample.classList.remove("opened");
// });

// returnBtn.addEventListener("click", () => {
//   vanishExample.classList.add("opened");
// });
