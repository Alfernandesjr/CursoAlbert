document.addEventListener('DOMContentLoaded', function () {
    var alunos = [
        {
            category: "ENEM",
            title: "Alunos do PRÉ-ENEM",
            alunos: [
                { name: "Monkey", photo: "Assets/img/monkey.png" },
                { name: "Monkey", photo: "Assets/img/monkey.png" },
                { name: "Monkey", photo: "Assets/img/monkey.png" },
                { name: "Monkey", photo: "Assets/img/monkey.png" },
                { name: "Monkey", photo: "Assets/img/monkey.png" },
                { name: "Monkey", photo: "Assets/img/monkey.png" },
                { name: "Monkey", photo: "Assets/img/monkey.png" },
                { name: "Monkey", photo: "Assets/img/monkey.png" },
                { name: "Monkey", photo: "Assets/img/monkey.png" },
                { name: "Monkey", photo: "Assets/img/monkey.png" },
                { name: "Monkey", photo: "Assets/img/monkey.png" },
                { name: "Monkey", photo: "Assets/img/monkey.png" },
                { name: "Monkey", photo: "Assets/img/monkey.png" },
                { name: "Monkey", photo: "Assets/img/monkey.png" },
                { name: "Monkey", photo: "Assets/img/monkey.png" },
                { name: "Monkey", photo: "Assets/img/monkey.png" },
                { name: "Monkey", photo: "Assets/img/monkey.png" },
                { name: "Monkey", photo: "Assets/img/monkey.png" },
                { name: "Monkey", photo: "Assets/img/monkey.png" },
                { name: "Monkey", photo: "Assets/img/monkey.png" }
            ]
        },
        {
            category: "PRÉ-PAS",
            title: "Alunos do PRÉ-PAS",
            alunos: [
                { name: "Monkey", photo: "Assets/img/monkey.png"},
                { name: "Monka", photo: "Assets/img/monkey.png" },
                { name: "Monka", photo: "Assets/img/monkey.png" },
                { name: "Monka", photo: "Assets/img/monkey.png" },
                { name: "Monka", photo: "Assets/img/monkey.png" },
                { name: "Monkey", photo: "Assets/img/monkey.png"},
                { name: "Monka", photo: "Assets/img/monkey.png" },
                { name: "Monka", photo: "Assets/img/monkey.png" },
                { name: "Monka", photo: "Assets/img/monkey.png" },
                { name: "Monka", photo: "Assets/img/monkey.png" },
                { name: "Monkey", photo: "Assets/img/monkey.png"},
                { name: "Monka", photo: "Assets/img/monkey.png" },
                { name: "Monka", photo: "Assets/img/monkey.png" },
                { name: "Monka", photo: "Assets/img/monkey.png" },
                { name: "Monka", photo: "Assets/img/monkey.png" },
                { name: "Monkey", photo: "Assets/img/monkey.png"},
                { name: "Monka", photo: "Assets/img/monkey.png" },
                { name: "Monka", photo: "Assets/img/monkey.png" },
                { name: "Monka", photo: "Assets/img/monkey.png" },
                { name: "Monka", photo: "Assets/img/monkey.png" }
            ]
        }
    ];

    function createNewSection(title) {
        var newSection = document.createElement('section');
        newSection.classList.add('carometro');

        newSection.innerHTML = `
            <div class="blue-circle-border"></div>
            <div class="title">
                <img src="Assets/Dots.svg" alt="">
                <span class="title-blue">Carômetro</span>
                <span class="subtitle-black">${title}</span>
            </div>
            <div class="content">
                <ul>
                </ul>
            </div>
            <div class="footer">
                <span class="title-white">Carômetro</span>
                <img class="logo" src="Assets/Logo.png" alt="">
                <div class="blue-bar"></div>
            </div>
        `;

        document.body.appendChild(newSection);
        return newSection.querySelector('.content ul');
    }

    function updateAlunoList() {
        var currentSectionList;

        alunos.forEach(category => {

            currentSectionList = createNewSection(category.title);

            category.alunos.forEach(aluno => {
                var li = document.createElement('li');
                li.classList.add('card');

                var imageSpan = document.createElement('span');
                imageSpan.classList.add('card-image');

                var img = document.createElement('img');
                img.src = aluno.photo;
                img.alt = aluno.name;
                imageSpan.appendChild(img);

                var titleSpan = document.createElement('span');
                titleSpan.classList.add('card-title');
                titleSpan.textContent = aluno.name;

                li.appendChild(imageSpan);
                li.appendChild(titleSpan);

                currentSectionList.appendChild(li);
            });
        });
    }

    updateAlunoList();
});
