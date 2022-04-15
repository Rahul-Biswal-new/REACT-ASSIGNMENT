export default App;
import './App.css'

const employee = {
  name: 'Tom',
  location: 'New York',
  bloodGroup: 'B+',
  age: 28,
  profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
}

function User(){
  return(
    <div className='container'>
      <img src={employee.profileImg} alt="profileImg" />
      <div className="name">{employee.name}</div>
      <p>Location</p>
      <div className="location">{employee.location}</div>
      <p>Blood group</p>
      <div className="b-group">{employee.bloodGroup}</div>
      <p>Age</p>
      <div className="age">{employee.age}</div>
    </div>
  );
}
