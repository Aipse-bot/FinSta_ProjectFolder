let selectedOptionNumber = null;
let option1;
let option2;
let option3;
let businessType = null
let businessCategory = null

let id;
let options = [
    {
        category: "Tech",
        type: "Tech Repair and Support Service",
        descr: "Providing quick fixes and troubleshooting for gadgets like smartphones, laptops, and other electronics.",
        suggested_name: [
            "Reboot Rescue",
            "TechFix Haven",
            "GadgetGuard",
        ],
        business_goals:[
            "Build a reputation for reliable and affordable gadget repairs.",
            "Offer quick turnaround times to cater to urgent repair needs.",
            "Develop a subscription service for tech maintenance and troubleshooting.",
        ]
    },
    {
        category: "Tech",
        type: "IoT Device Development",
        descr: "Creating smart gadgets for homes or businesses, such as security systems, smart appliances, or wearable devices.",
        suggested_name: [
            "SmartSphere",
            "LinkLogic Labs",
            "IoT Nexus",
        ],
        business_goals:[
            "Innovate cutting-edge IoT solutions for smart homes and businesses.",
            "Provide customizable IoT devices tailored to client needs.",
            "stablish partnerships with businesses to integrate IoT systems."
        ]
    },
    {
        category: "Tech",
        type: "Web Development Services",
        descr: "Offering tailored solutions for individuals and businesses that require unique web designs and functionalities.",
        suggested_name: [
            "WebCrafters Hub",
            "PixelPerfect Solutions",
            "CodeCanvas ",
        ],
        business_goals:[
            "Specialize in creating unique, tailor-made websites for small businesse.s",
            "Expand into offering long-term maintenance and hosting services.",
            "Develop expertise in niche areas like e-commerce or portfolio websites."
        ]
    },
    {
        category: "Food",
        type: "Specialty Coffee Shop",
        descr: "A café that serves rare coffee blends and offers a curated experience for coffee enthusiasts.",
        suggested_name: [
            "Brew Haven",
            "The Roastery",
            "Caffeine Chronicle",
        ],
        business_goals:[
            "Create a loyal customer base by focusing on rare and premium coffee blends.",
            "Host coffee workshops and tasting sessions to engage coffee enthusiasts.",
            "Design an inviting space with Instagram-worthy aesthetics."
        ]
    },
    {
        category: "Food",
        type: "Artisan Bakery",
        descr: "Selling homemade bread, cakes, and pastries with premium ingredients and creative designs.",
        suggested_name: [
            "Whisk & Wonder ",
            "Golden Crust Bakery",
            "Flourish Bakes ",
        ],
        business_goals:[
            "Focus on innovation by offering seasonal or themed baked goods.",
            "Build a reputation for using premium, organic ingredients.",
            "Develop an online ordering system for convenient customer access.",
        ]
    },
    {
        category: "Food",
        type: "Food Truck Business",
        descr: "Offering delicious, mobile meals with a unique theme or specialty cuisine.",
        suggested_name: [
            "Rolling Flavors",
            "Bite on Wheels",
            "Street Treats",
        ],
        business_goals:[
            "Establish a recognizable food truck brand by offering unique cuisine.",
            "Create a strong social media presence to attract customers to new locations",
            "Organize pop-up events to increase visibility and foot traffic.",
        ]
    },
    {
        category: "Clothing",
        type: "Custom Tailored Clothing Service",
        descr: "Offering personalized fitting and design choices for a luxury, bespoke experience.",
        suggested_name: [
            "Stitch & Style",
            "Your Fit Studio",
            "The Bespoke Threa",
        ],
        business_goals:[
            "Build a reputation for high-quality craftsmanship and bespoke designs.",
            "Offer a seamless virtual fitting service for busy clients.",
            "Partner with events or bridal shops for special occasion attire",
        ]
    },
    {
        category: "Clothing",
        type: "Activewear Line",
        descr: "Creating stylish and functional gym and sports clothing for both comfort and performance.",
        suggested_name: [
            "FlexFit Apparel",
            "ActiVate",
            "Momentum Gear",
        ],
        business_goals:[
            "Focus on performance-driven designs with eco-friendly materials.",
            "Develop collaborations with fitness influencers to promote the brand.",
            "Expand into customizable activewear options for teams or individuals.",
        ]
    },
    {
        category: "Clothing",
        type: "Online T-Shirt Printing",
        descr: "Offering customizable t-shirts with unique prints for personal or business use.",
        suggested_name: [
            "Inked Threads",
            "Printify",
            "Tee-lor Swift ",
        ],
        business_goals:[
            "Offer high-quality prints with fast delivery times.",
            "Develop an intuitive online customization platform for easy user experience.",
            "Partner with local artists to feature exclusive designs.",
        ]
    },
    {
        category: "Expert",
        type: "Spa and Massage Center",
        descr: "Focusing on relaxation and therapeutic treatments to improve well-being.",
        suggested_name: [
            "Serenity Spa",
            "Harmony Haven",
            "Ethereal Touch Spa",
        ],
        business_goals:[
            "Deliver exceptional service focused on relaxation and wellness.",
            "Expand offerings to include packages for couples or groups.",
            "Build trust by using organic and eco-friendly products.",
        ]
    },
    {
        category: "Expert",
        type: "Home Cleaning Service",
        descr: "Offering reliable and efficient cleaning packages for busy households or businesses.",
        suggested_name: [
            "Go Sparkle",
            "Friday Cleaners",
            "Ms. Spotless ",
        ],
        business_goals:[
            "Offer flexible and personalized cleaning packages for diverse needs.",
            "Focus on eco-friendly and non-toxic cleaning solutions.",
            "Build a strong online booking platform for convenience.",
        ]
    },
    {
        category: "Expert",
        type: "Interior Design and Home Staging",
        descr: "Helping homeowners or real estate agents enhance their spaces for better functionality or market appeal.",
        suggested_name: [
            "Dream Spaces",
            "Refined Interiors",
            "Style & Stage Studio",
        ],
        business_goals:[
            "Specialize in creating practical yet aesthetically appealing designs.",
            "Expand services to include virtual staging for online real estate listings.",
            "Build a portfolio showcasing transformations to attract clients.",
        ]
    },
]

