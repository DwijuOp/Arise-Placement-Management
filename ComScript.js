document.addEventListener('DOMContentLoaded', function () {
    const companies = [
        { name: 'Micro-Star International', description: 'a world leading gaming brand, MSI is the most trusted name in gaming and eSports', link: 'MSIindex.html', image: '840px-Msi-ofis.jpg' },
        { name: 'Infosys', description: 'a global leader in next-generation digital services and consulting', link: 'Infosysindex.html', image: 'Infosys_(4911287704).jpg' },
        { name: 'Ford', description: 'Ford Motor Co(Ford) is a global leader in next-generation digital services and consulting', link: 'Fordindex.html', image: 'images.jpg' },
    ];

    const companyContainer = document.getElementById('company-container');

    companies.forEach(function (company) {
        const card = createCard(company);
        companyContainer.appendChild(card);
    });
});

function createCard(company) {
    const card = document.createElement('div');
    card.classList.add('card', 'mb-4', 'shadow');

    const img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = company.image;
    img.alt = `${company.name} Image`;
    img.style.height='300px';
    img.style.width='500px';

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const heading = document.createElement('h5');
    heading.classList.add('card-title');
    heading.textContent = company.name;

    const description = document.createElement('p');
    description.classList.add('card-text');
    description.textContent = company.description;

    const linkButton = document.createElement('a');
    linkButton.classList.add('btn', 'btn-primary');
    linkButton.href = company.link;
    linkButton.textContent = 'Apply';

    card.appendChild(img);
    cardBody.appendChild(heading);
    cardBody.appendChild(description);
    cardBody.appendChild(linkButton);
    card.appendChild(cardBody);

    return card;
}
