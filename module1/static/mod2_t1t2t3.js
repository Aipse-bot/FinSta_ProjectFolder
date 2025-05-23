/**
 * Configuration object containing business type options for mod2t1t2.
 * @type {Array<{category: string, type: string, descr: string, suggested_name: string[], business_goals: string[]}>}
 */
const businessOptions = [
    {
        category: "Tech",
        type: "Tech Repair and Support Service",
        descr: "Providing quick fixes and troubleshooting for gadgets like smartphones, laptops, and other electronics.",
        suggested_name: ["Reboot Rescue", "TechFix Haven", "GadgetGuard"],
        business_goals: [
            "Build a reputation for reliable and affordable gadget repairs.",
            "Offer quick turnaround times to cater to urgent repair needs.",
            "Develop a subscription service for tech maintenance and troubleshooting."
        ]
    },
    {
        category: "Tech",
        type: "IoT Device Development",
        descr: "Creating smart gadgets for homes or businesses, such as security systems, smart appliances, or wearable devices.",
        suggested_name: ["SmartSphere", "LinkLogic Labs", "IoT Nexus"],
        business_goals: [
            "Innovate cutting-edge IoT solutions for smart homes and businesses.",
            "Provide customizable IoT devices tailored to client needs.",
            "Establish partnerships with businesses to integrate IoT systems."
        ]
    },
    {
        category: "Tech",
        type: "Web Development Services",
        descr: "Offering tailored solutions for individuals and businesses that require unique web designs and functionalities.",
        suggested_name: ["WebCrafters Hub", "PixelPerfect Solutions", "CodeCanvas"],
        business_goals: [
            "Specialize in creating unique, tailor-made websites for small businesses.",
            "Expand into offering long-term maintenance and hosting services.",
            "Develop expertise in niche areas like e-commerce or portfolio websites."
        ]
    },
    {
        category: "Food",
        type: "Specialty Coffee Shop",
        descr: "A café that serves rare coffee blends and offers a curated experience for coffee enthusiasts.",
        suggested_name: ["Brew Haven", "The Roastery", "Caffeine Chronicle"],
        business_goals: [
            "Create a loyal customer base by focusing on rare and premium coffee blends.",
            "Host coffee workshops and tasting sessions to engage coffee enthusiasts.",
            "Design an inviting space with Instagram-worthy aesthetics."
        ]
    },
    {
        category: "Food",
        type: "Artisan Bakery",
        descr: "Selling homemade bread, cakes, and pastries with premium ingredients and creative designs.",
        suggested_name: ["Whisk & Wonder", "Golden Crust Bakery", "Flourish Bakes"],
        business_goals: [
            "Focus on innovation by offering seasonal or themed baked goods.",
            "Build a reputation for using premium, organic ingredients.",
            "Develop an online ordering system for convenient customer access."
        ]
    },
    {
        category: "Food",
        type: "Food Truck Business",
        descr: "Offering delicious, mobile meals with a unique theme or specialty cuisine.",
        suggested_name: ["Rolling Flavors", "Bite on Wheels", "Street Treats"],
        business_goals: [
            "Establish a recognizable food truck brand by offering unique cuisine.",
            "Create a strong social media presence to attract customers to new locations.",
            "Organize pop-up events to increase visibility and foot traffic."
        ]
    },
    {
        category: "Clothing",
        type: "Custom Tailored Clothing Service",
        descr: "Offering personalized fitting and design choices for a luxury, bespoke experience.",
        suggested_name: ["Stitch & Style", "Your Fit Studio", "The Bespoke Thread"],
        business_goals: [
            "Build a reputation for high-quality craftsmanship and bespoke designs.",
            "Offer a seamless virtual fitting service for busy clients.",
            "Partner with events or bridal shops for special occasion attire."
        ]
    },
    {
        category: "Clothing",
        type: "Activewear Line",
        descr: "Creating stylish and functional gym and sports clothing for both comfort and performance.",
        suggested_name: ["FlexFit Apparel", "ActiVate", "Momentum Gear"],
        business_goals: [
            "Focus on performance-driven designs with eco-friendly materials.",
            "Develop collaborations with fitness influencers to promote the brand.",
            "Expand into customizable activewear options for teams or individuals."
        ]
    },
    {
        category: "Clothing",
        type: "Online T-Shirt Printing",
        descr: "Offering customizable t-shirts with unique prints for personal or business use.",
        suggested_name: ["Inked Threads", "Printify", "Tee-lor Swift"],
        business_goals: [
            "Offer high-quality prints with fast delivery times.",
            "Develop an intuitive online customization platform for easy user experience.",
            "Partner with local artists to feature exclusive designs."
        ]
    },
    {
        category: "Expert",
        type: "Spa and Massage Center",
        descr: "Focusing on relaxation and therapeutic treatments to improve well-being.",
        suggested_name: ["Serenity Spa", "Harmony Haven", "Ethereal Touch Spa"],
        business_goals: [
            "Deliver exceptional service focused on relaxation and wellness.",
            "Expand offerings to include packages for couples or groups.",
            "Build trust by using organic and eco-friendly products."
        ]
    },
    {
        category: "Expert",
        type: "Home Cleaning Service",
        descr: "Offering reliable and efficient cleaning packages for busy households or businesses.",
        suggested_name: ["Go Sparkle", "Friday Cleaners", "Ms. Spotless"],
        business_goals: [
            "Offer flexible and personalized cleaning packages for diverse needs.",
            "Focus on eco-friendly and non-toxic cleaning solutions.",
            "Build a strong online booking platform for convenience."
        ]
    },
    {
        category: "Expert",
        type: "Interior Design and Home Staging",
        descr: "Helping homeowners or real estate agents enhance their spaces for better functionality or market appeal.",
        suggested_name: ["Dream Spaces", "Refined Interiors", "Style & Stage Studio"],
        business_goals: [
            "Specialize in creating practical yet aesthetically appealing designs.",
            "Expand services to include virtual staging for online real estate listings.",
            "Build a portfolio showcasing transformations to attract clients."
        ]
    }
];

