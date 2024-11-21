document.addEventListener('DOMContentLoaded', function () {
    const heartIcon = document.querySelector('.heart-icon');
    
    // Toggle the 'liked' class on heart icon click
    if (heartIcon) {
        heartIcon.addEventListener('click', function () {
            this.classList.toggle('liked');
        });
    }

    // Modal functionality
    const threeDotMenu = document.getElementById('three-dot-menu');
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.close');
    
    // Open the modal when the three-dot menu is clicked
    if (threeDotMenu) {
        threeDotMenu.addEventListener('click', function () {
            modal.style.display = 'block';
        });
    }

    // Close the modal when the close button (×) is clicked
    if (closeModal) {
        closeModal.addEventListener('click', function () {
            modal.style.display = 'none';
        });
    }

    // Close the modal if the user clicks outside of it
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
  
document.addEventListener('DOMContentLoaded', function () {
    const commentInput = document.querySelector('.comment input'); // the comment input in the card
    const commentModal = document.getElementById('comment-modal'); // modal element
    const closeModal = document.querySelector('.close'); // close button for modal
    const submitCommentButton = document.getElementById('submit-comment'); // submit button
    const commentList = document.getElementById('comment-list'); // where the comments will be listed
    const newCommentInput = document.getElementById('new-comment'); // input for new comment

    // Open the modal when comment input is clicked
    if (commentInput) {
        commentInput.addEventListener('click', function () {
            commentModal.style.display = 'block'; // Show the modal
        });
    }

    // Close the modal when the close button is clicked
    if (closeModal) {
        closeModal.addEventListener('click', function () {
            commentModal.style.display = 'none'; // Hide the modal
        });
    }

    // Close the modal if the user clicks outside of it
    window.addEventListener('click', function (event) {
        if (event.target === commentModal) {
            commentModal.style.display = 'none'; // Hide the modal when clicking outside
        }
    });

    // Handle comment submission
    submitCommentButton.addEventListener('click', function () {
        const newCommentText = newCommentInput.value.trim();
        if (newCommentText) {
            // Create a new comment item
            const newCommentItem = document.createElement('div');
            newCommentItem.classList.add('comment-item');
            newCommentItem.innerHTML = `<strong>You:</strong> ${newCommentText}`;
            
            // Append the new comment to the comment list
            commentList.appendChild(newCommentItem);

            // Clear the input field
            newCommentInput.value = '';
        }
    });
});
