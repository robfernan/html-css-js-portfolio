        // Image Hover Effect (Specific to this page, though global.css handles scale)
        const projectImages = document.querySelectorAll(".project-image img");
        projectImages.forEach((image) => {
            image.addEventListener("mouseover", () => {
                image.style.transform = "scale(1.1)";
            });
            image.addEventListener("mouseout", () => {
                image.style.transform = "scale(1)";
            });
        });