
    let btn = document.querySelector("button");
    let inp = document.querySelector("input");
    let ul = document.querySelector("ul");

    btn.addEventListener("click", function(){
        if (!inp.value.trim()) return; // Guard clause for empty input

        let item = document.createElement("li");
        
        // Create checkbox
        let box = document.createElement("input");
        box.type = "checkbox";
        box.classList.add("checkbox");
        
        // Add change event listener to checkbox
        box.addEventListener("change", function() {
            if (this.checked) {
                span.style.textDecoration = "line-through";
                
            } else {
                span.style.textDecoration = "none";
            }
        });
        
        // Create text span
        let span = document.createElement("span");
        span.innerText = inp.value;
        
        // Append elements
        item.appendChild(box);
        item.appendChild(span);
        ul.appendChild(item);
        
        // Clear input
        inp.value = "";
    });
