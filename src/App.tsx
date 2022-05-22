import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import GlobalStyle from './styles/global';

import Modal from 'react-modal';
import NewTransationModal from './components/NewTransationModal';

Modal.setAppElement('#root');


function App() {

  
  const [isNewTransationModalOpen, setIsNewTransationModalOpen] = useState(false);

  function handleOpenNewTransationModal() {
    setIsNewTransationModalOpen(true);
  }

  
  function handleCloseNewTransationModal() {
    setIsNewTransationModalOpen(false);
  }

  return (
    <>
     <Header onOpenNewTransationModal={handleOpenNewTransationModal} />
     <Dashboard />

     <NewTransationModal 
        isOpen={isNewTransationModalOpen}
        onRequestClose={handleCloseNewTransationModal}
      />

     <GlobalStyle />
    </>
  );
}

export default App;
