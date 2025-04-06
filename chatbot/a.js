document.addEventListener("DOMContentLoaded", function() {
    const reviewForm = document.getElementById("review-form");
    
    reviewForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const rating = document.getElementById("rating").value;
        const comment = document.getElementById("comment").value;

        const review = { name, rating, comment };

        saveReview(review);
    });

    function saveReview(review) {
        let existingReviews = [];
        const existingData = localStorage.getItem("avaliacoes");
        if (existingData) {
            existingReviews = JSON.parse(existingData);
        }

        existingReviews.push(review);

        localStorage.setItem("avaliacoes", JSON.stringify(existingReviews));

        alert("Avaliação salva com sucesso!");
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const reviewsContainer = document.getElementById("reviews-container");
    
    function displayReviews() {
        reviewsContainer.innerHTML = ""; 

        const existingData = localStorage.getItem("avaliacoes");
        if (existingData) {
            const existingReviews = JSON.parse(existingData);
            existingReviews.forEach(review => {
                const reviewItem = document.createElement("div");
                reviewItem.innerHTML = `<strong>Nome:</strong> ${review.name}<br><strong>Avaliação:</strong> ${review.rating}<br><strong>Comentário:</strong> ${review.comment}<hr>`;
                reviewsContainer.appendChild(reviewItem);
            });
        }
    }

    displayReviews();
});