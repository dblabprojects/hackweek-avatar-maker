import React from "react";
import { Toolbar } from "./Toolbar";
import { UploadButton } from "./UploadButton";
import { MoreMenu } from "./MoreMenu";
import { dispatch } from "../dispatch";
import constants from "../constants";

function dispatchResetView() {
  dispatch(constants.resetView);
}

function dispatchExportAvatar() {
  dispatch(constants.exportAvatar);
}

export function ToolbarContainer({ onGLBUploaded, randomizeConfig }) {
  return (
    <Toolbar>
      <span className="appName">Avatares VROOM</span>
      <span className="appName">by Mozilla Hubs</span>
      <MoreMenu
        items={
          <>
            <UploadButton onGLBUploaded={onGLBUploaded} />
            <a href="https://github.com/mozilla/hackweek-avatar-maker" target="_blank">
              GitHub
            </a>
          </>
        }
      ></MoreMenu>
      <button onClick={randomizeConfig}>Aleatório</button>
      <button onClick={dispatchResetView}>Centralizar câmera</button>
      <button onClick={dispatchExportAvatar} className="primary">
        Exportar avatar
      </button>
    </Toolbar>
  );
}
