document.getElementById('imageUpload').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const img = new Image();
            img.onload = function() {
                if (img.width <= 400 && img.height <= 400) {
                    document.getElementById('uploadedImage').src = img.src;
                } else {
                    alert('Image dimensions must be no larger than 400x400 pixels.');
                    document.getElementById('imageUpload').value = ''; // Clear the file input
                    document.getElementById('uploadedImage').src = ''; // Clear the image display
                }
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    }
});
