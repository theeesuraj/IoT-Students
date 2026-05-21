const searchBox = document.getElementById("searchBox");
const branchFilter = document.getElementById("branchFilter");
const rows = document.querySelectorAll("tbody tr");

function filterTable() {
    const searchValue = searchBox.value.toLowerCase();
    const branchValue = branchFilter.value;

    rows.forEach(row => {
        const name = row.cells[0].innerText.toLowerCase();
        const branch = row.cells[1].innerText;

        const matchName = name.includes(searchValue);
        const matchBranch = branchValue === "" || branch === branchValue;

        if (matchName && matchBranch) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}

searchBox.addEventListener("keyup", filterTable);
branchFilter.addEventListener("change", filterTable);