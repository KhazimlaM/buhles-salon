import assert from 'assert';
import SalonBooking from '../salon-booking.js';
import pgPromise from 'pg-promise';

// TODO configure this to work.
const DATABASE_URL = process.env.DATABASE_URL || "postgresql://codex:pg123@localhost:5432/buhle_salon";

const config = { 
	connectionString : DATABASE_URL
}

const pgp = pgPromise();
const db = pgp(config);

let booking = SalonBooking(db);



describe("The Booking Salon", function () {

    beforeEach(async function () {

        await db.none(`delete from booking`);

    });

    it("should be able to list treatments", async function () {

        const treatments = await booking.findAllTreatments();
        assert.deepEqual([
         { id: 1, type: 'Pedicure', code: 'BJuP', price: '175.00000' },
         { id: 2, type: 'Manicure', code: 'KloJ', price: '215.00000' },
         { id: 3, type: 'Make Up', code: 'MnUP', price: '185.00000' },
         { id: 4, type: 'Brows & Lashes', code: 'RtyP', price: '240.00000' }

        ]
        ,treatments);
        
    });

    it("should be able to find a stylist", async function () {

        const stylist = await booking.findStylist(216523217);
        assert.deepEqual([
            {
                commision_percentage: '0.150',
                first_name: 'Siya',
                id: 1,
                last_name: 'Sonjica',
                phone_number: 216523217
            }
       ]
       ,stylist);

    });

    it("should find a treatment by its short code", async function () {

        const treatment = await booking.findTreatment('BJuP');
        assert.deepEqual([
            {
             code: 'BJuP',
             id: 1,
             price: '175.00000',
             type: 'Pedicure'

            }
       ]
       ,treatment);

    });


    it("should find a client ", async function () {

        const client = await booking.findClient(212356566);
        assert.deepEqual([

              { 
                first_name: 'Amita',
                id: 5,
                last_name: 'Mgweba',
                phone_number: 212356566
              
               }
       ]
       ,client);

    });



    // it("should be able to allow a client to make a booking", async function () {
    //     const client = await booking.findClient("***");

    //     const booking = await booking.makeBooking(treatmentId, client.id, date, time);

    //     const bookings = await booking.findClientBookings(client.id);
    //     assert.equal([], bookings);
    // });

    // it("should be able to get client booking(s)", async function () {

    //     const client1 = await booking.findClient("***");
    //     const client2 = await booking.findClient("***");
        
    //     const treatment1 = await booking.findTreatment("***");
    //     const treatment2 = await booking.findTreatment("***");

    //     await booking.booking(treatment1.id, client1.id, date, time);
    //     await booking.booking(treatment2.id, client1.id, date, time);
    //     await booking.booking(treatment1.id, client2.id, date, time);

    //     const bookings = await booking.findAllBookings(client);

    //     assert.equal([], clientBooking)
    // })

    // it("should be able to get bookings for a date", async function () {
    //     const client1 = await booking.findClient("***");
    //     const client2 = await booking.findClient("***");

    //     const treatment1 = await booking.findTreatment("***");
    //     const treatment2 = await booking.findTreatment("***");

    //     await booking.booking(treatment1.id, client1.id, date, time);
    //     await booking.booking(treatment2.id, client1.id, date, time);
    //     await booking.booking(treatment3.id, client2.id, date, time);

    //     const bookings = await booking.findAllBookings({date, time});

    //     assert.equal([], bookings);

    // });

    // it("should be able to find the total income for a day", function() {
    //     assert.equal(1, 2);
    // })

    // it("should be able to find the most valuable client", function() {
    //     assert.equal(1, 2);
    // })
    // it("should be able to find the total commission for a given stylist", function() {
    //     assert.equal(1, 2);
    // })

    after(function () {
        db.$pool.end()
    });

});






