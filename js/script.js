document.addEventListener('DOMContentLoaded', function () {

    // elements declaration
    const elements = [
        { number: 1, symbol: "H" }, { number: 2, symbol: "He" },
        { number: 3, symbol: "Li" }, { number: 4, symbol: "Be" },
        { number: 5, symbol: "B" }, { number: 6, symbol: "C" },
        { number: 7, symbol: "N" }, { number: 8, symbol: "O" },
        { number: 9, symbol: "F" }, { number: 10, symbol: "Ne" },
        { number: 11, symbol: "Na" }, { number: 12, symbol: "Mg" },
        { number: 13, symbol: "Al" }, { number: 14, symbol: "Si" },
        { number: 15, symbol: "P" }, { number: 16, symbol: "S" },
        { number: 17, symbol: "Cl" }, { number: 18, symbol: "Ar" },
        { number: 19, symbol: "K" }, { number: 20, symbol: "Ca" },
        { number: 21, symbol: "Sc" }, { number: 22, symbol: "Ti" },
        { number: 23, symbol: "V" }, { number: 24, symbol: "Cr" },
        { number: 25, symbol: "Mn" }, { number: 26, symbol: "Fe" },
        { number: 27, symbol: "Co" }, { number: 28, symbol: "Ni" },
        { number: 29, symbol: "Cu" }, { number: 30, symbol: "Zn" },
        { number: 31, symbol: "Ga" }, { number: 32, symbol: "Ge" },
        { number: 33, symbol: "As" }, { number: 34, symbol: "Se" },
        { number: 35, symbol: "Br" }, { number: 36, symbol: "Kr" },
        { number: 37, symbol: "Rb" }, { number: 38, symbol: "Sr" },
        { number: 39, symbol: "Y" }, { number: 40, symbol: "Zr" },
        { number: 41, symbol: "Nb" }, { number: 42, symbol: "Mo" },
        { number: 43, symbol: "Tc" }, { number: 44, symbol: "Ru" },
        { number: 45, symbol: "Rh" }, { number: 46, symbol: "Pd" },
        { number: 47, symbol: "Ag" }, { number: 48, symbol: "Cd" },
        { number: 49, symbol: "In" }, { number: 50, symbol: "Sn" },
        { number: 51, symbol: "Sb" }, { number: 52, symbol: "Te" },
        { number: 53, symbol: "I" }, { number: 54, symbol: "Xe" },
        { number: 55, symbol: "Cs" }, { number: 56, symbol: "Ba" },
        { number: 57, symbol: "La" }, { number: 58, symbol: "Ce" },
        { number: 59, symbol: "Pr" }, { number: 60, symbol: "Nd" },
        { number: 61, symbol: "Pm" }, { number: 62, symbol: "Sm" },
        { number: 63, symbol: "Eu" }, { number: 64, symbol: "Gd" },
        { number: 65, symbol: "Tb" }, { number: 66, symbol: "Dy" },
        { number: 67, symbol: "Ho" }, { number: 68, symbol: "Er" },
        { number: 69, symbol: "Tm" }, { number: 70, symbol: "Yb" },
        { number: 71, symbol: "Lu" }, { number: 72, symbol: "Hf" },
        { number: 73, symbol: "Ta" }, { number: 74, symbol: "W" },
        { number: 75, symbol: "Re" }, { number: 76, symbol: "Os" },
        { number: 77, symbol: "Ir" }, { number: 78, symbol: "Pt" },
        { number: 79, symbol: "Au" }, { number: 80, symbol: "Hg" },
        { number: 81, symbol: "Tl" }, { number: 82, symbol: "Pb" },
        { number: 83, symbol: "Bi" }, { number: 84, symbol: "Po" },
        { number: 85, symbol: "At" }, { number: 86, symbol: "Rn" },
        { number: 87, symbol: "Fr" }, { number: 88, symbol: "Ra" },
        { number: 89, symbol: "Ac" }, { number: 90, symbol: "Th" },
        { number: 91, symbol: "Pa" }, { number: 92, symbol: "U" },
        { number: 93, symbol: "Np" }, { number: 94, symbol: "Pu" },
        { number: 95, symbol: "Am" }, { number: 96, symbol: "Cm" },
        { number: 97, symbol: "Bk" }, { number: 98, symbol: "Cf" },
        { number: 99, symbol: "Es" }, { number: 100, symbol: "Fm" },
        { number: 101, symbol: "Md" }, { number: 102, symbol: "No" },
        { number: 103, symbol: "Lr" }, { number: 104, symbol: "Rf" },
        { number: 105, symbol: "Db" }, { number: 106, symbol: "Sg" },
        { number: 107, symbol: "Bh" }, { number: 108, symbol: "Hs" },
        { number: 109, symbol: "Mt" }, { number: 110, symbol: "Ds" },
        { number: 111, symbol: "Rg" }, { number: 112, symbol: "Cn" },
        { number: 113, symbol: "Nh" }, { number: 114, symbol: "Fl" },
        { number: 115, symbol: "Mc" }, { number: 116, symbol: "Lv" },
        { number: 117, symbol: "Ts" }, { number: 118, symbol: "Og" }
    ];

    const area = document.querySelector('.area-elements');
    const areaT = document.querySelector('.areatabela');


    //elements DOM create
    elements.forEach(element => {
        const { number, symbol } = element;

        const elementDiv = document.createElement('div');

        elementDiv.textContent = symbol;
        elementDiv.classList.add('element');
        elementDiv.setAttribute('draggable', 'true');
        elementDiv.dataset.number = number;
        elementDiv.dataset.symbol = symbol;
        elementDiv.textContent = symbol;
        elementDiv.classList.add('element');
        elementDiv.setAttribute('draggable', 'true');
        elementDiv.dataset.number = number;
        elementDiv.dataset.symbol = symbol;
        area.appendChild(elementDiv);
    });

    //shuffle elements
    function shuffleElements() {
        for (let i = area.children.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            area.appendChild(area.children[j]);
        }
    }
    shuffleElements();

    const elementsArray = Array.from(area.querySelectorAll('.element'));

    const placeholdersArray = Array.from(areaT.querySelectorAll('.quadrado'));


    //map elements position on the table
    const placeholdersMapping = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
        41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
        51, 52, 53, 54, 55, 56, 57, 72, 73, 74,
        75, 76, 77, 78, 79, 80, 81, 82, 83, 84,
        85, 86, 87, 88, 89, 104, 105, 106, 107, 108,
        109, 110, 111, 112, 113, 114, 115, 116, 117, 118,
        58, 59, 60, 61, 62, 63, 64, 65, 66, 67,
        68, 69, 70, 71, 90, 91, 92, 93, 94, 95,
        96, 97, 98, 99, 100, 101, 102, 103
    ];

    placeholdersArray.forEach((placeholder, index) => {
        placeholder.dataset.number = placeholdersMapping[index];
    });

    //placeholders declaration
    const placeholders = Array.from(area.querySelectorAll('.quadrado'), () => {
        div.classList.add('element', 'placeholder');
        div.setAttribute('draggable', 'false');

    });
    placeholders.forEach(placeholder => area.appendChild(placeholder));

    //define draggable elements
    elementsArray.forEach(element => {
        element.addEventListener('dragstart', dragStart);
        element.addEventListener('dragend', dragEnd);
    });

    //define droppable placeholders
    placeholdersArray.forEach(placeholder => {
        placeholder.addEventListener('dragover', dragOver);
        placeholder.addEventListener('dragenter', dragEnter);
        placeholder.addEventListener('dragleave', dragLeave);
        placeholder.addEventListener('drop', dragDrop);
    });

    //drag functions
    let draggedElement = null;
    function dragStart() {
        draggedElement = this;
        this.classList.add('dragging');
    }
    function dragEnd() {
        draggedElement.classList.remove('dragging');
        draggedElement = null;
    }
    function dragOver(e) {
        e.preventDefault();
        this.classList.remove('incorrect');
    }
    function dragEnter(e) {
        e.preventDefault();
        this.classList.add('hovered');
    }
    function dragLeave() {
        this.classList.remove('hovered');
    }

    //dropping verify if is empty and then verify if is correct
    function dragDrop() {
        this.classList.remove('hovered');
        if (this.children.length === 0) {
            this.appendChild(draggedElement);
            if (this.dataset.number == draggedElement.dataset.number) {
                this.classList.add('correct');
                this.classList.remove('incorrect');
            } else {
                this.classList.add('incorrect');
                this.classList.remove('correct');
            }
        }
    }


    // verify if class alter and count, then verify endgame
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length > 0) {
                var qtdCorrect = document.getElementsByClassName('correct');
                var quantidade = qtdCorrect.length;  
                var audio = new Audio('audio/sound.mp3')              
                if (quantidade === 1) {
                    const box = document.querySelector('.endgame');
                    box.style.display="flex";
                    audio.addEventListener('canplaythrough', function() {
                        audio.play();
                        audio.volume = 0.1;
                    });
                }
            }
        });
    });
    // Observer Configuration - watch additions to the DOM
    var config = { childList: true, subtree: true };
    // Start observation
    observer.observe(document.body, config);
})

function reload(){
    window.location.reload();
}

