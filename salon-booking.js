export default function salonBooking(db) {


     async function findClient(phoneNumber){
        let client = await db.oneOrNone(`select * from client where phone_number = $1`,[phoneNumber])
        return client
     }

     async function findStylist(phoneNumber){
        let stylist = await db.manyOrNone(`select * from stylist where phone_number = $1`,[phoneNumber])
        return stylist
     
     }


     async function findTreatment(code){
     let treatment =  await db.manyOrNone(`select * from treatment where code  = $1`,[code])
     return treatment

    }

    async function findAllTreatments(){
        return await db.manyOrNone(`select * from treatment`)
     
    }

    async function findAllBookings(){
        return await db.manyOrNone(`select * from booking`)
     
    }

  async function findClientBookings(clientId){
    let bookings = await db.manyOrNone(`select * from bookings where clientId = $1`,[clientId])
    return bookings

  }
 
  async function findStylistsForTreatment(treatmentId){
      let styler = await db.manyOrNone(`select * from bookings where treatmentId = $1`,[treatmentId])
      return styler
  }
    return {

   findClient,
   findStylist,
   findTreatment,
   findAllTreatments,
   findAllBookings,
   findClientBookings,
   findStylistsForTreatment
}

}  
