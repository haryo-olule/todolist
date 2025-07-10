export function colorfliper() {
  const button = document.getElementById("click");
  const p = document.getElementById("p");

  console.log("click:", button);
  console.log("p:", p);

  const colors = ["red", "blue", "green", "orange", "yellow"];

  if (!button || !p) return;

  button.addEventListener("click", () => {
    const random = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[random];
    p.textContent = colors[random];
  });
}

export function counter() {
  const value = document.querySelector(".counter span");
  const increment = document.querySelector(".increment-btn");
  const decrement = document.querySelector(".decrement-btn");
  const reset = document.querySelector(".reset-btn");

  console.log("value:", value);
  console.log("increment:", increment);
  console.log("decrement:", decrement);
  console.log("reset:", reset);

  let count = 0;

  if (!value || !increment) return;

  increment.addEventListener("click", () => {
    count++;
    console.log(increment);
    value.textContent = count;
  });

  decrement.addEventListener("click", () => {
    if (count > 0) --count;
    value.textContent = count;
  });

  reset.addEventListener("click", () => {
    count = 0;
    value.textContent = count;
  });
}

export function slider() {
  const prevButton = document.querySelector("#prevBtn");
  const nextButton = document.querySelector("#nextBtn");
  const slider = document.querySelectorAll(".card-col");
  const row = document.querySelector(".card-row");

  let currentslide = 0;
  let maxslide = Math.ceil(slider.length / 3) - 1;

  if (!prevButton || !nextButton || !row || slider.length === 0) return;

  nextButton.addEventListener("click", () => {
    if (maxslide > currentslide) {
      currentslide++;
      row.style.transform = `translateX(-${currentslide * 100}%)`;
    }
  });

  prevButton.addEventListener("click", () => {
    if (currentslide > 0) {
      currentslide--;
      row.style.transform = `translateX(-${currentslide * 100}%)`;
    }
  });
}

export function navbar() {
  const menuicon = document.getElementById("menu-icon");
  const navlinks = document.querySelector(".nav-links");
  const button = document.querySelector(".button");

  console.log("menu-icon:", menuicon);

  if (!menuicon || !navlinks || !button) return;

  menuicon.addEventListener("click", () => {
    navlinks.classList.toggle("show");
  });
  button.addEventListener("click", () => {
    navlinks.classList.remove("show");
  });
}

export function qanda() {
  const question = document.querySelectorAll(".question");

  if (!question) return;

  question.forEach((button) => {
    button.addEventListener("click", () => {
      const result = button.nextElementSibling;
      result.classList.toggle("active");
    });
  });
}

export function filter() {
  const filterbtns = document.querySelectorAll(".filter-btn");
  const menuItems = document.querySelectorAll(".menu-col");

  if (!filterbtns || !menuItems) return;

  filterbtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterbtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      btn.classList.add("active");

      const filtervalue = btn.dataset.category;

      menuItems.forEach((menuItem) => {
        const menuvalue = menuItem.dataset.category;

        if (filtervalue === "all") {
          menuItem.classList.remove("hidden");
        } else if (filtervalue === menuvalue) {
          menuItem.classList.remove("hidden");
        } else {
          menuItem.classList.add("hidden");
        }
      });
    });
  });
}

function scroll() {
  const scroll = document.querySelector(".center-wrapper");
  const second = document.querySelector(".search-container1");
  let scrollheight = window.innerHeight * 0.22;

  if (!scroll || !second) return;

  if (window.scrollY > scrollheight) {
    scroll.classList.add("hidden");
    second.classList.remove("hidden");
  } else {
    scroll.classList.remove("hidden");
    second.classList.add("hidden");
  }
}
scroll();
window.addEventListener("scroll", scroll);

export function tabs() {
  const btns = document.querySelectorAll(".btn");
  const contents = document.querySelectorAll(".tab-content");
  if (!btns || !contents) return;

  btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      btns.forEach((btn) => {
        btn.classList.remove("active");
      });
      btn.classList.add("active");

      contents.forEach((content) => {
        content.classList.remove("active");
        contents[index].classList.add("active");
      });
    });
  });
}

export function countdown() {
  const day = document.getElementById("days");
  const hour = document.getElementById("hours");
  const minute = document.getElementById("minutes");
  const second = document.getElementById("seconds");
  if (!day || !hour || !minute || !second) return;

  const invalid = setInterval(() => {
    const currentdate = new Date();
    const count = new Date(2025, 6, 9, 0, 0, 0);
    const countdown = count - currentdate;

    const totalSeconds = Math.floor(countdown / 1000);

    day.textContent = Math.floor(totalSeconds / (60 * 60 * 24));
    hour.textContent = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    minute.textContent = Math.floor((totalSeconds % (60 * 60)) / 60);
    second.textContent = totalSeconds % 60;

    if (countdown <= 0) {
      day.textContent = "0";
      hour.textContent = "0";
      minute.textContent = "0";
      second.textContent = "0";
      clearInterval(invalid);
    }
  }, 1000);
}

