
import ChildB1 from './ChildB1'

const ParentA1 = (props) => {
    console.log(props);
    
   
  return (
    <div>
        <h1>ParentA1</h1>

        <ChildB1/>
    </div>
  )
}

export default ParentA1

