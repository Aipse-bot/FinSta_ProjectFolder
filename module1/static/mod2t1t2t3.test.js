// Unit tests for mod1.js using Jest.
describe("mod2t1t2 Business Type Selection", () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <div id="modal" class="hidden">
                <h5 id="modalTitle"></h5>
                <div id="modalDescription"></div>
                <ul id="modalSuggestedNames"></ul>
                <ul id="modalBusinessGoals"></ul>
                <input id="name" />
                <input id="businessCategory" />
                <input id="businessType" />
            </div>
        `;
        // Mock sessionStorage
        global.sessionStorage = {
            store: {},
            setItem(key, value) { this.store[key] = value; },
            getItem(key) { return this.store[key]; }
        };
    });

    test("openModal populates modal with correct data", () => {
        openModal(0);
        expect(document.getElementById("modalTitle").innerText).toBe("Tech Repair and Support Service");
        expect(document.getElementById("modalDescription").innerText).toBe(
            "Providing quick fixes and troubleshooting for gadgets like smartphones, laptops, and other electronics."
        );
        expect(document.getElementById("modalSuggestedNames").innerHTML).toContain("Reboot Rescue");
        expect(document.getElementById("modalBusinessGoals").innerHTML).toContain("Build a reputation");
        expect(document.getElementById("businessCategory").value).toBe("Tech");
        expect(document.getElementById("businessType").value).toBe("Tech Repair and Support Service");
        expect(document.getElementById("name").classList.contains("hidden")).toBe(true);
        expect(document.getElementById("modal").classList.contains("hidden")).toBe(false);
        expect(sessionStorage.getItem("selectedBusinessOption")).toBe("0");
    });

    test("openModal handles invalid optId", () => {
        const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});
        openModal(999);
        expect(alertSpy).toHaveBeenCalledWith("An error occurred while loading the selection. Please try again.");
        alertSpy.mockRestore();
    });

    test("closeModal resets modal and form", () => {
        openModal(0);
        closeModal();
        expect(document.getElementById("modalTitle").innerText).toBe("");
        expect(document.getElementById("modalDescription").innerText).toBe("");
        expect(document.getElementById("modalSuggestedNames").innerHTML).toBe("");
        expect(document.getElementById("modalBusinessGoals").innerHTML).toBe("");
        expect(document.getElementById("businessCategory").value).toBe("");
        expect(document.getElementById("businessType").value).toBe("");
        expect(document.getElementById("modal").classList.contains("hidden")).toBe(true);
    });
});