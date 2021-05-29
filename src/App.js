import { Canvas } from 'react-three-fiber';
import * as THREE from 'three';
import fira from './Fira.json'

function App() {
  return (
      <Canvas style={{
        width: '100vw',
        height: '100vh'
      }}>
        <pointLight/>
        <mesh position={[-25, -1, -20]}>
          <textGeometry attach='geometry' args={[
            'hello world',
            {
              font: new THREE.FontLoader().parse(fira),
              size: 5,
              height: 1,
            }
          ]}/>
          <meshPhongMaterial/>
        </mesh>
      </Canvas>
  );
}

export default App;
