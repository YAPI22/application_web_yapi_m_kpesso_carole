import { useNavigate } from 'react-router-dom';
import { Panel } from 'rsuite';



const CardLivres = (props) =>{
    const navigate = useNavigate()
    
    return(

  <Panel onClick={()=>navigate(`/details-livre/${props.idlivre}`)} className="col-md-3 col-sm-4 col-10 text-center pt-3 m-3 card-livre" shaded bordered bodyFill style={{ height:"400px",width:"300px"}}>
    <img alt=''  style={{ height:"300px"}} src={props.img} className="img-fluid" />
    <Panel>
      <p style={{
        fontSize:'20px',
        fontWeight:'bold',
       }}>
        titre livre
      </p>
    </Panel>
  </Panel>
);}

export default CardLivres;