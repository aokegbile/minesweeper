let
  availableAirplanes= [
    {
      name: 'AeroJet',
      fuelCapacity:800,
      availableStaff:[
        'pilots',
        'flightAttendants',
        'engineers',
        'medicalAssistance',
        'sensorOperators'
      ]
    },
    {
      name: 'SkyJet',
      fuelCapacity:500,
      availableStaff:[
        'pilots',
        'flightAttendants',
      ]
    }
  ]
let flightRequirements = {
  requiredStaff: 4
};
const meetsStaffRequirements = (availableStaff,requiredStaff)=>{
 	if(availableStaff.length >requiredStaff){
    return true;
  }
  return false;
}
export{ availableAirplanes, flightRequirements, meetsStaffRequirements};
