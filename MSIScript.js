function uploadDocument() {
    const fileInput = document.getElementById('fileInput');
    const uploadedCards = document.getElementById('uploaded-cards');

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const card = createDocumentCard(file);
        uploadedCards.appendChild(card);
        clearFileInput(fileInput);
    } else {
        alert('Please select a document to upload.');
    }
}

function createDocumentCard(file) {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const fileName = document.createElement('p');
    fileName.classList.add('card-title');
    fileName.textContent = `Document: ${file.name}`;

    const viewButton = document.createElement('a');
    viewButton.classList.add('btn', 'btn-primary');
    viewButton.href = URL.createObjectURL(file);
    viewButton.target = '_blank';
    viewButton.textContent = 'View';

    const downloadButton = document.createElement('a');
    downloadButton.classList.add('btn', 'btn-success', 'ml-2');
    downloadButton.href = URL.createObjectURL(file);
    downloadButton.download = file.name;
    downloadButton.textContent = 'Download';

    cardBody.appendChild(fileName);
    cardBody.appendChild(viewButton);
    cardBody.appendChild(downloadButton);
    card.appendChild(cardBody);

    return card;
}

function clearFileInput(input) {
    input.value = '';
}
