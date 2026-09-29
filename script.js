document.addEventListener("DOMContentLoaded", () => {
    
    const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
    const root = document.documentElement;
    const originalBackground = getComputedStyle(root).getPropertyValue('--background-color');

    document.getElementById("colorBtn").addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        root.style.setProperty('--background-color', colors[randomIndex]);
    });

    document.getElementById("resetBtn").addEventListener("click", () => {
        root.style.setProperty('--background-color', originalBackground);
    });

    
    const darkModeBtn = document.getElementById("darkModeBtn");
    darkModeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        darkModeBtn.textContent = document.body.classList.contains("dark-mode")
            ? "Disable Dark Mode"
            : "Enable Dark Mode";
    });

    
    const addItemBtn = document.getElementById("addItemBtn");
    const removeItemBtn = document.getElementById("removeItemBtn");
    const itemInput = document.getElementById("itemInput");
    const myList = document.getElementById("myList");
    let itemCount = 0;

    addItemBtn.addEventListener("click", () => {
        if (itemInput.value.trim() !== "") {
            itemCount++;
            const li = document.createElement("li");
            li.textContent = itemCount + ". " + itemInput.value + " ";

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.addEventListener("click", () => li.remove());

            li.appendChild(deleteBtn);
            myList.appendChild(li);
            itemInput.value = "";
        }
    });

    removeItemBtn.addEventListener("click", () => {
        if (myList.lastChild) {
            myList.removeChild(myList.lastChild);
            itemCount--;
        }
    });

    
    const addParaBtn = document.getElementById("addParaBtn");
    const removeParaBtn = document.getElementById("removeParaBtn");
    const paraContainer = document.getElementById("paraContainer");
    let paraCount = 0;

    addParaBtn.addEventListener("click", () => {
        paraCount++;
        const p = document.createElement("p");
        p.textContent = "This is paragraph number " + paraCount;
        paraContainer.appendChild(p);
    });

    removeParaBtn.addEventListener("click", () => {
        if (paraContainer.lastChild) {
            paraContainer.removeChild(paraContainer.lastChild);
            paraCount--;
        }
    });

    
    const textInput = document.getElementById("textInput");
    const charCount = document.getElementById("charCount");

    textInput.addEventListener("input", () => {
        charCount.textContent = textInput.value.length;
    });

    
    document.getElementById("addBtn").addEventListener("click", () => {
        const num1 = Number(document.getElementById("num1").value);
        const num2 = Number(document.getElementById("num2").value);
        document.getElementById("result").textContent =
            !isNaN(num1) && !isNaN(num2) ? num1 + num2 : "Invalid input";
    });

    
    const myImage = document.getElementById("myImage");
    const changeImageBtn = document.getElementById("changeImageBtn");

    let images = [
        "city.jpg",
        "natures.jpg"
        
    ];

 let currentIndex = 0;

    changeImageBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        myImage.src = images[currentIndex];
    });

    
    const addTodoBtn = document.getElementById("addTodoBtn");
    const clearTodoBtn = document.getElementById("clearTodoBtn");
    const todoInput = document.getElementById("todoInput");
    const todoList = document.getElementById("todoList");

    addTodoBtn.addEventListener("click", () => {
        if (todoInput.value.trim() !== "") {
            const li = document.createElement("li");
            li.textContent = todoInput.value + " ";

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.addEventListener("click", () => li.remove());

            li.appendChild(deleteBtn);
            todoList.appendChild(li);
            todoInput.value = "";
        }
    });

    clearTodoBtn.addEventListener("click", () => {
        todoList.innerHTML = "";
    });
});
   