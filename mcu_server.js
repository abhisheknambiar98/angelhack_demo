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
      "counter": 0
  })
  query={"latitude" : x.Latitude,"longitude" : x.Longitude}

  to_change =  Model.findOne(query,(obj)=>{
    console.log(obj);
    
  })
  console.log(to_change);
  
  if(to_change){
      to_change.counter= to_change.counter+1
      data.counter = to_change.counter
  }
 
  data.save();

})