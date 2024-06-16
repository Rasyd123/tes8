document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { name: 'Diamond Ring', price: '$5000', image: '9.jpeg' },
        { name: 'Diamond Ring', price: '$5000', image: '9.jpeg' },
        { name: 'Diamond Earrings', price: '$3000', image: '9.jpeg' },
        { name: 'Diamond Ring', price: '$9000', image: '9.jpeg' },
    ];

    const productContainer = document.querySelector('.product-list');
    const whatsappNumber = '62881022401240'; // Replace with your WhatsApp number

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        
        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.name;

        const productName = document.createElement('h3');
        productName.textContent = product.name;

        const productPrice = document.createElement('p');
        productPrice.textContent = product.price;

        const whatsappLink = document.createElement('a');
        whatsappLink.href = `https://wa.me/${whatsappNumber}?text=I%20am%20interested%20in%20buying%20the%20${encodeURIComponent(product.name)}`;
        whatsappLink.className = 'whatsapp-link';
        whatsappLink.textContent = 'Buy on WhatsApp';

        productElement.appendChild(productImage);
        productElement.appendChild(productName);
        productElement.appendChild(productPrice);
        productElement.appendChild(whatsappLink);

        productContainer.appendChild(productElement);
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for your message!');
        contactForm.reset();
    });
});
