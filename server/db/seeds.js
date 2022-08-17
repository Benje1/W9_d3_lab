use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        guestName: "Nathen",
        guestEmail: "email@emailadress.com",
        checkedInStatus: false
    },
    {
        guestName: "Benjamin",
        guestEmail: "otheremail@email.com",
        checkedInStatus: false
    }
])