/**
 * Opens the modal and populates it with details for the selected business type.
 * @param {number} optId - The index of the selected business option.
 */
function openModal(optId) {
    try {
        if (!businessOptions[optId]) {
            throw new Error(`Invalid option ID: ${optId}`);
        }

        const option = businessOptions[optId];
        const modal = document.getElementById("modal");
        const modalTitle = document.getElementById("modalTitle");
        const modalDescription = document.getElementById("modalDescription");
        const modalSuggestedNames = document.getElementById("modalSuggestedNames");
        const modalBusinessGoals = document.getElementById("modalBusinessGoals");
        const nameInput = document.getElementById("name");
        const categoryInput = document.getElementById("businessCategory");
        const typeInput = document.getElementById("businessType");

        // Populate modal content
        modalTitle.innerText = option.type;
        modalDescription.innerText = option.descr;
        modalSuggestedNames.innerHTML = option.suggested_name.map(name => `<li>${name}</li>`).join('');
        modalBusinessGoals.innerHTML = option.business_goals.map(goal => `<li>${goal}</li>`).join('');
        nameInput.classList.add("hidden");
        nameInput.removeAttribute("required");
        categoryInput.value = option.category;
        typeInput.value = option.type;

        // Show modal
        modal.classList.remove("hidden");
        modal.focus(); // Accessibility: focus on modal

        // Store selection in sessionStorage for mod2t3 and mod2t4
        sessionStorage.setItem('selectedBusinessOption', optId);
        console.log(`Selected option: ${optId}, Category: ${option.category}, Type: ${option.type}`);
    } catch (error) {
        console.error(`Error opening modal: ${error.message}`);
        alert("An error occurred while loading the selection. Please try again.");
    }
}

/**
 * Closes the modal and resets form fields.
 */
function closeModal() {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalSuggestedNames = document.getElementById("modalSuggestedNames");
    const modalBusinessGoals = document.getElementById("modalBusinessGoals");
    const categoryInput = document.getElementById("businessCategory");
    const typeInput = document.getElementById("businessType");

    modalTitle.innerText = "";
    modalDescription.innerText = "";
    modalSuggestedNames.innerHTML = "";
    modalBusinessGoals.innerHTML = "";
    categoryInput.value = "";
    typeInput.value = "";
    modal.classList.add("hidden");
}

/**
 * Handles form submission with loading state and error handling.
 */
document.getElementById("playerForm")?.addEventListener("submit", async function(event) {
    event.preventDefault();
    const submitButton = document.getElementById("submitButton");
    const submitText = document.getElementById("submitText");
    const loadingText = document.getElementById("loadingText");

    submitButton.disabled = true;
    submitText.classList.add("hidden");
    loadingText.classList.remove("hidden");

    try {
        const response = await fetch(this.action, {
            method: "POST",
            body: new FormData(this),
            headers: {
                "X-CSRFToken": document.querySelector("[name=csrfmiddlewaretoken]").value
            }
        });

        if (!response.ok) {
            throw new Error("Failed to submit selection.");
        }

        // Redirect to next module (mod2t3)
        window.location.href = "{% url 'mod2t3' %}";
    } catch (error) {
        console.error(`Submission error: ${error.message}`);
        alert("Failed to save your selection. Please try again.");
    } finally {
        submitButton.disabled = false;
        submitText.classList.remove("hidden");
        loadingText.classList.add("hidden");
    }
});

// Accessibility: Close modal on Escape key
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

// Accessibility: Trap focus within modal
document.getElementById("modal")?.addEventListener("keydown", function(event) {
    const focusableElements = this.querySelectorAll("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])");
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.key === "Tab") {
        if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
        }
    }
});

// Team collaboration note: This module integrates with mod2t3 (business goals) and mod2t4 (business name) by passing selected option via sessionStorage.