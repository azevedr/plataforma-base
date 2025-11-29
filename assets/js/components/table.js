// COMPONENTE DE TABELA REUTILIZÁVEL
// ---------------------------------

export function Table({ columns = [], data = [] }) {

    // Criar tabela
    const table = document.createElement("table");
    table.classList.add("table-component");

    // Criar header
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    columns.forEach(col => {
        const th = document.createElement("th");
        th.textContent = col.label;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Criar corpo da tabela
    const tbody = document.createElement("tbody");

    data.forEach(item => {
        const row = document.createElement("tr");

        columns.forEach(col => {
            const td = document.createElement("td");
            td.textContent = item[col.field] ?? "";
            row.appendChild(td);
        });

        tbody.appendChild(row);
    });

    table.appendChild(tbody);

    return table;
}
