document.addEventListener('DOMContentLoaded', () => {
    // Select the elements
    const hamburger = document.querySelector('.hamburger');
    const menuList = document.querySelector('.menu-list');
    const header = document.querySelector('.header');
    const dropdown = document.getElementById('service-dropdown');
    const enquireButton = document.getElementById("enquire-button");
    const animateElements = document.querySelectorAll('.animate-on-scroll');

    // Toggle the menu and hamburger icon state on click
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            const headerHeight = header.offsetHeight; // Get the height of the header
            menuList.style.top = `${headerHeight}px`; // Set the menu to start after the header
            menuList.classList.toggle('show');
            hamburger.classList.toggle('active');
        });
    }

    // Email enquiry button functionality
    if (enquireButton) {
        enquireButton.addEventListener("click", function () {
            const recipient = "hlpinnovations6@gmail.com";
            const subject = encodeURIComponent("Enquiry about services");
            const body = encodeURIComponent(
                `Hi Team,

I would like to enquire about your services. Please provide more details.

Best regards,
[Your Name]
[Your Contact Information]`
            );

            const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;
            window.location.href = mailtoLink;
        });
    }

    // Scroll animation function
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
    window.addEventListener('scroll', handleScroll);

    // Function to show the selected service
    function showService(serviceId) {
        // Hide all service descriptions
        document.querySelectorAll('.service-description').forEach(service => {
            service.style.display = 'none';
        });

        // Show the selected service description
        const selectedService = document.getElementById(serviceId);
        if (selectedService) {
            selectedService.style.display = 'block';
        }

        // Remove 'selected' class from all service items
        document.querySelectorAll('.service-item-index').forEach(item => item.classList.remove('selected'));

        // Highlight the clicked service item
        const selectedItem = document.querySelector(`.service-item-index[data-service="${serviceId}"]`);
        if (selectedItem) {
            selectedItem.classList.add('selected');
        }

        // Ensure dropdown reflects the selection
        if (dropdown) {
            dropdown.value = serviceId;
        }
    }

    // Event listener for dropdown change
    if (dropdown) {
        dropdown.addEventListener('change', (e) => {
            if (e.target.value) {
                showService(e.target.value);
            }
        });
    }

    // Event listener for service list item clicks
    document.querySelectorAll('.service-item-index').forEach(item => {
        item.addEventListener('click', function () {
            const serviceId = this.getAttribute('data-service');
            showService(serviceId);
        });
    });

    // Show the default service on page load
    showService('service1');
});
