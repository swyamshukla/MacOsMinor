import { useState } from "react";
import Application from "./Application";
import {
  DragDropContext,
  Droppable,
  Draggable,
} from "@hello-pangea/dnd";
// import useNavigate from 'react-router'
import folderIcon from '../../assets/icons/folder.png';
import googleIcon from '../../assets/icons/google.png';
import picturesIcon from '../../assets/icons/pictures1.png';
import vscodeIcon from '../../assets/icons/vscode.png';
import cameraIcon from '../../assets/icons/camera.png';
import ytIcon from '../../assets/icons/yt.png';
import chatgptIcon from '../../assets/icons/chatgpt.png'
import instagramIcon from '../../assets/icons/instagram.png'
import facebookIcon from '../../assets/icons/facebook.webp'
import whatsappIcon from '../../assets/icons/whatsapp.png'
import linkedinIcon from '../../assets/icons/linkedin.png'

import netflixIcon from '../../assets/icons/netflix.png'
import { useNavigate } from "react-router";
const Icons = () => {
  let navigate  = useNavigate()

  const handleIconClick = (item) => {
    console.log(item.url)
  if (item.url) {
    // window.location.href = item.url
    if(item.type==="vscode"){
      return window.open(item.url, "_blank")
    }
    window.location.assign(item.url);

  } else {
    // handle local navigation, modals, etc. if needed
    if(item.type==='camera'){
      navigate('/camera')
    }


  }
};

const [desktop, setDesktop] = useState([
  { id: "1", type: "google", name: "Google", icon: googleIcon, url: "https://www.google.com" },
  { id: "2", type: "youtube", name: "YouTube", icon: ytIcon, url: "https://www.youtube.com" },
  { id: "3", type: "chatgpt", name: "ChatGPT", icon: chatgptIcon, url: "https://chat.openai.com" },
  { id: "4", type: "instagram", name: "Instagram", icon: instagramIcon, url: "https://www.instagram.com" },
  { id: "5", type: "facebook", name: "Facebook", icon: facebookIcon, url: "https://www.facebook.com" },

  { id: "6", type: "whatsapp", name: "WhatsApp", icon: whatsappIcon, url: "https://web.whatsapp.com" },

  { id: "7", type: "linkedin", name: "LinkedIn", icon: linkedinIcon, url: "https://www.linkedin.com" },
  { id: "8", type: "folder", name: "old Folder", icon: folderIcon },
  { id: "9", type: "netflix", name: "Netflix", icon: netflixIcon, url: "https://www.netflix.com" },
    { id: "10", type: "vscode", name: "Vscode", icon: vscodeIcon, url: "https://vscode.dev/" },
   { id: "11", type: "camera", name: "Camera", icon: cameraIcon},


]);



  // Rearrange items after drag
  const onDragEnd = (result) => {
    if (!result.destination) return;

    const updated = [...desktop];
    const [movedItem] = updated.splice(result.source.index, 1);
    updated.splice(result.destination.index, 0, movedItem);

    setDesktop(updated);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="desktop-grid" direction="horizontal">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="
              grid grid-flow-col gap-x-3 gap-y-8 p-6 h-[calc(100vh-50px)]
              [grid-template-rows:repeat(auto-fill,_100px)]
              [grid-auto-columns:120px]
              text-center
            "
          >
            {desktop.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <div 
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Application
                      name={item.name}
                      icon={item.icon}
                      type={item.type}
                      className="flex h-[110px] w-[120px] flex-col items-center justify-center"
                      onClick={()=>handleIconClick(item)}
                    />
                  </div>
                )}
              </Draggable>
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Icons;
