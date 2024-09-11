import {
  TransformWrapper,
  TransformComponent,
  useControls
} from "react-zoom-pan-pinch";

import mapImg from './assets/map.jpg';
import styles from './Map.module.css';


export default function Map() {
  const Controls = () => {
    const { zoomIn, zoomOut, resetTransform, ...other } = useControls();
    return (
      <div className={styles.controls}>
        <button onClick={() => zoomIn(1)}>Zoom In</button>
        <button onClick={() => zoomOut(1)}>Zoom Out</button>
        <button onClick={() => resetTransform()}>Reset</button>
      </div>
    );
  };
  return (
    <div className={styles.Map}>
      <TransformWrapper centerOnInit limitToBounds={false}>
      <Controls />
      <TransformComponent>
        <img
          src={mapImg}
          width="100%"
          height="90%"
        />
      </TransformComponent>
    </TransformWrapper>
    </div>
  );
}