import React from "react"
import { Input, InputGroup,Carousel } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import livre1 from "../../assets/images/livres/c.jpg"
import livre2 from "../../assets/images/livres/souffle-des-angesjpg.jpg"
import './Accueil.css'
import CardLivres from "../../components/CardLivre";

export default function Accueil(){


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
            <div className="carousel-container">
                <div className="container pt-3">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-7 col-11">
                            <Carousel autoplay className="custom-slider">
                                <img alt="" src={livre1} height="250" />
                                <img alt="" src={livre2} height="250" />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <div className="liste-livre-container py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-10">
                            <h1>
                                Quelques magniques livres de notre bibliotheque
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center align-items-center py-5">
                        <CardLivres idlivre='1' img={livre2} />
                        <CardLivres idlivre='2' img={livre1} />
                        <CardLivres idlivre='3' img={livre1} />
                        <CardLivres idlivre='4' img={livre2} />
                        <CardLivres idlivre='5' img={livre1} />
                    </div>
                </div>
            </div>
        </div>
    )
}