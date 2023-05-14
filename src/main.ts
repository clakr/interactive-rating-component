import "./style.css";

function changeTextContent(element: HTMLTitleElement | Element | null) {
  if (!element) return;

  element.textContent = import.meta.env.VITE_PROJECT_NAME;
}

(function () {
  const title = document.querySelector("title");
  changeTextContent(title);

  const heading = document.querySelector(".sr-only");
  changeTextContent(heading);

  document.documentElement.setAttribute("data-theme", "dark");

  const lists = document.querySelectorAll("li");
  lists.forEach((list) =>
    list.addEventListener("click", function () {
      const activeList = document.querySelector("li.active");

      activeList?.classList.remove("active");
      this.classList.add("active");
    })
  );

  const btnSubmit = document.querySelector(".card__cta");
  btnSubmit?.addEventListener("click", function () {
    const activeList = document.querySelector("li.active");
    if (!activeList) return;

    const [form, thanks] = document.querySelectorAll<HTMLDivElement>(
      'div[class^="card--"]'
    );

    form.style.display = "none";
    thanks.style.display = "flex";

    const selectedList = document.getElementById("selected");
    if (!selectedList) return;

    selectedList.textContent = activeList.textContent;
  });
})();
