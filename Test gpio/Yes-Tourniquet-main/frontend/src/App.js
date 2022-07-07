import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import io from "socket.io-client";
import Moove from "./Moove";
import styles from "./App.css";

import vaisselle from "./Gifs-90/210vaisselle.gif";
import velo from "./Gifs-90/525velo.gif";
import banque from "./Gifs-90/Banque1an.gif";
import boulangerie from "./Gifs-90/Boulangerie.gif";
import bus1mois from "./Gifs-90/Bus1mois.gif";
import bus1sem from "./Gifs-90/Bus1sem.gif";
import coiffure from "./Gifs-90/Coiffure1an.gif";
import concauto from "./Gifs-90/ConcAuto1an.gif";
import congel from "./Gifs-90/Congel1an.gif";
import veille from "./Gifs-90/EcranDroit.gif";
import eiffel10j from "./Gifs-90/Eiffel10j.gif";
import eiffel17j from "./Gifs-90/Eiffel17j.gif";
import eiffel1j from "./Gifs-90/Eiffel1j.gif";
import eiffel1m from "./Gifs-90/Eiffel1mois.gif";
import eiffel2s from "./Gifs-90/Eiffel2sem.gif";
import eiffel3j from "./Gifs-90/Eiffel3j.gif";
import eiffel3s from "./Gifs-90/Eiffel3sem.gif";
import eiffel4j from "./Gifs-90/Eiffel4j.gif";
import eiffel6j from "./Gifs-90/Eiffel6j.gif";
import eiffel8j from "./Gifs-90/Eiffel8j.gif";
import foyer1an from "./Gifs-90/Foyer1an.gif";
import foyer2ans from"./Gifs-90/Foyer2ans.gif";
import foyer3ans from "./Gifs-90/Foyer3ans.gif";
import frigo from "./Gifs-90/Frigo1an.gif";
import immo from "./Gifs-90/Frigo1an.gif";
import linge from "./Gifs-90/Linge1an.gif";
import parislyon from "./Gifs-90/ParisLyon.gif";
import parismarseille from "./Gifs-90/ParisMarseille.gif";
import pharma from "./Gifs-90/Pharma1an.gif";
import superette from "./Gifs-90/Superette1an.gif";





const ENDPOINT = "ws://localhost:8081";
var passages = 10;
var ancien_passage = 0;
//ces variables n'ont pas d'intérêt ici vu que c'est dans le Moove qu'elles importent

function App() {
  

    const [socket, setSocket] = useState();

  useEffect(() => {
    const newSocket = io(ENDPOINT);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);
  
  
  
  

  return (
  
        
    <div className="App">
    
        { socket ? (
        <Moove socket={socket} />
        ) : (
        <div>Not Connected</div>
        )}
      
    </div>
  
  );
}//affichage du contenu du Moove

export default App;

