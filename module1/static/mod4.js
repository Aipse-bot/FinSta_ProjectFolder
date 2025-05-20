        let companyHealthPercentage = 75;
        let marketDominationPercentage = 25;
        let customerSatisfactionPercentage = 50;
        let balancedBooksPercentage = 33;

        let employees = 10;
        let balance = 15000;
        let businessName = "Stellar Tech";
        let businessType = "Software Development"
        let icon = "🚀"

        let actionsVisible = false;
    let companyHealthVisible = false;
    let currentActionPoints = 4;

    function updateActionPoints(cost) {
        currentActionPoints -= cost;
        document.getElementById("actionPoints").textContent = currentActionPoints;
    }

    function updateCompanyHealth(value) {
        companyHealthPercentage = value;
        const bar = document.getElementById("companyHealthBar");
        bar.style.width = `${value}%`;
    }
    function updateMarketDomination(value) {
        marketDominationPercentage = value;
        const bar = document.getElementById("marketDominationBar");
        bar.style.width = `${value}%`;
    }
    function updateCustomerSatisfaction(value) {
        customerSatisfactionPercentage = value;
        const bar = document.getElementById("customerSatisfactionBar");
        bar.style.width = `${value}%`;
    }
    function updateBalancedBooks(value) {
        balancedBooksPercentage = value;
        const bar = document.getElementById("balancedBooksBar");
        bar.style.width = `${value}%`;
    }

    function updateBalance(value){
        balance = value;
        document.getElementById("accountBalance").textContent = `$${balance}`;
    }
    function updateEmployeeCount(value){
        employees = value
        document.getElementById("employeeCount").textContent = employees;
    }


    function toggleActions() {
        actionsVisible = !actionsVisible;
        let actionsDropdown = document.getElementById("actionsDropdown");
        actionsDropdown.classList.toggle("hidden", !actionsVisible);
    }



    function openDropDown(n) {
        let el = document.getElementById(`dropdownMenu${n}`)
        el.classList.toggle('hidden')
    }
    let latestAction = "";
    function openModal(str) {
        latestAction = str;
        let modal = document.getElementById('modalBackdrop')
        modal.querySelector('h2').textContent = str
        modal.classList.remove('hidden');
        businessLog(str);
    }

    function closeModal(performAction) {
        document.getElementById('modalBackdrop').classList.add('hidden');
        if(performAction){
            handleAction(latestAction)
        }
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        if (randomNumber <= 50) {
            openRandomModal();
        }

    }
    function openRandomModal() {
        setTimeout(() => {
            let modal = document.getElementById('randomModal');
            modal.querySelector('h2').textContent = "Random Event";
            modal.classList.remove('hidden');
        }, 700);
    }

    function closeModalRandomModal() {
        document.getElementById('randomModal').classList.add('hidden');
        businessLog("Event")
    }

    function businessLog(action) {
        let log = document.getElementById('activity-log');

        let newEntry = document.createElement("div");
        newEntry.className = "bg-amber-300 p-3 rounded-md text-sm";
        newEntry.textContent = action;

        log.prepend(newEntry);

        const maxEntries = 5;
        if (log.children.length > maxEntries) {
            log.removeChild(log.lastChild);
        }
    }

    function handleAction(action){
        switch(action){
            case "{Step 1}":
                updateBalancedBooks(Math.max(0, balancedBooksPercentage - 10));
                updateActionPoints(1);
                updateBalance(balance + 1000);
                break;
            case "{Step 2}":
                updateBalancedBooks(Math.max(0, balancedBooksPercentage - 5));
                updateActionPoints(1);
                updateBalance(balance + 500);
                break;
            case "{Step 3}":
                updateBalancedBooks(Math.max(0, balancedBooksPercentage - 15));
                updateActionPoints(1);
                updateBalance(balance + 1500);
                break;
            case "Engage with Customers":
                updateCustomerSatisfaction(Math.min(100, customerSatisfactionPercentage + 10));
                updateActionPoints(1);
                break;
            case "Post on Social Media":
                updateMarketDomination(Math.min(100, marketDominationPercentage + 5));
                updateActionPoints(1);
                break;
            case "Local Outreach":
                updateEmployeeCount(employees + 3);
                updateActionPoints(2);
                break;
            case "Online Websites":
                updateEmployeeCount(employees + 5);
                updateActionPoints(2);
                break;
            case "Recruiter":
                updateEmployeeCount(employees + 8);
                updateActionPoints(3);
                break;
             case "Fire a Person":
                if(employees > 0){
                    updateEmployeeCount(employees - 1);
                }
                updateActionPoints(1);
                break;
            case "Hire a Lawyer":
                updateBalancedBooks(Math.min(100, balancedBooksPercentage + 20));
                updateActionPoints(2);
                break;
            case "Purchase Business Insurance":
                updateCompanyHealth(Math.min(100, companyHealthPercentage + 10));
                updateActionPoints(2);
                break;
            case "Marketing":
                updateMarketDomination(Math.min(100, marketDominationPercentage + 10));
                updateActionPoints(2);
                break;
            default:
                break;
        }
    }