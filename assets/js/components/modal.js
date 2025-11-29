// COMPONENTE MODAL REUTILIZÁVEL
// ---------------------------------

export function openModal({ title = "Título", message = "", onConfirm = null, onCancel = null }) {

    // Criar overlay
    const overlay = document.createElement("div");
    overlay.classList.add("modal-overlay");

    // Criar modal
    const modal = document.createElement("div");
    modal.classList.add("modal-box");

    modal.innerHTML = `
        <h3>${title}</h3>
        <p>${message}</p>

        <div class="modal-buttons">
            <button class="btn btn-primary" id="modalConfirm">Confirmar</button>
            <button class="btn btn-secondary" id="modalCancel">Cancelar</button>
        </div>
    `;

    // Adicionar no DOM
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Eventos dos botões
    document.getElementById("modalConfirm").onclick = () => {
        if (onConfirm) onConfirm();
        closeModal();
    };

    document.getElementById("modalCancel").onclick = () => {
        if (onCancel) onCancel();
        closeModal();
    };
}

export function closeModal() {
    const overlay = document.querySelector(".modal-overlay");
    if (overlay) overlay.remove();
}
