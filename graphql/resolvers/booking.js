const Booking = require('../../models/booking');
const Event = require('../../models/event')

module.exports={
  bookings: async (args,req) =>{
    if(!req.isAuth){
      throw new Error('Un-Authenticated User, cannot create an event!!');
    }
    try{
      const bookings = await Booking.find();
      return bookings.map(booking=>{
        return{
          _id:booking._id,
          event:helper.singleEvent(booking.event),
          user:helper.user(booking.user),
          createdAt:new Date(booking.createdAt),
          updatedAt:new Date(booking.updatedAt),
        }
      })
    }catch(err){
      throw err;
    }
  },
  bookEvent: async(args,req)=>{
    if(!req.isAuth){
      throw new Error('Un-Authenticated User, cannot create an event!!');
    }
    console.log(args.eventId)
    const fetchedEvent = await Event.findOne({_id:args.eventId});
    const booking=new Booking({
      user:'5e8b42898354821bb8db50fb',
      event: fetchedEvent,
      createdAt:new Date().toISOString()
    });
    console.log(booking)
    const result = await booking.save();

    return{
      _id:result.id,
      event:helper.singleEvent(booking.event),
      user:helper.user(booking.user),
      createdAt:new Date(result.createdAt),
      updatedAt:new Date(result.updatedAt)
    }
  },

  deleteBooking: async (args,req) => {
    if(!req.isAuth){
      throw new Error('Un-Authenticated User, cannot create an event!!');
    }
    try {
      const booking = await Booking.findById(args.bookingId).populate('event');
      console.log("Booking "+booking.event)
      console.log("Booking_doc"+booking.event._doc)
      const event = {
        ...booking.event,
        _id: booking.event.id,
        creator: user.bind(this, booking.event.creator),
        title:booking.event.title
      };
      await Booking.deleteOne({ _id: args.bookingId });
      return event;
    } catch (err) {
      throw err;
    }
  }
}
