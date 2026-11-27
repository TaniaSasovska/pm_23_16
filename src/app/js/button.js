document.addEventListener("DOMContentLoaded", function () {

    const arrows = document.querySelectorAll(".arrow");

    if (arrows.length > 0) {
        arrows.forEach(function (arrow) {

            arrow.addEventListener("click", function () {

                const targetId = arrow.dataset.target;
                if (targetId) {
                    const content = document.getElementById(targetId);

                    if (content) {
                        content.classList.toggle("hidden");
                        arrow.classList.toggle("rotated");
                    }
                }

            });

        });
    }
});