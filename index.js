button = document.querySelector("button")

boxColour = ''

primary = 0;

        for (var i = 0; i <= 20; i++) {
            document.querySelectorAll("button")[i].addEventListener("click", color)
            function color() {
                if (this.innerHTML % 2 == 0) {
                    primary = Math.floor(Math.random() * 3 + 1 )
                    if (primary === 1)
                    boxColour = 'red';
                    if (primary === 2)
                    boxColour = 'yellow';
                    if (primary === 3)
                    boxColour = 'blue';
                    document.querySelector(".answer").style.backgroundColor = boxColour
                }         

                else {
                
            if (this.innerHTML % 2 == 1) {
                primary = Math.floor(Math.random() * 3 + 1)
                if (primary === 1)
                    boxColour = 'green';
                    if (primary === 2)
                    boxColour = 'orange';
                    if (primary === 3)
                    boxColour = 'violet';
                    document.querySelector(".answer").style.backgroundColor = boxColour
            }
        }
         }
    }


