const template = 
   <div>
     <h1>Change</h1> 
     <p>Only gets better</p>
   </div>

const user= { name: 'Firoz',age:22,location:'Pune'}
function getLocation(location) {
  if(location)
  {
    return location
  }
  else
  {
  return 'Unknown';
  }
}
const t2= 
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        <p>Age:{user.age}</p>
        <p>{getLocation(user.location)}</p>
    </div>
const approot = document.getElementById('app')
ReactDOM.render(t2,approot)