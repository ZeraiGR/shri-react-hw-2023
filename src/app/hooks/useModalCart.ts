import { reset } from '@/store/features/cartSlice';
import { useAppDispatch } from '@/store/hooks';
import { useCallback, useState } from 'react';

export default function useModalCart () {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentId, setCurrentId] = useState<string>();

  const closeModal = useCallback(() => setIsModalOpen(false), []);

  const openModal = useCallback((id: string) => {
    setCurrentId(id);
    setIsModalOpen(true);
  }, []);

  const applyOperation = useCallback(() => {
    if (!!currentId) dispatch(reset(currentId));
    setIsModalOpen(false);
    document.body.classList.remove("block");
  }, [dispatch, currentId]);

  return {isModalOpen, openModal, closeModal, applyOperation};
}