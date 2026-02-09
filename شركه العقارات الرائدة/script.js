const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
const searchBtn = document.getElementById('searchBtn');
const contactForm = document.getElementById('contactForm');
const propertiesGrid = document.getElementById('propertiesGrid');

const properties = [
    {
        id: 1,
        title: 'فيلا فاخرة مع حديقة',
        location: 'الرياض، حي النرجس',
        type: 'فيلا',
        price: '3,500,000',
        bedrooms: 5,
        bathrooms: 4,
        area: 450,
        emoji: '🏡',
        badge: 'جديد'
    },
    {
        id: 2,
        title: 'شقة عصرية في برج سكني',
        location: 'جدة، حي الروضة',
        type: 'شقة',
        price: '1,200,000',
        bedrooms: 3,
        bathrooms: 2,
        area: 180,
        emoji: '🏢',
        badge: 'مميز'
    },
    {
        id: 3,
        title: 'مكتب تجاري في مركز الأعمال',
        location: 'الدمام، شارع الملك فهد',
        type: 'مكتب',
        price: '850,000',
        bedrooms: null,
        bathrooms: 2,
        area: 120,
        emoji: '🏬',
        badge: 'فرصة'
    },
    {
        id: 4,
        title: 'شقة بإطلالة بحرية رائعة',
        location: 'جدة، كورنيش جدة',
        type: 'شقة',
        price: '1,800,000',
        bedrooms: 4,
        bathrooms: 3,
        area: 220,
        emoji: '🌊',
        badge: 'حصري'
    },
    {
        id: 5,
        title: 'فيلا دوبلكس حديثة',
        location: 'الرياض، حي الياسمين',
        type: 'فيلا',
        price: '2,900,000',
        bedrooms: 6,
        bathrooms: 5,
        area: 380,
        emoji: '🏰',
        badge: 'جديد'
    },
    {
        id: 6,
        title: 'أرض تجارية على الشارع الرئيسي',
        location: 'الخبر، شارع الأمير محمد',
        type: 'أرض',
        price: '2,200,000',
        bedrooms: null,
        bathrooms: null,
        area: 600,
        emoji: '🏗️',
        badge: 'استثمار'
    }
];

mobileMenuBtn.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

function showProperties() {
    propertiesGrid.innerHTML = '';

    for (let i = 0; i < properties.length; i++) {
        const property = properties[i];

        const card = document.createElement('div');
        card.className = 'property-card';

        let featuresHTML = '';
        if (property.bedrooms) {
            featuresHTML += '🛏️ ' + property.bedrooms + ' غرف نوم • ';
        }
        if (property.bathrooms) {
            featuresHTML += '🚿 ' + property.bathrooms + ' حمامات • ';
        }
        featuresHTML += '📐 ' + property.area + ' م²';

        card.innerHTML = `
            <div class="property-image">
                <span>${property.emoji}</span>
                <div class="property-badge">${property.badge}</div>
            </div>
            <div class="property-info">
                <h3 class="property-title">${property.title}</h3>
                <p class="property-location">📍 ${property.location}</p>
                <div class="property-features">
                    ${featuresHTML}
                </div>
                <p class="property-price">${property.price} ريال</p>
            </div>
        `;

        propertiesGrid.appendChild(card);
    }
}

showProperties();

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (name && email && phone && message) {
        alert('شكراً ' + name + '!\n\nتم إرسال رسالتك بنجاح.');
        contactForm.reset();
    } else {
        alert('الرجاء ملء جميع الحقول');
    }
});
