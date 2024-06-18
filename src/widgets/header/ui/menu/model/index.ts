import { createDomain } from 'effector';
import { createGate } from 'effector-react';

const modal = createDomain();

export const modalGate = createGate('modal')

export const modalOpened = modal.createEvent();
export const modalClosed = modal.createEvent();

export const $modal = modal.createStore(false)
.on(modalOpened, () => true)
.on(modalClosed, () => false)