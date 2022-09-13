import React from "react"
import { Input, InputGroup } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import livre1 from "../assets/images/livres/c.jpg"
import livre2 from "../assets/images/livres/souffle-des-angesjpg.jpg"
import './accueil/Accueil.css'
import CardLivres from "../components/CardLivre";

export default function ListeLivres(){


    return(
        <div className="accueil">
            <div className="recherche-container">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-8 col-sm-10 col-11 py-3">
                        <InputGroup size="lg" inside style={{}}>
                            <Input placeholder="Rechercher un livre" />
                            <InputGroup.Button>
                            <SearchIcon />
                            </InputGroup.Button>
                        </InputGroup>
                        </div>
                    </div>
                </div>
            </div>
          
            <div className="liste-livre-container py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-10">
                            <h1>
                                La liste de nos magniques livres de la bibliotheque
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center align-items-center py-5">
                        <CardLivres img={livre2} />
                        <CardLivres img={livre1} />
                        <CardLivres img={livre1} />
                        <CardLivres img={livre2} />
                        <CardLivres img={livre1} />
                    </div>
                </div>
            </div>
        </div>
    )
}