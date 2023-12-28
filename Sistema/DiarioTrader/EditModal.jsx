import React, { useState, useEffect } from 'react';

function EditModal({ isOpen, fieldName, currentValue, onSave, closeEditModal }) {
  const [value, setValue] = useState(currentValue);

  // Atualiza o estado local quando o currentValue for alterado
  useEffect(() => {
    setValue(currentValue);
  }, [currentValue]);

  const handleSave = () => {
    onSave(value);
    closeEditModal();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeEditModal}>&times;</span>
        <h3>Editar {fieldName}</h3>
        <input 
          type="text" 
          value={value} 
          onChange={(e) => setValue(e.target.value)} 
        />
        <button onClick={handleSave} className="btn btn-small btn-selecionar">Salvar</button>
      </div>
    </div>
  );
}

export default EditModal;