// function openModal(optId) {
//     id = optId;

//     // ✅ Set modal title and description dynamically
//     document.getElementById('modal').innerText = options[id].type;
//     document.querySelector('#modal .modal-body').innerText = options[id].descr;

//     // ✅ Show modal using Tailwind classes
//     document.getElementById('modal').classList.remove("hidden");

//     choiceT1T2(optId);  // Call additional logic if needed

//     console.log(`Click option of ${optId}`);
//     selectedOptionNumber = optId;
// }
function openModal(optId) {
    // Get modal elements
    document.getElementById("modalTitle").innerText = options[optId].type;
    document.getElementById("modalBody").innerText = options[optId].descr;

    // Assign selected values to hidden inputs
    document.getElementById("businessCategory").value = options[optId].category;
    document.getElementById("businessType").value = options[optId].type;

    // Show modal
    document.getElementById("modal").classList.remove("hidden");

    choiceT1T2(optId); // Call additional logic if needed
    console.log(`Clicked option: ${optId}`);
}

function closeModal() {
    document.getElementById("modal").classList.add("hidden");
}
function closeModal() {
    document.getElementById("modal").classList.add("hidden");
}


function choiceT1T2(choiceID){
    let id = choiceID;
    console.log(`Option 1: ${id}`)
    option1 = id;
    sessionStorage.setItem('option1', option1);
    let storedOption1 = sessionStorage.getItem('option1');
    console.log(storedOption1)

}

function choiceT3(choiceID){
    let id = choiceID;
    console.log(`Option 2: ${id}`)
    option2 = id;
    sessionStorage.setItem('option2', option2);
    let storedOption2 = sessionStorage.getItem('option2');
    console.log(storedOption2)
}

function choiceT4(choiceID){
    let id = choiceID;
    console.log(`Option 3: ${id}`)
    option3 = id;
    sessionStorage.setItem('option3', option3);
    let storedOption3 = sessionStorage.getItem('option3');
    console.log(storedOption3)
}


