// Animate Hero Text on Visibility
document.addEventListener('DOMContentLoaded', () => {
    const heroText = document.querySelector('.hero-text');
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                heroText.style.opacity = '1';
                heroText.style.transform = 'translateY(0)';
            }
        },
        { threshold: 0.5 }
    );
    observer.observe(heroText);
});

document.addEventListener("DOMContentLoaded", () => {
    const animateElements = document.querySelectorAll('.animate-on-scroll');

    const handleScroll = () => {
        animateElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.classList.add('show');
            }
        });
    };

    // Initial check in case some elements are already in view
    handleScroll();

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);
});


// Show Selected Service and Highlight it
function showService(serviceId) {
    // Hide all service descriptions
    const allServices = document.querySelectorAll('.service-description');
    allServices.forEach(service => {
        service.style.display = 'none';
    });

    // Show selected service description
    const selectedService = document.getElementById(serviceId);
    selectedService.style.display = 'block';

    // Remove 'selected' class from all service items
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => item.classList.remove('selected'));

    // Highlight the clicked service item
    const selectedItem = document.querySelector(`.service-item[onclick="showService('${serviceId}')"]`);
    selectedItem.classList.add('selected');
}

// Initialize the first service as selected on page load
document.addEventListener('DOMContentLoaded', () => {
    showService('service1');
});
