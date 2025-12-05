# Online Source - Programming Courses Website

A modern, responsive website for an online learning platform offering programming courses.

## Features

- **8 Pages**: Complete website with navigation between all pages
- **3D Logo**: Animated 3D rotating logo in the header
- **Blue & White Theme**: Professional color scheme throughout
- **Course Booking System**: Users can book courses with form validation
- **Booking History**: View all past bookings with details
- **Staff Information**: Detailed instructor profiles with education details
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Pages

1. **Home (index.html)** - Landing page with course overview
2. **Courses (courses.html)** - List of all available courses
3. **Python Programming (python.html)** - Python course details
4. **Java Programming (java.html)** - Java course details
5. **Python DSA (python-dsa.html)** - Python DSA course details
6. **Book Course (booking.html)** - Course booking form
7. **Booking History (booking-history.html)** - View all bookings
8. **Our Staff (staff.html)** - Instructor profiles and course mapping
9. **About (about.html)** - About page with contact information

## Courses Offered

- **Python Programming** - Rs 350/month
- **Java Programming** - Rs 350/month
- **Python DSA** - Rs 350/month

## How to Use

1. Open `index.html` in a web browser
2. Navigate through pages using the navigation menu
3. To book a course:
   - Go to "Book Course" page
   - Fill in the booking form
   - Submit to save booking
4. View booking history in "My Bookings" page
5. Check instructor details in "Our Staff" page

## Technologies Used

- HTML5
- CSS3 (with 3D transforms and animations)
- JavaScript (localStorage for data persistence)
- Responsive design principles

## Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Notes

- Bookings are stored in browser's localStorage
- Data persists across page refreshes
- Form validation ensures all required fields are filled
- 3D logo animation runs continuously
- All pages share consistent navigation and styling

## File Structure

```
.
├── index.html          # Home page
├── courses.html        # Courses listing
├── python.html         # Python course page
├── java.html           # Java course page
├── python-dsa.html     # Python DSA course page
├── booking.html        # Booking form
├── booking-history.html # Booking history
├── staff.html          # Staff information
├── about.html          # About page
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## Customization

You can easily customize:
- Colors in `styles.css` (CSS variables in `:root`)
- Course details in HTML files
- Staff information in `staff.html`
- Contact information in `about.html`

