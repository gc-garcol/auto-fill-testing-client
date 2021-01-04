class Dropdown {
    constructor() {

    }

    /**
     * 
     * @param {Array} options 
     */
    render(dom, options, callback) {

        console.log("go here");
        console.log(options);

        let optionHtml = [];
        options.forEach(option => {
            optionHtml.push(`<option value="${option}">${option}</option>`)
        });

        dom.innerHTML = `
        <label for="js-dropdown">Choose a car:</label>

        <select id="js-dropdown" name="js-dropdown">
        ${optionHtml.join("")}
        </select>
        `; 

        callback && callback();
    }
}

module.exports = Dropdown;