export function lorem() {
  const output = document.getElementById("output");
  const button = document.getElementById("button");
  const input = document.getElementById("input");

  if (!output || !button || !input) return;

  const lorem = [
    `Death is the silent guest we never invite, yet it always finds its way in — not with noise, but with a calm that stills everything in its path.`,

    `We chase immortality in stories, in children, in legacy. Yet death reminds us that even the strongest towers crumble, and all that's left is dust and memory.`,

    `The fear of death is often the fear of an unlived life. To die without regrets is the rarest peace a soul can earn.`,

    `Grief is the price we pay for love. Where death steals the body, sorrow preserves the soul. The voice becomes silence, but the presence lingers.`,

    `Even the stars die — they burn until their light fades. But in that death, they birth new worlds. Maybe we, too, leave something beautiful behind.`,

    `Death is the silent guest we never invite, yet it always finds its way in — not with noise, but with a calm that stills everything in its path.`,

    `We chase immortality in stories, in children, in legacy. Yet death reminds us that even the strongest towers crumble, and all that's left is dust and memory.`,

    `The fear of death is often the fear of an unlived life. To die without regrets is the rarest peace a soul can earn.`,

    `Grief is the price we pay for love. Where death steals the body, sorrow preserves the soul. The voice becomes silence, but the presence lingers.`,

    `Even the stars die — they burn until their light fades. But in that death, they birth new worlds. Maybe we, too, leave something beautiful behind.`,

    `Death is the silent guest we never invite, yet it always finds its way in — not with noise, but with a calm that stills everything in its path.`,

    `We chase immortality in stories, in children, in legacy. Yet death reminds us that even the strongest towers crumble, and all that's left is dust and memory.`,

    `The fear of death is often the fear of an unlived life. To die without regrets is the rarest peace a soul can earn.`,

    `Grief is the price we pay for love. Where death steals the body, sorrow preserves the soul. The voice becomes silence, but the presence lingers.`,

    `Even the stars die — they burn until their light fades. But in that death, they birth new worlds. Maybe we, too, leave something beautiful behind.`,
  ];

  button.addEventListener("click", () => {
    const value = Number(input.value);
    let result = "";

    if (value < 1 || isNaN(value)) {
      alert("Show a warning message ");
    }
    for (let i = 0; i < value; i++) {
      result += `<p>${lorem[i]}</p>`; //because of the mutiple pargraph entry
    }

    output.innerHTML = result;
    input.value = "";
  });
}
export function todolist() {
  const todoinput = document.getElementById("todo-input");
  const addbtn = document.getElementById("add-btn");
  const todolist = document.querySelector(".todo-list");
  const totaltasks = document.querySelector(".total-tasks");
  const completedtasks = document.querySelector(".completed-tasks");
  const pendingtasks = document.querySelector(".pending-tasks");
  const emptystate = document.querySelector(".empty-state");

  if (!todoinput || !addbtn || !todolist || !totaltasks || !completedtasks)
    return;

  let editingSpan = null;

  function updatestats() {
    const taskitem = document.querySelectorAll(".task-item");
    const completedCount = document.querySelectorAll(
      ".task-item.completed"
    ).length;

    totaltasks.textContent = `Total: ${taskitem.length} tasks`;
    completedtasks.textContent = `Completed: ${completedCount} tasks`;
    pendingtasks.textContent = `Pending: ${
      taskitem.length - completedCount
    } tasks`;

    emptystate.style.display = taskitem.length === 0 ? "block" : "none";
  }

  addbtn.addEventListener("click", () => {
    const newvalue = todoinput.value.trim();
    if (!newvalue) {
      alert("Please enter a task!");
      return;
    }

    if (editingSpan) {
      // Edit existing task
      editingSpan.textContent = newvalue;
      editingSpan = null;
      todoinput.value = "";
      return;
    }

    // Create elements for new task
    const Checkbox = document.createElement("input");
    Checkbox.type = "checkbox";
    Checkbox.classList.add("task-checkbox");

    const Taskname = document.createElement("span");
    Taskname.textContent = newvalue;
    Taskname.classList.add("task-name");

    const edit = document.createElement("button");
    edit.textContent = "✏️";
    edit.classList.add("edit-btn");

    const del = document.createElement("button");
    del.textContent = "🗑️";
    del.classList.add("delete-btn");

    const all = document.createElement("li");
    all.classList.add("task-item");

    all.appendChild(Checkbox);
    all.appendChild(Taskname);
    all.appendChild(edit);
    all.appendChild(del);
    todolist.appendChild(all);

    // Task events
    Checkbox.addEventListener("change", () => {
      all.classList.toggle("completed");
      updatestats();
    });

    del.addEventListener("click", () => {
      all.remove();
      updatestats();
    });

    edit.addEventListener("click", () => {
      todoinput.value = Taskname.textContent;
      editingSpan = Taskname; // set editing mode
    });

    todoinput.value = "";
    updatestats();
  });
}
