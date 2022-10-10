const row = document.querySelector(".row");

//check numbers 1 to 100 and find those can be divided by 3, 5 or both
for (let i = 1; i <= 100; i++) {
    let result = "";

    if (i % 3 === 0 && i % 5 === 0) {
        result = `fizzbuzz`
    } else if (i % 3 === 0) {
        result = `fizz`
    } else if (i % 5 === 0){
        result = `buzz`
    } else {
        result = i;
    };
    
    //output
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add(result)
    card.innerHTML += result;
    row.append(card);

    //oppure
    // const card = `<div class="card ${result}">${i}</div>`;
    // row.innerHTML += card;

}

