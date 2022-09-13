import { useState } from 'react';
import { Button, Panel } from 'rsuite';

import livre2 from "../assets/images/livres/souffle-des-angesjpg.jpg"

export default function DetailsLivre(props){
    const [reserver, setReserver] = useState(false)

    const onClickReserver =()=>{
        setReserver(!reserver)
    }

    return(
        <div className="details-livre">
            <div className="header-details-livre">
                <div className="container">
                    <div className="row justify-content-center ">
                        <div className="col-lg-5 col-md-5 col-11">
                            <Panel  className="text-center" >
                                <img alt=''  style={{ height:"500px"}} src={livre2} className="img-fluid" />
                            </Panel>
                        </div>
                        <div className="col-lg-7 col-md-7 col-11">
                          <div className="py-3">
                                <h1>
                                    titre du livre
                                </h1>
                                <p>
                                    
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.d title and make up the
                                    bulk of the card's content.
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.d title and make up the
                                    bulk of the card's content.
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.d title and make up the
                                    bulk of the card's content.
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.d title and make up the
                                    bulk of the card's content.
                                </p>
                          </div>
                          
                          <div className="row justify-content-center description-livre">
                            <div className="col-md-4 col-11">
                                <h2>
                                    Genre du livre
                                </h2>
                                <p>
                                    Fantastique
                                </p>
                            </div>
                            <div className="col-md-4 col-11">
                                <h2>
                                    date de sortie du livre
                                </h2>
                                <p>
                                    10/ 09/ 2018
                                </p>
                            </div>
                            <div className="col-md-4 col-11">
                                <h2>
                                    auteur du livre
                                </h2>
                                <p>
                                    Nom auteur
                                </p>
                            </div>
                          </div>
                          <div className="description-auteur">
                            <h2>Bibliographie auteur</h2>
                            
                            <p>
                                
                                    bulk of the card's content.
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.d title and make up the
                                    bulk of the card's content.

                            </p>
                          </div>
                          <div className="btn-container">
                            <Button color={`${reserver ? "green": "red"}`} appearance='primary' onClick={()=>onClickReserver()} >
                               { reserver?"livre reservé": "Reserver pour emprunt"}
                            </Button>
                                        
                          </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        )
}