import { Input, InputGroup, Panel,IconButton, Modal, Button,Form, ButtonToolbar } from 'rsuite';
import React from 'react'
import SearchIcon from '@rsuite/icons/Search';
import TrashIcon from '@rsuite/icons/Trash';
import PlusIcon from '@rsuite/icons/Plus';
import TableLivres from "../components/TablesLivres";

const ModalAddLivre = (props) => (
    <Modal open={props.openModalAdd} onClose={props.handleCloseModalAdd}>
    <Modal.Header>
      <Modal.Title>Enregistrement Livre</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form>
    <Form.Group controlId="name">
      <Form.ControlLabel>Username</Form.ControlLabel>
      <Form.Control name="name" />
      <Form.HelpText>Username is required</Form.HelpText>
    </Form.Group>
    <Form.Group controlId="email">
      <Form.ControlLabel>Email</Form.ControlLabel>
      <Form.Control name="email" type="email" />
      <Form.HelpText tooltip>Email is required</Form.HelpText>
    </Form.Group>
    <Form.Group controlId="password">
      <Form.ControlLabel>Password</Form.ControlLabel>
      <Form.Control name="password" type="password" autoComplete="off" />
    </Form.Group>
    
    <Form.Group>
      <ButtonToolbar>
        <Button appearance="primary">Submit</Button>
        <Button appearance="default">Cancel</Button>
      </ButtonToolbar>
    </Form.Group>
  </Form>
    </Modal.Body>
  </Modal>
)

const ModalConfirmDelete = (props) => (
    <Modal open={props.openModalConfirmDelete} onClose={props.handleCloseModalConfirmDelete}>
    <Modal.Body className="text-center" >
        <h4>
            Voulez-vous Supprimer tous les livres ?
        </h4>
        <div className="row justify-content-center align-items-center py-4 px-2">
            <div className="col-6">
                <Button color="blue" appearance="primary">
                    Non
                </Button>
            </div>
            <div className="col-6">
                <Button color="red" appearance="primary">
                    Oui
                </Button>
            </div>
        </div>
    </Modal.Body>
  </Modal>
)


export default function GestionEmprunts(){
    
  const [openModalAdd, setOpenModalAdd] = React.useState(false);
  const [openModalConfirmDelete, setOpenModalConfirmDelete] = React.useState(false);

  const handleOpenModalAdd = () => setOpenModalAdd(true);
  const handleCloseModalAdd = () => setOpenModalAdd(false);
  
  const handleOpenModalConfirmDelete = () => setOpenModalConfirmDelete(true);
  const handleCloseModalConfirmDelete = () => setOpenModalConfirmDelete(false);

    return(
        <div className="gestion-livres">

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-sm-10 col-11 py-5">
                        <h2>
                        Gestion des emprunts de livres
                        </h2>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row juistify-content-center">
                    <div className="col-md-8 col-11 text-center mx-auto">
                        <div className="pb-4 row juistify-content-center align-items-center">
                            <div className="col-md-6 col-sm-6 col-11 ">

                                <IconButton
                                onClick={()=>handleOpenModalAdd()}
                                    color="blue"
                                    appearance="primary"  
                                    className="mx-2" 
                                    icon={<PlusIcon />}>
                                        Ajouter
                                </IconButton>

                                <IconButton
                                    onClick={()=>handleOpenModalConfirmDelete()}
                                 color="red"  appearance="primary" className="mx-2" icon={<TrashIcon />}>Tout supprimer</IconButton>
                            </div>
                            <div className="col-md-6 col-sm-6 col-11">
                            <InputGroup  size="lg"  inside >
                                <Input placeholder="Rechercher..." />
                                <InputGroup.Button>
                                <SearchIcon />
                                </InputGroup.Button>
                            </InputGroup>
                            </div>
                        </div>
                        <Panel  className="bg-white" shaded>
                            <TableLivres />
                        </Panel>  
                    </div>
                </div>             
            </div>
            <ModalAddLivre 
            handleCloseModalAdd={handleCloseModalAdd}
            openModalAdd={openModalAdd}
            />
            
            <ModalConfirmDelete 
            handleCloseModalConfirmDelete={handleCloseModalConfirmDelete}
            openModalConfirmDelete={openModalConfirmDelete}
            />
        </div>
    )
}