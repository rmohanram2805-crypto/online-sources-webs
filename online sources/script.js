// Course data
const courses = {
    'python': {
        name: 'Python Programming',
        price: 'Rs 350/month',
        icon: '🐍'
    },
    'java': {
        name: 'Java Programming',
        price: 'Rs 350/month',
        icon: '☕'
    },
    'python-dsa': {
        name: 'Python DSA',
        price: 'Rs 350/month',
        icon: '📊'
    }
};

// Initialize booking form if on booking page
document.addEventListener('DOMContentLoaded', function() {
    // Handle URL parameters for pre-selecting course
    const urlParams = new URLSearchParams(window.location.search);
    const courseParam = urlParams.get('course');
    
    if (courseParam && document.getElementById('course')) {
        document.getElementById('course').value = courseParam;
        updateBookingSummary();
    }

    // Booking form handling
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBookingSubmit);
        
        // Update summary when course changes
        const courseSelect = document.getElementById('course');
        if (courseSelect) {
            courseSelect.addEventListener('change', updateBookingSummary);
        }
    }

    // Load booking history if on history page
    if (window.location.pathname.includes('booking-history.html')) {
        loadBookingHistory();
    }
});

// Update booking summary
function updateBookingSummary() {
    const courseSelect = document.getElementById('course');
    const summaryCourse = document.getElementById('summaryCourse');
    const summaryPrice = document.getElementById('summaryPrice');
    
    if (courseSelect && summaryCourse && summaryPrice) {
        const selectedCourse = courseSelect.value;
        if (selectedCourse && courses[selectedCourse]) {
            summaryCourse.textContent = courses[selectedCourse].name;
            summaryPrice.textContent = courses[selectedCourse].price;
        } else {
            summaryCourse.textContent = '-';
            summaryPrice.textContent = 'Rs 350/month';
        }
    }
}

// Handle booking form submission
function handleBookingSubmit(e) {
    e.preventDefault();
    
    const formData = {
        id: Date.now().toString(),
        course: document.getElementById('course').value,
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        startDate: document.getElementById('startDate').value,
        paymentMethod: document.getElementById('paymentMethod').value,
        bookingDate: new Date().toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }),
        bookingTime: new Date().toLocaleTimeString('en-IN')
    };

    // Validate form
    if (!formData.course || !formData.name || !formData.email || !formData.phone || !formData.startDate || !formData.paymentMethod) {
        alert('Please fill in all required fields.');
        return;
    }

    // Save booking to localStorage
    let bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push(formData);
    localStorage.setItem('bookings', JSON.stringify(bookings));

    // Show success message
    alert(`Booking confirmed!\n\nCourse: ${courses[formData.course].name}\nName: ${formData.name}\nEmail: ${formData.email}\nStart Date: ${formData.startDate}\n\nThank you for booking with us!`);
    
    // Redirect to booking history
    window.location.href = 'booking-history.html';
}

// Load and display booking history
function loadBookingHistory() {
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    const bookingHistoryContainer = document.getElementById('bookingHistory');
    const noBookings = document.getElementById('noBookings');

    if (bookings.length === 0) {
        bookingHistoryContainer.style.display = 'none';
        noBookings.style.display = 'block';
        return;
    }

    bookingHistoryContainer.style.display = 'block';
    noBookings.style.display = 'none';
    bookingHistoryContainer.innerHTML = '';

    // Sort bookings by date (newest first)
    bookings.sort((a, b) => b.id - a.id);

    bookings.forEach(booking => {
        const bookingCard = createBookingCard(booking);
        bookingHistoryContainer.appendChild(bookingCard);
    });
}

// Create booking card element
function createBookingCard(booking) {
    const card = document.createElement('div');
    card.className = 'booking-card';

    const courseInfo = courses[booking.course] || {
        name: booking.course,
        price: 'Rs 350/month',
        icon: '📚'
    };

    card.innerHTML = `
        <div class="booking-header">
            <div>
                <div class="booking-course">${courseInfo.icon} ${courseInfo.name}</div>
                <div class="booking-date">Booked on: ${booking.bookingDate} at ${booking.bookingTime}</div>
            </div>
        </div>
        <div class="booking-details">
            <div class="booking-detail-item">
                <label>Student Name:</label>
                <span>${booking.name}</span>
            </div>
            <div class="booking-detail-item">
                <label>Email:</label>
                <span>${booking.email}</span>
            </div>
            <div class="booking-detail-item">
                <label>Phone:</label>
                <span>${booking.phone}</span>
            </div>
            <div class="booking-detail-item">
                <label>Start Date:</label>
                <span>${booking.startDate}</span>
            </div>
            <div class="booking-detail-item">
                <label>Payment Method:</label>
                <span>${booking.paymentMethod}</span>
            </div>
            <div class="booking-detail-item">
                <label>Price:</label>
                <span>${courseInfo.price}</span>
            </div>
        </div>
    `;

    return card;
}

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

