const shareBtn = document.querySelector("#share-btn");
const shareSection = document.querySelector(".share");

const state = {
  isVisible: false,
};

setShareSectionVisibilityBasedOnState(state.isVisible);

shareBtn.addEventListener("click", () => {
  state.isVisible = !state.isVisible;
  setShareSectionVisibilityBasedOnState(state.isVisible);
});

function setShareSectionVisibilityBasedOnState(newIsVisible) {
  if (!newIsVisible) {
    shareBtn.classList.remove("active-icon");
    shareBtn.classList.add("inactive-icon");
    shareSection.classList.add("hidden");
  } else {
    shareBtn.classList.add("active-icon");
    shareBtn.classList.remove("inactive-icon");
    shareSection.classList.remove("hidden");
  }
}
