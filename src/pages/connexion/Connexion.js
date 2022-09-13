import React from "react";
import { Form, Button, ButtonToolbar, Schema, Panel } from 'rsuite';
import './Connexion.css'

import avatar1 from "../../assets/images/avatar1.webp"
import { useNavigate } from "react-router-dom";


const { StringType } = Schema.Types;

const model = Schema.Model({
  email: StringType()
    .isEmail('Please enter a valid email address.')
    .isRequired('This field is required.'),
  password: StringType().isRequired('This field is required.')
    .isRequired('This field is required.')
});



const TextField = React.forwardRef((props, ref) => {
  const { name, label, accepter, ...rest } = props;
  return (
    <Form.Group controlId={`${name}-4`} ref={ref}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );
});


export default function Connexion(){
    const formRef = React.useRef();
    const [formError, setFormError] = React.useState({});
    const [formValue, setFormValue] = React.useState({
      email: '',
      password: '',
    });
  
    const navigate = useNavigate()

    const handleSubmit = () => {
      if (!formRef.current.check()) {
        console.error('Form Error');
        return;
      }
      console.log(formValue, 'Form Value');
    };
  
    // const handleCheckEmail = () => {
    //   formRef.current.checkForField('email', checkResult => {
    //     console.log(checkResult);
    //   });
    // };
    return(
        <div className="connexion">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-4 col-md-7 col-sm-9 col-11">
                        <Panel className="py-md-3 px-md-3 bg-white" shaded >
                            <div className="mx-auto text-center">
                                <h2>Connexion</h2>
                                <img src={avatar1} alt="avatar-connexion" className="img-fluid" />
                            </div>
                        <Form
                        fluid
                        ref={formRef}
                        onChange={setFormValue}
                        onCheck={setFormError}
                        formValue={formValue}
                        model={model}
                        formError={formError}
                        >
                            <TextField  size="lg"  name="email" label="Email" />
                            <TextField size="lg" name="password" label="Password" type="password" autoComplete="off" />

                            <ButtonToolbar>
                                <Button
                                onClickCapture={()=>navigate("/accueil",{replace:true})}
                                 block 
                                 className="py-3" appearance="primary" onClick={handleSubmit}>
                                Connexion
                                </Button>

                            </ButtonToolbar>
                        </Form>
                        </Panel>
                    </div>
                </div>
            </div>
        </div>
        )
}