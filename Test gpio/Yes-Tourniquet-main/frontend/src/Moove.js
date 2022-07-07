import React, { useEffect, useState, createContext } from 'react';
import "./App.css";

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
//importation de toutes les animations des différents paliers.

var passages = 1;


var ancien_passage = 0;
//export {passages};


function Moove({socket}) {

  const [messages, setMessages] = useState({});

  useEffect(() => {
    const messageListener = (message) => {
      console.log("message", message);
      setMessages((prevMessages) => {
        console.log("prev", prevMessages);
        const newMessages = {...prevMessages};
        newMessages[message.id] = message;
        passages = Object.keys(message).map(function(key){ return message[key];}).reduce((a, b) => a + b);//additionne toutes les valeurs des passages de chaque programme read 
        return newMessages;
      });
    };
  
    socket.on('passages', messageListener);

    return () => {
      socket.off('passages', messageListener);
    };
  }, [socket]);//permets de récupérer le message émis par notre serveur intermédiaire et de mettre la valeur totale des passages dans notre vatiable "passages"








  //option demandée par les clients qu'une animation ne s'affiche que s'il y a un nouveau passage, puis que ça se remette les animations des paliers franchis
      if (document.getElementById('box')){
      if (ancien_passage == passages) {
        document.getElementById('box').style.visibility = 'visible';//si pas de nouveau passage, alors on affiche les animations de paliers
        
      } else if (ancien_passage !== passages) {
    
        setTimeout(() => {
          

  
          document.getElementById('box').style.visibility = 'hidden';
          
        }, 5000);
        
        ancien_passage = passages;//si nouveau passage, alors on cache les paliers et donc l'animation spéciale s'affiche, on attends 5 secondes, puis on met l'ancien passage au nouveau, ce qui nous renvoie au premier cas
        }
        }
  

  //affichages des animations, selon le nombre de passages on va afficher telle ou telle animation en mettant une condition à l'affichage. Le nombre des passages est centré selon les animations fournies par les clients
  return (
  
  <article className = "head-text">
            
    
            <div className = "head-text">
            <img src = {veille} />
          
            <div className ='text-on-image' >
              <h3> 
        
                <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "5vmin",
        pointerEvents: "none",
        outline: "none",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        
          <div>
          <br />
            <span>
              <span style={{ fontWeight: "bold", color: "orange",  }}>
                {" "}
                {passages} tours{" "}
              </span>
            </span>{" "}
            <br />
            <br />
            <span
              style={{
                paddingTop: "2rem",
                fontWeight: "bold",
              }}
            >
              
            </span>
          </div>
        
        
      </div>
    </div>
              </h3>
            </div>
            </div>
            
            
            
            {(passages >= 1 && passages <= 9) && (
            <div id="box" className = "head-text">
            <img src = {velo} />
          
            <div className ='text-on-image' >
              <h3> 
        
                <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "5vmin",
        pointerEvents: "none",
        outline: "none",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        
          <div>
          <br />
            <span>
              <span style={{ fontWeight: "bold", color: "orange",  }}>
                {" "}
                {passages} tours{" "}
              </span>
            </span>{" "}
            <br />
            <br />
            <span
              style={{
                paddingTop: "2rem",
                fontWeight: "bold",
              }}
            >
              
            </span>
          </div>
        
        
      </div>
    </div>
              </h3>
            </div>
            </div>
            )}
            
            {(passages >= 10 && passages <= 20) && (
            <div id="box" className = "head-text">
            <img src = {parislyon} />
          
            <div className ='text-on-image' >
              <h3> 
        
                <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "5vmin",
        pointerEvents: "none",
        outline: "none",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        
          <div>
          <br />
            <span>
              <span style={{ fontWeight: "bold", color: "orange",  }}>
                {" "}
                {passages} tours{" "}
              </span>
            </span>{" "}
            <br />
            <br />
            <span
              style={{
                paddingTop: "2rem",
                fontWeight: "bold",
              }}
            >
              
            </span>
          </div>
        
        
      </div>
    </div>
              </h3>
            </div>
            </div>
            )}
            
            {(passages >= 21 && passages <= 40) && (
            <div id="box" className = "head-text">
            <img src = {parismarseille} />
          
            <div className ='text-on-image' >
              <h3> 
        
                <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "5vmin",
        pointerEvents: "none",
        outline: "none",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        
          <div>
          <br />
            <span>
              <span style={{ fontWeight: "bold", color: "orange",  }}>
                {" "}
                {passages} tours{" "}
              </span>
            </span>{" "}
            <br />
            <br />
            <span
              style={{
                paddingTop: "2rem",
                fontWeight: "bold",
              }}
            >
              
            </span>
          </div>
        
        
      </div>
    </div>
              </h3>
            </div>
            </div>
            )}
            
            {(passages >= 41 && passages <= 69) && (
            <div id="box" className = "head-text">
            <img src = {vaisselle} />
          
            <div className ='text-on-image' >
              <h3> 
        
                <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "5vmin",
        pointerEvents: "none",
        outline: "none",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        
          <div>
          <br />
            <span>
              <span style={{ fontWeight: "bold", color: "orange",  }}>
                {" "}
                {passages} tours{" "}
              </span>
            </span>{" "}
            <br />
            <br />
            <span
              style={{
                paddingTop: "2rem",
                fontWeight: "bold",
              }}
            >
              
            </span>
          </div>
        
        
      </div>
    </div>
              </h3>
            </div>
            </div>
            )}
            
            {(passages >= 70 && passages <= 99) && (
            <div id="box" className = "head-text">
            <img src = {frigo} />
          
            <div className ='text-on-image' >
              <h3> 
        
                <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "5vmin",
        pointerEvents: "none",
        outline: "none",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        
          <div>
          <br />
            <span>
              <span style={{ fontWeight: "bold", color: "orange",  }}>
                {" "}
                {passages} tours{" "}
              </span>
            </span>{" "}
            <br />
            <br />
            <span
              style={{
                paddingTop: "2rem",
                fontWeight: "bold",
              }}
            >
              
            </span>
          </div>
        
        
      </div>
    </div>
              </h3>
            </div>
            </div>
            )}
            
            {(passages >= 100 && passages <= 149) && (
            <div id="box" className = "head-text">
            <img src = {congel} />
          
            <div className ='text-on-image' >
              <h3> 
        
                <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "5vmin",
        pointerEvents: "none",
        outline: "none",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        
          <div>
          <br />
            <span>
              <span style={{ fontWeight: "bold", color: "orange",  }}>
                {" "}
                {passages} tours{" "}
              </span>
            </span>{" "}
            <br />
            <br />
            <span
              style={{
                paddingTop: "2rem",
                fontWeight: "bold",
              }}
            >
              
            </span>
          </div>
        
        
      </div>
    </div>
              </h3>
            </div>
            </div>
            )}
            
            {(passages >= 150 && passages <= 329) && (
            <div id="box" className = "head-text">
            <img src = {linge} />
          
            <div className ='text-on-image' >
              <h3> 
        
                <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "5vmin",
        pointerEvents: "none",
        outline: "none",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        
          <div>
          <br />
            <span>
              <span style={{ fontWeight: "bold", color: "orange",  }}>
                {" "}
                {passages} tours{" "}
              </span>
            </span>{" "}
            <br />
            <br />
            <span
              style={{
                paddingTop: "2rem",
                fontWeight: "bold",
              }}
            >
              
            </span>
          </div>
        
        
      </div>
    </div>
              </h3>
            </div>
            </div>
            )}
            
            {(passages >= 330 && passages <= 569) && (
            <div id="box" className = "head-text">
            <img src = {eiffel1j} />
          
            <div className ='text-on-image' >
              <h3> 
        
                <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "5vmin",
        pointerEvents: "none",
        outline: "none",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        
          <div>
          <br />
            <span>
              <span style={{ fontWeight: "bold", color: "orange",  }}>
                {" "}
                {passages} tours{" "}
              </span>
            </span>{" "}
            <br />
            <br />
            <span
              style={{
                paddingTop: "2rem",
                fontWeight: "bold",
              }}
            >
              
            </span>
          </div>
        
        
      </div>
    </div>
              </h3>
            </div>
            </div>
            )}
            
            {(passages >= 570 && passages <= 879) && (
            <div id="box" className = "head-text">
            <img src = {bus1sem} />
          
            <div className ='text-on-image' >
              <h3> 
        
                <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "5vmin",
        pointerEvents: "none",
        outline: "none",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        
          <div>
          <br />
            <span>
              <span style={{ fontWeight: "bold", color: "orange",  }}>
                {" "}
                {passages} tours{" "}
              </span>
            </span>{" "}
            <br />
            <br />
            <span
              style={{
                paddingTop: "2rem",
                fontWeight: "bold",
              }}
            >
              
            </span>
          </div>
        
        
      </div>
    </div>
              </h3>
            </div>
            </div>
            )}
            
            {(passages >= 880 && passages <= 969) && (
            <div id="box" className = "head-text">
            <img src = {foyer1an} />
          
            <div className ='text-on-image' >
              <h3> 
        
                <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "5vmin",
        pointerEvents: "none",
        outline: "none",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        
          <div>
          <br />
            <span>
              <span style={{ fontWeight: "bold", color: "orange",  }}>
                {" "}
                {passages} tours{" "}
              </span>
            </span>{" "}
            <br />
            <br />
            <span
              style={{
                paddingTop: "2rem",
                fontWeight: "bold",
              }}
            >
              
            </span>
          </div>
        
        
      </div>
    </div>
              </h3>
            </div>
            </div>
            )}
            
            {(passages >= 970 && passages <= 1299) && (
            <div id="box" className = "head-text">
            <img src = {eiffel3j} />
          
            <div className ='text-on-image' >
              <h3> 
        
                <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "5vmin",
        pointerEvents: "none",
        outline: "none",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        
          <div>
          <br />
            <span>
              <span style={{ fontWeight: "bold", color: "orange",  }}>
                {" "}
                {passages} tours{" "}
              </span>
            </span>{" "}
            <br />
            <br />
            <span
              style={{
                paddingTop: "2rem",
                fontWeight: "bold",
              }}
            >
              
            </span>
          </div>
        
        
      </div>
    </div>
              </h3>
            </div>
            </div>
            )}
            
            {(passages >= 1300 && passages <= 1629) && (
            <div id="box" className = "head-text">
            <img src = {eiffel4j} />
          
            <div className ='text-on-image' >
              <h3> 
        
                <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "5vmin",
        pointerEvents: "none",
        outline: "none",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        
          <div>
          <br />
            <span>
              <span style={{ fontWeight: "bold", color: "orange",  }}>
                {" "}
                {passages} tours{" "}
              </span>
            </span>{" "}
            <br />
            <br />
            <span
              style={{
                paddingTop: "2rem",
                fontWeight: "bold",
              }}
            >
              
            </span>
          </div>
        
        
      </div>
    </div>
              </h3>
            </div>
            </div>
            )}
            
            {(passages >= 1630 && passages <= 1759) && (
            <div id="box" className = "head-text">
            <img src = {immo} />
          
            <div className ='text-on-image' >
              <h3> 
        
                <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "5vmin",
        pointerEvents: "none",
        outline: "none",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        
          <div>
          <br />
            <span>
              <span style={{ fontWeight: "bold", color: "orange",  }}>
                {" "}
                {passages} tours{" "}
              </span>
            </span>{" "}
            <br />
            <br />
            <span
              style={{
                paddingTop: "2rem",
                fontWeight: "bold",
              }}
            >
              
            </span>
          </div>
        
        
      </div>
    </div>
              </h3>
            </div>
            </div>
            )}
            
            {(passages >= 1760 && passages <= 1949) && (
            <div id="box" className = "head-text">
            <img src = {foyer2ans} />
          
            <div className ='text-on-image' >
              <h3> 
        
               <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "5vmin",
        pointerEvents: "none",
        outline: "none",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
       
          <div>
          <br />
            <span>
              <span style={{ fontWeight: "bold", color: "orange",  }}>
                {" "}
                {passages} tours{" "}
              </span>
            </span>{" "}
            <br />
            <br />
            <span
              style={{
                paddingTop: "2rem",
                fontWeight: "bold",
              }}
            >
              
            </span>
          </div>
        
        
      </div>
    </div>
              </h3>
            </div>
            </div>
            )}
            
            {(passages >= 1950 && passages <= 2129) && (
            <div id="box" className = "head-text">
            <img src = {eiffel6j} />
          
            <div className ='text-on-image' >
              <h3> 
        
                <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "5vmin",
        pointerEvents: "none",
        outline: "none",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        
          <div>
          <br />
            <span>
              <span style={{ fontWeight: "bold", color: "orange",  }}>
                {" "}
                {passages} tours{" "}
              </span>
            </span>{" "}
            <br />
            <br />
            <span
              style={{
                paddingTop: "2rem",
                fontWeight: "bold",
              }}
            >
              
            </span>
          </div>
        
        
      </div>
    </div>
              </h3>
            </div>
            </div>
            )}
            
            {(passages >= 2130 && passages <= 2589) && (
            <div id="box" className = "head-text">
            <img src = {bus1mois} />
          
            <div className ='text-on-image' >
              <h3> 
        
                <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "5vmin",
        pointerEvents: "none",
        outline: "none",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        
          <div>
          <br />
            <span>
              <span style={{ fontWeight: "bold", color: "orange",  }}>
                {" "}
                {passages} tours{" "}
              </span>
            </span>{" "}
            <br />
            <br />
            <span
              style={{
                paddingTop: "2rem",
                fontWeight: "bold",
              }}
            >
              
            </span>
          </div>
        
        
      </div>
    </div>
              </h3>
            </div>
            </div>
            )}
            
            {(passages >= 2590 && passages <= 2639) && (
            <div id="box" className = "head-text">
            <img src = {eiffel8j} />
          
            <div className ='text-on-image' >
              <h3> 
        
                <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "5vmin",
        pointerEvents: "none",
        outline: "none",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        
          <div>
          <br />
            <span>
              <span style={{ fontWeight: "bold", color: "orange",  }}>
                {" "}
                {passages} tours{" "}
              </span>
            </span>{" "}
            <br />
            <br />
            <span
              style={{
                paddingTop: "2rem",
                fontWeight: "bold",
              }}
            >
              
            </span>
          </div>
        
        
      </div>
    </div>
              </h3>
            </div>
            </div>
            )}
            
            {(passages >= 2640 && passages <= 2859) && (
            <div id="box" className = "head-text">
            <img src = {foyer3ans} />
          
            <div className ='text-on-image' >
              <h3> 
        
                <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "5vmin",
        pointerEvents: "none",
        outline: "none",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        
          <br />
            <span>
              <span style={{ fontWeight: "bold", color: "orange",  }}>
                {" "}
                {passages} tours{" "}
              </span>
            </span>{" "}
            <br />
            <br />
            <span
              style={{
                paddingTop: "2rem",
                fontWeight: "bold",
              }}
            >
              
            </span>
          </div>
        
        
      </div>
    
              </h3>
            </div>
            </div>
            )}
            
            {(passages >= 2860 && passages <= 3239) && (
            <div id="box" className = "head-text">
            <img src = {coiffure} />
          
            <div className ='text-on-image' >
              <h3> 
        
                <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "5vmin",
        pointerEvents: "none",
        outline: "none",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        
          <div>
          <br />
            <span>
              <span style={{ fontWeight: "bold", color: "orange",  }}>
                {" "}
                {passages} tours{" "}
              </span>
            </span>{" "}
            <br />
            <br />
            <span
              style={{
                paddingTop: "2rem",
                fontWeight: "bold",
              }}
            >
              
            </span>
          </div>
        
        
      </div>
    </div>
              </h3>
            </div>
            </div>
            )}
            
            {(passages >= 3240 && passages <= 3599) && (
            <div id="box" className = "head-text">
            <img src = {eiffel10j} />
          
            <div className ='text-on-image' >
              <h3> 
        
                <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "5vmin",
        pointerEvents: "none",
        outline: "none",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        
          <div>
          <br />
            <span>
              <span style={{ fontWeight: "bold", color: "orange",  }}>
                {" "}
                {passages} tours{" "}
              </span>
            </span>{" "}
            <br />
            <br />
            <span
              style={{
                paddingTop: "2rem",
                fontWeight: "bold",
              }}
            >
              
            </span>
          </div>
        
        
      </div>
    </div>
              </h3>
            </div>
            </div>
            )}
            
            {(passages >= 3600 && passages <= 4169) && (
            <div id="box" className = "head-text">
            <img src = {banque} />
          
            <div className ='text-on-image' >
              <h3> 
        
                <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "5vmin",
        pointerEvents: "none",
        outline: "none",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        
          <div>
          <br />
            <span>
              <span style={{ fontWeight: "bold", color: "orange",  }}>
                {" "}
                {passages} tours{" "}
              </span>
            </span>{" "}
            <br />
            <br />
            <span
              style={{
                paddingTop: "2rem",
                fontWeight: "bold",
              }}
            >
              
            </span>
          </div>
        
        
      </div>
    </div>
              </h3>
            </div>
            </div>
            )}
            
            {(passages >= 4170 && passages <= 4539) && (
            <div id="box" className = "head-text">
            <img src = {pharma} />
          
            <div className ='text-on-image' >
              <h3> 
        
                <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "5vmin",
        pointerEvents: "none",
        outline: "none",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        
          <div>
          <br />
            <span>
              <span style={{ fontWeight: "bold", color: "orange",  }}>
                {" "}
                {passages} tours{" "}
              </span>
            </span>{" "}
            <br />
            <br />
            <span
              style={{
                paddingTop: "2rem",
                fontWeight: "bold",
              }}
            >
              
            </span>
          </div>
        
        
      </div>
    </div>
              </h3>
            </div>
            </div>
            )}
            
            {(passages >= 4540 && passages <= 5149) && (
            <div id="box" className = "head-text">
            <img src = {eiffel2s} />
          
            <div className ='text-on-image' >
              <h3> 
        
                <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "5vmin",
        pointerEvents: "none",
        outline: "none",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        
          <div>
          <br />
            <span>
              <span style={{ fontWeight: "bold", color: "orange",  }}>
                {" "}
                {passages} tours{" "}
              </span>
            </span>{" "}
            <br />
            <br />
            <span
              style={{
                paddingTop: "2rem",
                fontWeight: "bold",
              }}
            >
              
            </span>
          </div>
        
        
      </div>
    </div>
              </h3>
            </div>
            </div>
            )}
            
            {(passages >= 5150 && passages <= 5509) && (
            <div id="box" className = "head-text">
            <img src = {superette} />
          
            <div className ='text-on-image' >
              <h3> 
        
                <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "5vmin",
        pointerEvents: "none",
        outline: "none",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        
          <div>
          <br />
            <span>
              <span style={{ fontWeight: "bold", color: "orange",  }}>
                {" "}
                {passages} tours{" "}
              </span>
            </span>{" "}
            <br />
            <br />
            <span
              style={{
                paddingTop: "2rem",
                fontWeight: "bold",
              }}
            >
              
            </span>
          </div>
        
        
      </div>
    </div>
              </h3>
            </div>
            </div>
            )}
            
            {(passages >= 5510 && passages <= 6549) && (
            <div id="box" className = "head-text">
            <img src = {eiffel17j} />
          
            <div className ='text-on-image' >
              <h3> 
        
                <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "5vmin",
        pointerEvents: "none",
        outline: "none",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        
          <div>
          <br />
            <span>
              <span style={{ fontWeight: "bold", color: "orange",  }}>
                {" "}
                {passages} tours{" "}
              </span>
            </span>{" "}
            <br />
            <br />
            <span
              style={{
                paddingTop: "2rem",
                fontWeight: "bold",
              }}
            >
              
            </span>
          </div>
        
        
      </div>
    </div>
              </h3>
            </div>
            </div>
            )}
            
            {(passages >= 6550 && passages <= 6799) && (
            <div id="box" className = "head-text">
            <img src = {concauto} />
          
            <div className ='text-on-image' >
              <h3> 
        
                <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "5vmin",
        pointerEvents: "none",
        outline: "none",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        
          <div>
          <br />
            <span>
              <span style={{ fontWeight: "bold", color: "orange",  }}>
                {" "}
                {passages} tours{" "}
              </span>
            </span>{" "}
            <br />
            <br />
            <span
              style={{
                paddingTop: "2rem",
                fontWeight: "bold",
              }}
            >
              
            </span>
          </div>
        
        
      </div>
    </div>
              </h3>
            </div>
            </div>
            )}
            
            {(passages >= 6800 && passages <= 9069) && (
            <div id="box" className = "head-text">
            <img src = {eiffel3s} />
          
            <div className ='text-on-image' >
              <h3> 
        
                <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "5vmin",
        pointerEvents: "none",
        outline: "none",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        
          <div>
          <br />
            <span>
              <span style={{ fontWeight: "bold", color: "orange",  }}>
                {" "}
                {passages} tours{" "}
              </span>
            </span>{" "}
            <br />
            <br />
            <span
              style={{
                paddingTop: "2rem",
                fontWeight: "bold",
              }}
            >
              
            </span>
          </div>
        
        
      </div>
    </div>
              </h3>
            </div>
            </div>
            )}
            
            {(passages >= 9070 && passages <= 10889) && (
            <div id="box" className = "head-text">
            <img src = {eiffel1m} />
          
            <div className ='text-on-image' >
              <h3> 
        
                <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "5vmin",
        pointerEvents: "none",
        outline: "none",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        
          <div>
          <br />
            <span>
              <span style={{ fontWeight: "bold", color: "orange",  }}>
                {" "}
                {passages} tours{" "}
              </span>
            </span>{" "}
            <br />
            <br />
            <span
              style={{
                paddingTop: "2rem",
                fontWeight: "bold",
              }}
            >
              
            </span>
          </div>
        
        
      </div>
    </div>
              </h3>
            </div>
            </div>
            )}
            
            {(passages >= 10890) && (
            <div id="box" className = "head-text">
            <img src = {boulangerie} />
          
            <div className ='text-on-image' >
              <h3> 
        
                <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "5vmin",
        pointerEvents: "none",
        outline: "none",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        
          <div>
          <br />
            <span>
              <span style={{ fontWeight: "bold", color: "orange",  }}>
                {" "}
                {passages} tours{" "}
              </span>
            </span>{" "}
            <br />
            <br />
            <span
              style={{
                paddingTop: "2rem",
                fontWeight: "bold",
              }}
            >
              
            </span>
          </div>
        
        
      </div>
    </div>
              </h3>
            </div>
            </div>
            )}
            
            
            
        </article>
  );
}

export default Moove;
