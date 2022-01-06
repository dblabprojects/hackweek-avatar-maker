import React from "react";

export function UploadButton({ onGLBUploaded }) {
  return (
    <label className="uploadButton" tabIndex="0">
      Carregar parte customizada
      <input onChange={onGLBUploaded} type="file" id="input" accept="model/gltf-binary,.glb"></input>
    </label>
  );
}
