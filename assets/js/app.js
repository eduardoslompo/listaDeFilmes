fetch('https://api.themoviedb.org/3/movie/popular?api_key=307f3bce2cf2642bb1caa0463410a0de&language=pt-BR&page=1', {
    method: 'GET'
})
    .then(response => response.json())
    .then(function (json) {
        let container = document.querySelector('.container');
        let i = 1;

        // console.log(json);
        json.results.map(function (value, i) {
            container.innerHTML += `
            <div class="item"><ol start="${i + 1}"><li><p class="title"><div class="details" style="cursor:pointer;">` + value.title + `<p class="more">+ detalhes</p></div><hr>
            <div class="description" style="display:none;" >`+ value.overview + `</div></hr></p></li></ol></div>`;
        });

        let titles = document.querySelectorAll('.item');
        for (let j = 0; j < titles.length; j++) {
            titles[j].addEventListener('click', function (e) {
                if (e.target.parentNode.parentNode.querySelector('.description').style.display == "none") {
                    e.target.parentNode.parentNode.querySelector('.description').style.display = "block";
                } else {
                    e.target.parentNode.parentNode.querySelector('.description').style.display = "none";
                }
            });
        }
    });

