const mqtt= require('mqtt')
const client  = mqtt.connect('mqtt://iot.eclipse.org')
const mongoose =require('mongoose')

const con = mongoose.connect('mongodb://abhi:abhi98@ds257981.mlab.com:57981/mqtt-nodemcu',{ useNewUrlParser: true })
mongoose.connection.on('connected', () => {
    console.log('Connected to Database ');
  });

const Model= require('./models/channel');


client.on('connect', function () {
  client.subscribe('data_channel');
  
})

client.on('message', function (topic, message) {
  let x= JSON.parse(message.toString())
  console.log(x.Latitude,x.Longitude)
  
  const data= new Model({
      "latitude" : x.Latitude,
      "longitude" : x.Longitude,

  })
  query={"latitude" : x.Latitude,"longitude" : x.Longitude}
 data.findOne(query).update({
     data.counter= data.counter+1
 })
  data.save();

})