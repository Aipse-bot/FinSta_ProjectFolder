function openModal(optId){

    let id = optId;
    // TO DO:
    //2.) store this 'options' array into the django data base
    //3s.) use it to dynamically display 'innerText = options[id].type' & 'innerText = options[id].descr' see the usage of it below
    let options = [
        {
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
            type: "Activewear Line",
            descr: "reating stylish and functional gym and sports clothing for both comfort and performance.",
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

    document.getElementById('staticBackdropLabel').innerText = options[id].type;
    document.querySelector('#staticBackdrop .modal-body').innerText = options[id].descr;
    var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
    myModal.show();

    console.log(`click option of ${optId}`)

}

function showAlert() {
    alert("You have selected a business goal!");
    // You can add more sophisticated logic here if needed.
  }