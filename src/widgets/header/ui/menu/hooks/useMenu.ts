import { useGate, useUnit } from 'effector-react'
import { $modal, modalClosed, modalGate, modalOpened } from '../model'

export const useMenu = () => {
  useGate(modalGate);

  const model = useUnit({
    handleOpenModal: modalOpened,
    handleCloseModal: modalClosed,
    isOpen: $modal,
  })

  return model;
}