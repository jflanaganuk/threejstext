import { Canvas } from 'react-three-fiber';
import * as THREE from 'three';
import fira from './Fira.json'
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
      <Canvas style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black'
      }}>
        <OrbitControls/>
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
          <meshNormalMaterial/>
        </mesh>
      </Canvas>
  );
}

export default App;
