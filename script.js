document.addEventListener('DOMContentLoaded', () => {
    // Select the elements
    const hamburger = document.querySelector('.hamburger');
    const menuList = document.querySelector('.menu-list');
    const header = document.querySelector('.header');
    const dropdown = document.getElementById('service-dropdown')
    const enquireButton = document.getElementById("enquire-button");
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    

    // Toggle the menu and hamburger icon state on click
    hamburger.addEventListener('click', () => {
        const headerHeight = header.offsetHeight; // Get the height of the header
        menuList.style.top = `${headerHeight}px`; // Set the menu to start after the header
        menuList.classList.toggle('show');
        hamburger.classList.toggle('active');
    });

    if(enquireButton) {
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
        const serviceItems = document.querySelectorAll('.service-item-index');
        serviceItems.forEach(item => item.classList.remove('selected'));

        // Highlight the clicked service item
        const selectedItem = document.querySelector(`.service-item-index[onclick="showService('${serviceId}')"]`);
        selectedItem.classList.add('selected');
    }

    dropdown.addEventListener('change', (e) => {
        if(e && e.target && e.target.value) {
            showService(e?.target?.value)
        }
    });
    showService('service1'); // Ensure service1 is visible
    const firstService = document.getElementById('service1');
    firstService.style.display = 'block'; // Explicitly show it
});








